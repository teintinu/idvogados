import { useEffect, useState } from "react"
import { User } from "firebase"
import { fbauth } from "../firebase"
import { createPublication, usePub } from "./pub"

export type UsuarioLogado = 'pendente' | 'nao logado' | User

const pubUsuarioLogado = createPublication<UsuarioLogado>('pendente')
let tmUpdateUsuarioLogado: any

fbauth.onAuthStateChanged((u) => {
  if (tmUpdateUsuarioLogado) clearTimeout(tmUpdateUsuarioLogado)
  tmUpdateUsuarioLogado = setTimeout(() => {
    tmUpdateUsuarioLogado = undefined
    pubUsuarioLogado.dispatch(u || "nao logado")
  }, 500)
})

export function useUsuarioLogado() {
  return usePub(pubUsuarioLogado)
}