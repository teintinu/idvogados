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
          <label className="label">Username</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input" name="username" id="username" type="text" placeholder="Username" autoFocus data-validate="require" disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Password</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control has-icon has-icon-right">
              <input className="input" type="password" name="password" id="password" placeholder="Password" data-validate="require" disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Confirm password</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control has-icon has-icon-right">
              <input className="input" type="password" name="password_confirm" id="password_confirm" placeholder="Confirm password" data-validate="require" disabled />
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
