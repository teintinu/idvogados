import * as React from 'react'
import { string } from 'prop-types'

export interface PassosProp {
  atual: number
}

const passos = [
  { titulo: 'Conta', descricao: 'Precisamos que você se identifique' },
  { titulo: 'Perfil', descricao: 'Precisamos saber um pouco mais sobre você' },
  { titulo: 'Pesquisa', descricao: 'Encontre o advogado que você precisa' },
  { titulo: 'Acompanhamento', descricao: 'Acompanhe seu processo' },
]

export function Passos({ atual, children }: React.PropsWithChildren<PassosProp>) {
  return <ul className="steps is-vertical is-balanced">
    {passos.map((p, idx) => {
      const cls = idx < atual ? "steps-segment is-completed is-success" :
        idx === atual ? "steps-segment is-active" : "steps-segment"
      return <li key={idx} className={cls}>
        <span className="steps-marker">
          <span className="icon">
            <i className={idx < atual ? "fa fa-check" :
              idx === atual ? "fa fa-circle" : "fa fa-circle"}
            ></i>
          </span>
        </span>
        <div className="steps-content">
          <p className="is-size-4">{p.titulo}</p>
          {atual === idx ? <><p>{p.descricao}</p>{children}</> : null}
        </div>
      </li>
    })}
  </ul>
} 
