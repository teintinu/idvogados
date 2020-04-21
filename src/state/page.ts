import { useState, useEffect } from 'react'
import { createPublication, usePub } from './pub'
import { usePerfilDoUsarioLogado, TipoTrabalhador } from './perfil'

export type PageID = 'login' | 'perfil' | 'advogados' | 'casos'

export interface PageInfo {
  title: string,
  icon: React.ReactNode
  component: React.ComponentType
}

export interface PageInfoWithId {
  id: PageID
  title: string,
  icon: React.ReactNode
  component: React.ComponentType
}

export type Pages = {
  [name in PageID]: PageInfo
}

let regPages: Pages

const pubPages = createPublication<false | PageID>(false)

export function registerPages(pages: Pages) {
  regPages = pages
}

export function registeredPages() {
  return regPages
}

export function usePage(): [false | PageInfoWithId, number] {
  const [p, perfil] = usePerfilDoUsarioLogado()
  let id = usePub(pubPages)
  if (id === false) {
    if (p === "pendente") return [false, 0]
    else if (p === "nao logado") id = 'login'
    else if (p === "novo") id = 'perfil'
    else if (perfil.tipo === TipoTrabalhador) id = 'advogados'
    else id = 'casos'
  }
  const tipo: number = perfil.tipo || 0
  const n = { id, ...regPages[id] }
  return [n, tipo]
}

export function navigate(id: false | PageID) {
  pubPages.dispatch(id)
}
