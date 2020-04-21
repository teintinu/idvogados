import * as React from 'react'
import { TipoTrabalhador, TipoAdvogado, gravaPerfil, usePerfilPorId } from '../state/perfil'
import { useEstados, useCidades } from '../state/brasil'
import { useCaso, gravaCaso } from '../state/caso'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem, NativeSelect } from '@material-ui/core'

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { LoginPage } from './login'
import { useUsuarioLogado } from '../state/auth'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'column'
    },
    entry: {
      width: '40rem',
      margin: 20,
    },
    botoes: {
      padding: 20,
      width: '40%',
      display: 'flex',
      justifyContent: 'space-around'
    },
  }),
);

export interface PerfilProps {
  uid: string
}

export function PerfilPage() {
  const u = useUsuarioLogado()
  if (u === "pendente") return <></>
  if (u === "nao logado") return <LoginPage />
  return <Perfil uid={u.uid} />
}

export function Perfil({ uid }: PerfilProps) {
  const classes = useStyles()
  const [, perfil, setPerfil] = usePerfilPorId(uid)
  const cid = '1'
  const [, caso, setCaso] = useCaso(uid, cid)
  const [dropdown, setDropdown] = React.useState('')
  const estados = useEstados()
  const cidades = useCidades(perfil.uf)
  const ehTrabalhador = !!((perfil.tipo || 0) & TipoTrabalhador)
  const ehAdvogado = !!((perfil.tipo || 0) & TipoAdvogado)
  return <form noValidate autoComplete="off">
    <Paper className={classes.root}>
      <TextField
        id="nome"
        label="Nome completo"
        color="secondary"
        autoComplete="off"
        className={classes.entry}
        InputLabelProps={{ shrink: true }}
        value={perfil.nome} onChange={updNome}
      />
      <TextField
        id="cpf"
        label="CPF"
        autoComplete="off"
        color="secondary"
        className={classes.entry}
        InputLabelProps={{ shrink: true }}
        value={perfil.cpf} onChange={updCPF}
      />

      <FormControl className={classes.entry}>
        <InputLabel id="estado-label" shrink={true}>Estado</InputLabel>
        <NativeSelect
          id="estado"
          value={perfil.uf}
          onChange={updUF}
          rows={9}
        >
          {
            estados.map((e) => {
              return <option value={e.sigla}>{e.sigla + '-' + e.nome}</option >
            })
          }
        </NativeSelect >
      </FormControl>

      <FormControl className={classes.entry} >
        <InputLabel id="cidade-label" shrink={true}>Cidade</InputLabel>
        <NativeSelect
          id="cidade"
          value={perfil.cidade}
          onChange={updCidade}
          rows={9}
        >
          {
            cidades.map((c) => {
              return <option value={c.nome}>{c.nome}</option >
            })
          }
        </NativeSelect >
      </FormControl>

      <FormGroup>
        <FormControlLabel
          className={classes.entry}
          control={<Switch checked={ehTrabalhador} onChange={updTrabalhador} aria-label="Sou trabalhador" />}
          label="Sou trabalhador e preciso de um advogado"
        />
      </FormGroup>

      {ehTrabalhador ? <TextField
        id="cpf"
        label="Descreva aqui o seu caso com o máximo de detalhes possível"
        color="secondary"
        autoComplete="off"
        multiline={true}
        rows={4}
        InputLabelProps={{ shrink: true }}
        className={classes.entry}
        value={caso.descricao || ''} onChange={updCaso}
      /> : null}

      <FormGroup>
        <FormControlLabel
          className={classes.entry}
          control={<Switch checked={ehAdvogado} onChange={updAdvogado} aria-label="Sou advogado" />}
          label="Sou advogado e quero disponibilizar meu trabalho"
        />
      </FormGroup>

      {ehAdvogado ? <TextField
        id="oab"
        label="registro da OAB"
        color="secondary"
        autoComplete="off"
        InputLabelProps={{ shrink: true }}
        className={classes.entry}
        value={perfil.oab} onChange={updOAB}
      /> : null}

      <div className={classes.botoes}>
        <Button variant="contained" onClick={gravar}>Gravar</Button>
      </div>
    </Paper >
  </form>

  function updNome(e: any) {
    setPerfil({ ...perfil, nome: e.target.value })
  }
  function updCPF(e: any) {
    setPerfil({ ...perfil, cpf: e.target.value })
  }
  function updOAB(e: any) {
    setPerfil({ ...perfil, oab: e.target.value })
  }
  function updUF(e: any) {
    setPerfil({ ...perfil, uf: e.target.value })
  }
  function updCidade(c: any) {
    setPerfil({ ...perfil, cidade: c.target.value })
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
  async function gravar() {
    await gravaPerfil(uid, perfil)
    if (ehTrabalhador) await gravaCaso(uid, cid, caso)
  }
}
