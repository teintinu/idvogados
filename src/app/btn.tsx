import * as React from 'react'

export interface BtnProps {
  title: string
  className: string
  run(): Promise<void>
}

export function Btn({ title, className, run }: BtnProps) {
  const [ocupado, setOcupado] = React.useState(false)
  let cls = 'button ' + className
  if (ocupado) cls += ' is-loading'
  return <button className={cls} onClick={runBtn}>{title}</button >
  function runBtn() {
    setOcupado(true)
    run().then(() => 1, (e) => console.log(e))
  }
}