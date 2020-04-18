import * as React from 'react'
import { Passos } from './passos'
import { fbauth } from '../firebase'
import { auth } from 'firebase/app'
import { usePerfil, TipoTrabalhador, TipoAdvogado, gravaPerfil, gravaCaso, useCaso } from '../state/perfil'
import { useEstados, useCidades } from '../state/brasil'
import { Btn } from './btn'

export interface PerfilProps {
  usuario: firebase.User
}

export function Perfil({ usuario }: PerfilProps) {
  const [pstate, perfil, setPerfil] = usePerfil(usuario.uid)
  const cid = '1'
  const [, caso, setCaso] = useCaso(usuario.uid, cid)
  const [dropdown, setDropdown] = React.useState('')
  const estados = useEstados()
  const cidades = useCidades(perfil.uf)
  const [gravando, setGravando] = React.useState(false)
  const ehTrabalhador = !!((perfil.tipo || 0) & TipoTrabalhador)
  const ehAdvogado = !!((perfil.tipo || 0) & TipoAdvogado)
  return <Passos atual={1}>
    {pstate === "pendente" ? <button className="button is-loading"></button> :
      gravando ? <>
        <button className="button is-loading">
        </button>
        <p className="is-size-4">Registramos o seu perfil, iremos verificar seus dados, você receberá um email quando seu cadastro for aprovado</p>
        <p className="is-size-7">PS: Este app é apenas um protótipo, as outras funcionalidades ainda não foram implementadas</p>
      </> :
        <>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Informe seu nome completo</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="nome" id="nome" type="text" placeholder="Nome completo" autoFocus data-validate="require"
                    value={perfil.nome} onChange={updNome}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Informe seu CPF</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="cpf" id="cpf" type="text" placeholder="CPF" autoFocus data-validate="require"
                    value={perfil.cpf} onChange={updCPF}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Estado onde você mora:</label>
            </div>
            <div className="field-body">
              <div className={dropdown === 'uf' ? "dropdown is-active" : "dropdown"}>
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={togleEstado} onBlur={inativa}>
                    <span>{perfil.uf || '-'}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content" style={{ maxHeight: '10rem', overflowY: 'scroll' }}>
                    {estados.map((e) => {
                      return <a key={e.sigla} onClick={selEstado} className={e.sigla === perfil.uf ? "dropdown-item is-active" : "dropdown-item"}>
                        {e.sigla}-{e.nome}
                      </a>
                      function selEstado() {
                        setDropdown('')
                        setPerfil({ ...perfil, uf: e.sigla })
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Cidade onde você mora:</label>
            </div>
            <div className="field-body">
              <div className={dropdown === 'cidade' ? "dropdown is-active" : "dropdown"}>
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={togleCidade} onBlur={inativa}>
                    <span>{perfil.uf && perfil.cidade || '-'}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content" style={{ maxHeight: '10rem', overflowY: 'scroll' }}>
                    {cidades.map((c) => {
                      return <a key={c.ibge} onClick={selEstado} className={c.nome === perfil.cidade ? "dropdown-item is-active" : "dropdown-item"}>
                        {c.nome}
                      </a>
                      function selEstado() {
                        setDropdown('')
                        setPerfil({ ...perfil, cidade: c.nome })
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">&nbsp;</label>
            </div>
            <div className="field-body">
              <label className="checkbox" >
                <input type="checkbox" checked={ehTrabalhador} onChange={updTrabalhador} />
            Sou trabalhador e preciso de um advogado
         </label>
            </div>
          </div>

          {ehTrabalhador ?
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-unselectabl">Relato</label>
              </div>
              <div className="field-body">
                <textarea className="textarea" placeholder="Descreva aqui o seu caso com o máximo de detalhes possível" value={caso.descricao || ''} onChange={updCaso}></textarea>
              </div>
            </div>
            : null}

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">&nbsp;</label>
            </div>
            <div className="field-body">
              <label className="checkbox is-unselectabl" >
                <input type="checkbox" checked={ehAdvogado} onChange={updAdvogado} />
             Sou advogado e quero disponibilizar meu trabalho
          </label>
            </div>
          </div>

          {ehAdvogado ?
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">registro da OAB</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input" name="oab" id="oab" type="text" placeholder="OAB/UF" autoFocus data-validate="require"
                      value={perfil.oab} onChange={updOAB}
                    />
                  </div>
                </div>
              </div>
            </div>
            : null}
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">&nbsp;</label>
            </div>
            <div className="field-body">
              <Btn title="Gravar" className="is-primary" run={gravar} />
            </div>
          </div>
        </>
    }
  </Passos >
  function updNome(e: any) {
    setPerfil({ ...perfil, nome: e.target.value })
  }
  function updCPF(e: any) {
    setPerfil({ ...perfil, cpf: e.target.value })
  }
  function updOAB(e: any) {
    setPerfil({ ...perfil, oab: e.target.value })
  }
  function updTrabalhador(e: any) {
    const v = { ...perfil }
    if (e.target.checked) v.tipo = (perfil.tipo || 0) | TipoTrabalhador
    else v.tipo = (perfil.tipo || 0) & (TipoTrabalhador ^ 11)
    setPerfil(v)
  }
  function updAdvogado(e: any) {
    const v = { ...perfil }
    if (e.target.checked) v.tipo = (perfil.tipo || 0) | TipoAdvogado
    else v.tipo = (perfil.tipo || 0) & (TipoAdvogado ^ 11)
    setPerfil(v)
  }
  function updCaso(e: any) {
    setCaso({ ...caso, descricao: e.target.value })
  }
  function togleEstado() {
    setDropdown(dropdown === 'uf' ? '' : 'uf')
  }
  function togleCidade() {
    setDropdown(dropdown === 'cidade' ? '' : 'cidade')
  }
  function inativa() {
    setTimeout(() => setDropdown(''), 100)
  }
  async function gravar() {
    await gravaPerfil(usuario.uid, perfil)
    if (ehTrabalhador) await gravaCaso(usuario.uid, cid, caso)
    setGravando(true)
  }
}
