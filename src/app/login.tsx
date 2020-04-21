import * as React from 'react'
import { fbauth } from '../firebase'
import { auth } from 'firebase/app'
import { TextField, Paper, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { red, blue } from '@material-ui/core/colors'
import logo from '../logo.png'
import { useOcupado } from '../state/ocupado'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'column'
    },
    logo: {
      padding: 20,
      width: '80%'
    },
    entry: {
      width: '30rem',
      maxWidth: '80%',
      margin: 5,
    },
    botoes: {
      padding: 5,
      width: '30rem',
      maxWidth: '80%',
      display: 'flex',
      justifyContent: 'space-around'
    },
    google: {
      backgroundColor: red[900],
    },
    facebook: {
      backgroundColor: blue[900],
      '&:hover': {
        backgroundColor: blue[800],
      }
    },
  }),
);

export function LoginPage() {
  const classes = useStyles()
  const {ocupar} = useOcupado()
  return <form noValidate autoComplete="off">
    <Paper className={classes.root}>
      <img className={classes.logo} src={logo} />

      <TextField
        id="email"
        label="Seu e-mail"
        variant="filled"
        color="secondary"
        className={classes.entry}
      />
      <TextField
        id="senha"
        label="Sua senha"
        variant="filled"
        color="secondary"
        className={classes.entry}
      />
      <div className={classes.botoes}>
        <Button variant="contained" disabled>Acessar com e-mail e senha</Button>
      </div>
      <div className={classes.botoes}>
        <Button className={classes.google} variant="contained" color="secondary" onClick={logarGmail}>
          Logar com Google
        </Button>
        <Button className={classes.facebook} variant="contained" color="primary" disabled onClick={logarFacebook}>
          Logar com Facebook
        </Button>
      </div>
    </Paper>
  </form>
  function logarGmail() {
    ocupar()
    const provider = new auth.GoogleAuthProvider();
    return fbauth.signInWithPopup(provider)
  }
  function logarFacebook() {
    ocupar()
    const provider = new auth.FacebookAuthProvider();
    return fbauth.signInWithPopup(provider)
  }
}
