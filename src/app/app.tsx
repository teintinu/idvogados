import * as React from 'react'
import { usePage, registerPages } from '../state/page'
import { BarraApp } from './barraApp'
import { DrawerApp } from './drawerApp'
import { PerfilPage } from './perfil'
import { ListaCasos } from './listaCasos'
import { ListaAdvogados } from './listaAdvogados'
import { LoginPage } from './login'
import { useOcupado } from '../state/ocupado'

export function App() {
  const [page] = usePage()
  const { desocupar } = useOcupado()

  React.useEffect(() => {
    if (page !== false) desocupar()
  }, [page])

  if (page === false) return null
  return <>
    <BarraApp />
    <DrawerApp />
    {React.createElement(page.component)}
  </>
}

registerPages({
  login: {
    title: 'Identifique-se',
    icon: 'lock',
    component: LoginPage
  },
  perfil: {
    title: 'Perfil',
    icon: 'user',
    component: PerfilPage
  },
  casos: {
    title: 'Casos',
    icon: 'puzzle-piece',
    component: ListaCasos
  },
  advogados: {
    title: 'Advogados',
    icon: 'balance-scale',
    component: ListaAdvogados
  },
})