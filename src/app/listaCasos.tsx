import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import { usePerfilDoUsarioLogado } from '../state/perfil';
import { useListaCasos } from '../state/caso';
import { Paper, FormControl, InputLabel, NativeSelect, CardActions, Button } from '@material-ui/core';
import { useEstados, useCidades, brasil } from '../state/brasil';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(2),
    },
    card: {
      maxWidth: '98%',
      margin: theme.spacing(2),
    },
    caso: {
      minHeight: 190,
    },
  }),
);

type CasoProps = {
  loading: true
} | {
  loading?: false
  titulo: string
  subtitulo: string
  caso: string
}

function CasoView(props: CasoProps) {
  const classes = useStyles();
  const { loading, titulo, subtitulo, caso } = props.loading ? {
    loading: true,
    titulo: '',
    subtitulo: '',
    caso: '',
  } : { loading: false, ...props }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
          ) : titulo
        }
        subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : subtitulo}
      />
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
            <>
              <Typography variant="caption" color="textSecondary" component="p">
                Relato do trabalhador
            </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {caso}
              </Typography>
            </>
          )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => alert('função ainda não implementada')}>Fazer uma proposta</Button>
      </CardActions>
    </Card>
  );
}

export function ListaCasos() {
  const [casos, uf, cidade, setUF, setCidade] = useListaCasos()
  const estados = useEstados()
  const cidades = useCidades(uf === '-' ? 'AM' : uf)
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <FormControl>
        <InputLabel id="estado-label" shrink={true}>Estado</InputLabel>
        <NativeSelect
          id="estado"
          value={uf}
          onChange={(e) => setUF(e.target.value as any)}
          rows={9}
        >
          <option value='-'>Todo o Brasil</option >
          {
            estados.map((e) => {
              return <option key={e.sigla} value={e.sigla}>{e.sigla + '-' + e.nome}</option >
            })
          }
        </NativeSelect >
      </FormControl>

      {uf === '-' ? null :
        <FormControl >
          <InputLabel id="cidade-label" shrink={true}>Cidade</InputLabel>
          <NativeSelect
            id="cidade"
            value={cidade}
            onChange={(e: any) => setCidade(e.target.value)}
            rows={9}
          >
            <option value='-'>{'Todas as cidades de ' + brasil[uf].nome}</option >
            {
              cidades.map((c) => {
                return <option key={c.nome} value={c.nome}>{c.nome}</option >
              })
            }
          </NativeSelect >
        </FormControl>
      }
      {casos === 'erro' ? <div>Erro ao pesquisar</div> :
        casos ? casos.map((c) => {
          return <CasoView
            key={c.id}
            titulo={new Date(c.data).toLocaleDateString()}
            subtitulo={''} caso={c.descricao} />
        })
          : <>
            <CasoView loading />
            <CasoView loading />
            <CasoView loading />
          </>
      }
    </Paper >
  );
}
