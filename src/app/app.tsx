import * as React from 'react'
import { useAuth } from '../firebase'
import { Login } from './login'

export function App() {
  const u = useAuth()
  if (u === "pendente") return <button className="button is-loading"></button>
  if (u === "nao logado") return <Login />
  return <div>u</div>
} 
