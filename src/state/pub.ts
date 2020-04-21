import { useState, useEffect } from 'react';

export type UnsubscribeFunction = () => void

export interface Publication<T> {
  readonly last: T
  readonly refCount: number
  subscribe(event: (v: T) => void, dispatchDelayed?: boolean | 'once'): UnsubscribeFunction
  dispatch(v: T, force?: boolean): boolean
  onDestroy(fn: UnsubscribeFunction): void
  destroy(): void
}

export function createPublication<T>(
  init: T,
  comparer?: (a: T, b: T, allProperties?: boolean) => number): Publication<T> {
  let _gen = 0
  let subs: { [id: string]: (v: T) => void } = {}
  let onDestroy: UnsubscribeFunction[]
  const self = {
    last: init,
    get refCount() {
      return Object.keys(subs).length
    },
    subscribe(event: (v: T) => void, dispatchDelayed?: boolean | 'once') {
      const id = _gen++
      subs[id] = event
      if (dispatchDelayed === 'once') {
        subs[id] = (v) => {
          event(v)
          delete subs[id]
        }
      } else if (!dispatchDelayed) {
        try {
          event(self.last)
        } catch (e) {
          //
        }
      }
      return () => delete subs[id]
    },
    dispatch(v: T, force?: boolean) {
      if (comparer && comparer(self.last, v, true) === 0) if (!force) return false
      self.last = v
      const skeys = Object.keys(subs)
      for (const id of skeys) {
        const s = subs[id]
        if (s) {
          try {
            s(v)
          } catch (e) {
            delete subs[id]
          }
        }
      }
      return true
    },
    onDestroy(fn: UnsubscribeFunction) {
      if (!onDestroy) onDestroy = [fn]
      else onDestroy.push(fn)
    },
    destroy() {
      self.last = undefined as any
      subs = undefined as any
      if (onDestroy) onDestroy.forEach((d) => setTimeout(d, 1))
      onDestroy = undefined as any
    }
  }
  return self
}

export function mapSubscription<T, R>(
  sub: Publication<T>,
  getter: (v: T) => R,
  setter?: (l: T, v: R) => T,
  comparer?: (a: R, b: R, allProperties?: boolean) => number): Publication<R> {
  const self: Publication<R> = {
    get last() {
      return getter(sub.last)
    },
    get refCount() {
      return sub.refCount
    },
    subscribe(event: (v: R) => void, dispatchDelayed?: boolean | 'once') {
      return sub.subscribe((v) => event(getter(v)), dispatchDelayed)
    },
    dispatch(v: R) {
      if (comparer && comparer(self.last, v, true) === 0) return false
      if (setter) {
        sub.dispatch(setter(sub.last, v))
        return true
      }
      return false
    },
    onDestroy() {

    },
    destroy() {
      //
    }
  }
  return self
}

export function usePub<T>(pub: Publication<T>) {
  const [r, s] = useState(pub.last)
  useEffect(() => pub.subscribe(s), [pub.last])
  return r
}