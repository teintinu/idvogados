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
  return <div className="steps">
    {passos.map((p, idx) => {
      const cls = idx < atual ? "step-item is-completed is-success" :
        idx === atual ? "step-item is-active" : "step-item"
      return <div className={cls}>
        <div className="step-marker">
          <span className="icon">
            <i className="fa fa-check"></i>
          </span>
        </div>
        <div className="step-details">
          <p className="step-title">{p.titulo}</p>
          <p>{p.descricao}</p>
        </div>
      </div>
    })}
    <div className="steps-content">
      <div className="step-content has-text-centered is-active">
        {children}
      </div>
    </div>
  </div>
} 
