import { useState, useEffect } from 'react'
import { fbstore } from '../firebase'
import { SiglaEstado } from './brasil'
import { useUsuarioLogado } from './auth'

export const TipoTrabalhador = 1
export const TipoAdvogado = 2

export interface Perfil {
  nome: string
  cpf: string
  telefones: string
  cidade: string
  uf: SiglaEstado
  tipo: number
  oab: '-' | string
  aut1?: boolean
  aut2?: boolean
  aut3?: boolean
  ok?: boolean
}

export interface Proposta {
  trabalhador: string
  advogado: string
  data: number
  proposta: string
}

export function usePerfilDoUsarioLogado(): ["pendente" | "nao logado" | "edita" | "novo" | "erro", Perfil, (n: Perfil) => void] {
  const u = useUsuarioLogado()
  const [hRet, hSet] = useState<["pendente" | "nao logado" | "edita" | "novo" | "erro", Perfil]>(["pendente", {} as any])
  useEffect((() => {
    if (u === 'pendente') hSet(["pendente", {} as any])
    else if (u === 'nao logado') hSet(["nao logado", {} as any])
    else {
      fbstore.collection("perfil").doc(u.uid).get().then((d) => {
        if (d.exists) hSet(["edita", d.data() as any])
        else hSet(["novo", {} as any])
      }, (e) => hSet(["erro", hRet[1]]))
    }
  }) as any, [u])
  return [hRet[0], hRet[1], seta]
  function seta(n: Perfil) {
    hSet([hRet[0] === "pendente" ? "novo" : hRet[0], n])
  }
}

export function usePerfilPorId(uid: string): ["pendente" | "edita" | "novo" | "erro", Perfil, (n: Perfil) => void] {
  const [hRet, hSet] = useState<["pendente" | "edita" | "novo" | "erro", Perfil]>(["pendente", {} as any])
  useEffect((() => {
    fbstore.collection("perfil").doc(uid).get().then((d) => {
      if (d.exists) hSet(["edita", d.data() as any])
      else hSet(["novo", {} as any])
    }, (e) => hSet(["erro", hRet[1]]))
  }) as any, [uid])
  return [hRet[0], hRet[1], seta]
  function seta(n: Perfil) {
    hSet([hRet[0] === "pendente" ? "novo" : hRet[0], n])
  }
}

export function gravaPerfil(uid: string, perfil: Perfil) {
  return fbstore.collection("perfil").doc(uid).set(perfil)
}
