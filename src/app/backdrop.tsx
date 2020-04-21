import * as React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useOcupado } from '../state/ocupado';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    hidden: {
      visibility: 'hidden'
    }
  }),
);

export function Ocupado() {
  const classes = useStyles()
  const { estado } = useOcupado()
  React.useEffect(() => {
    const e = document.querySelector('div.initLoading')
    if (estado) e.classList.remove(classes.hidden)
    else e.classList.add(classes.hidden)
  }, [estado])
  return estado ? <Backdrop className={classes.backdrop} open={true} /> : <></>
}