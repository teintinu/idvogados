import { useState, useEffect } from 'react'
import { initializeApp, User } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig'

const app = initializeApp(firebaseConfig)
export const fbauth = app.auth()
export const fbstore = app.firestore()

export type Auth = 'pendente' | 'nao logado' | User
export function useAuth() {
  const [r, s] = useState<Auth>("pendente")
  useEffect(() => {
    fbauth.onAuthStateChanged((u) => {
      s(u || "nao logado")
    })
  })
  return r
}