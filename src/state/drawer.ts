import { createPublication, usePub } from './pub';

const pubDrawerVisible = createPublication(false)

export function useDrawer(): [boolean, { openDrawer(): void, closeDrawer(): void, toggleDrawer(): void }] {
  const v = usePub(pubDrawerVisible)
  return [v, {
    openDrawer() {
      pubDrawerVisible.dispatch(true)
    },
    closeDrawer() {
      pubDrawerVisible.dispatch(false)
    },
    toggleDrawer() {
      pubDrawerVisible.dispatch(!pubDrawerVisible.last)
    },
  }]
}
