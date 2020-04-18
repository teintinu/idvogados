import { useState, useEffect } from 'react'
import { fbauth, fbstore } from '../firebase'
import { SiglaEstado } from './brasil'

export const TipoTrabalhador = 1
export const TipoAdvogado = 2

export interface Perfil {
  nome: string
  cpf: string
  cidade: string
  uf: SiglaEstado
  tipo: number
  oab: '-' | string
}

export interface Caso {
  trabalhador: string
  descricao: string
  data: number
  advogado?: string
}

export interface Proposta {
  trabalhador: string
  advogado: string
  data: number
  proposta: string
}

export function usePerfil(uid: string): ["pendente" | "edita" | "novo" | "erro", Perfil, (n: Perfil) => void] {
  const [r, s] = useState<["pendente" | "edita" | "novo" | "erro", Perfil]>(["pendente", {} as any])
  useEffect((() => {
    if (uid === 'pendente') s(["pendente", {} as any])
    if (uid === 'nao logado') s(["erro", {} as any])
    else {
      console.log('le dados')
      fbstore.collection("perfil").doc(uid).get().then((d) => {
        if (d.exists) s(["edita", d.data() as any])
        else s(["novo", {} as any])
      }, (e) => s(["erro", r[1]]))
    }
  }) as any, [uid])
  return [r[0], r[1], seta]
  function seta(n: Perfil) {
    s([r[0] === "pendente" ? "novo" : r[0], n])
  }
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

export function gravaPerfil(uid: string, perfil: Perfil) {
  return fbstore.collection("perfil").doc(uid).set(perfil)
}

export function gravaCaso(uid: string, cid: string, caso: Caso) {
  debugger
  caso.trabalhador = uid
  if (!caso.data) caso.data = Date.now()
  return fbstore.collection("caso").doc(uid + "-" + cid).set(caso)
}
