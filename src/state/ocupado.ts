import { createPublication, usePub } from './pub';

const pubOcupado = createPublication(true)

export function useOcupado(): { ocupar(): void, desocupar(): void, estado: boolean } {
  const v = usePub(pubOcupado)
  return {
    estado: v,
    ocupar() {
      pubOcupado.dispatch(true)
    },
    desocupar() {
      pubOcupado.dispatch(false)
    },
  }
}
