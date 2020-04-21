import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fbauth } from '../firebase';
import { useDrawer } from '../state/drawer';
import { CssBaseline, Avatar } from '@material-ui/core';
import { usePage, navigate } from '../state/page';
import { useOcupado } from '../state/ocupado';
import { useUsuarioLogado } from '../state/auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export function BarraApp() {
  const classes = useStyles();
  const auth = useUsuarioLogado()
  const [, { toggleDrawer }] = useDrawer()
  const [anchorEl, setRmAnchorEl] = React.useState<null | HTMLElement>(null)
  const rmOpen = Boolean(anchorEl)
  const [page] = usePage()
  const { ocupar } = useOcupado()

  if (auth === "pendente" || auth === "nao logado" || page === false) return null

  const handleLogout = () => {
    setRmAnchorEl(null)
    ocupar()
    fbauth.signOut()
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setRmAnchorEl(null)
    ocupar()
    setRmAnchorEl(event.currentTarget);
  }

  const handlePerfil = () => {
    navigate('perfil')
    setRmAnchorEl(null);
  }

  const handleClose = () => {
    setRmAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {page.title}
          </Typography>
          {typeof auth === 'string' ? null : (
            <div>
              <IconButton
                aria-label="Usuário atual"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt={auth.displayName} src={auth.photoURL} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={rmOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handlePerfil}>Perfil</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
