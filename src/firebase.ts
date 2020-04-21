import { useState, useEffect } from 'react'
import { initializeApp, User } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig'
import { useOcupado } from './state/ocupado';

const app = initializeApp(firebaseConfig)
export const fbauth = app.auth()
export const fbstore = app.firestore()
fbstore.enablePersistence({
  synchronizeTabs: true
})
