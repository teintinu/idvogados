import { useState, useEffect } from 'react'
import { fbstore } from '../firebase'
import { usePerfilDoUsarioLogado } from './perfil'
import { SiglaEstado, brasil, buscaCidade } from './brasil'

export interface Caso {
  trabalhador: string
  descricao: string
  data: number
  advogado?: '-' | string
  cidade: number,
  uf: number
}

export function useCaso(uid: string, cid: string): ["pendente" | "edita" | "novo" | "erro", Caso, (n: Caso) => void] {
  const [r, s] = useState<["pendente" | "edita" | "novo" | "erro", Caso]>(["pendente", {} as any])
  useEffect((() => {
    if (uid === 'pendente') s(["pendente", {} as any])
    if (uid === 'nao logado') s(["erro", {} as any])
    else {
      fbstore.collection("caso").doc(uid + "-" + cid).get().then((d) => {
        if (d.exists) s(["edita", d.data() as any])
        else s(["novo", {} as any])
      }, (e) => s(["erro", r[1]]))
    }
  }) as any, [uid])
  return [r[0], r[1], seta]
  function seta(n: Caso) {
    s([r[0] === "pendente" ? "novo" : r[0], n])
  }
}

export interface CasoComID extends Caso {
  id: string
}

export function useListaCasos(): [
  false | "erro" | CasoComID[],
  '-' | SiglaEstado,
  '-' | string,
  (v: '-' | SiglaEstado) => void,
  (v: '-' | string) => void,
] {
  const [p, perfil] = usePerfilDoUsarioLogado()
  const [filtro, setFiltro] = useState<"pendente" | { uf: '-' | SiglaEstado, cidade: '-' | string }>('pendente')
  const [casos, setCasos] = useState<false | "erro" | CasoComID[]>(false)
  useEffect(() => {
    if (p === 'pendente' || p === 'nao logado') setCasos(false)
    else if (filtro === 'pendente') {
      setFiltro({ uf: perfil.uf, cidade: perfil.cidade })
    }
  }, [p, perfil])

  useEffect(() => {
    setCasos(false)
    if (filtro !== "pendente") {
      let qry: firebase.firestore.Query = fbstore.collection("caso")
      const { uf, cidade } = filtro
      debugger
      if (uf !== '-') {
        if (cidade !== '-') qry = qry.where('cidade', '==', buscaCidade(uf, cidade).ibge)
        else qry = qry.where('uf', '==', brasil[uf].ibge)
      }
      qry.get().then((d) => {
        setCasos(d.docs.map((d2) => ({ id: d2.id, ...(d2.data()) }) as any))
      }, (e) => setCasos("erro"))
    }
  }, [filtro])
  return [casos,
    filtro === 'pendente' ? '-' : filtro.uf,
    filtro === 'pendente' ? '-' : filtro.cidade, filtraUF, filtraCidade]
  function filtraUF(uf: '-' | SiglaEstado) {
    const olduf = filtro === 'pendente' ? '' : filtro.uf
    if (olduf !== uf) setFiltro({ uf, cidade: '-' })
  }
  function filtraCidade(cidade: '-' | string) {
    const olduf = filtro === 'pendente' ? '-' : filtro.uf
    const oldcid = filtro === 'pendente' ? '-' : filtro.cidade
    if (oldcid !== cidade) setFiltro({ uf: olduf, cidade })
  }
}


export function gravaCaso(uid: string, cid: string, caso: Caso) {
  caso.trabalhador = uid
  if (!caso.data) caso.data = Date.now()
  return fbstore.collection("caso").doc(uid + "-" + cid).set(caso)
}
