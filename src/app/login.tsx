import * as React from 'react'
import { Passos } from './passos'
import { fbauth } from '../firebase'
import { auth } from 'firebase/app'

export function Login() {
  return <Passos atual={0}>
    <>
      <div className="buttons">

        <button className="button is-danger" onClick={logarGmail}>Logar usado conta do Google/GMAIL</button>
        <button className="button is-info" disabled>Logar usando conta do Facebok</button>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">email</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input" name="email" id="email" type="text" placeholder="email" autoFocus data-validate="require" disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Senha</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control has-icon has-icon-right">
              <input className="input" type="password" name="senha" id="senha" placeholder="Senha" data-validate="require" disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Confirma senha</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control has-icon has-icon-right">
              <input className="input" type="password" name="senha_confirm" id="senha_confirm" placeholder="Confirma senha" data-validate="require" disabled />
            </div>
          </div>
        </div>
      </div>
    </>
  </Passos>
  function logarGmail() {
    const provider = new auth.GoogleAuthProvider();
    return fbauth.signInWithPopup(provider)
  }
}
