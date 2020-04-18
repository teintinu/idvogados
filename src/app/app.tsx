import * as React from 'react'
import { useAuth } from '../firebase'
import { Login } from './login'
import { Perfil } from './perfil'
import { usePerfil } from '../state/perfil'

export function App() {
  const u = useAuth()
  const p = usePerfil(typeof u === 'string' ? u : u.uid)
  if (u === "pendente") return <button className="button is-loading"></button>
  if (u === "nao logado") return <Login />
  return <Perfil usuario={u} />
} 
