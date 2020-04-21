import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useDrawer } from '../state/drawer';
import { Icon } from '@material-ui/core';
import { PageID, registeredPages, usePage, navigate } from '../state/page';
import { TipoAdvogado, TipoTrabalhador } from '../state/perfil';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export function DrawerApp() {
  const classes = useStyles();
  const [page, tipo] = usePage()

  const [drawerVisible, { toggleDrawer, openDrawer, closeDrawer }] = useDrawer()
  if (page === false) return null
  const menuItems: Array<'home' | PageID> = ['home', 'perfil']
  if (tipo & TipoTrabalhador) menuItems.push('advogados')
  if (tipo & TipoAdvogado) menuItems.push('casos')

  return <Drawer
    anchor='left'
    open={drawerVisible}
    onClose={closeDrawer}
    onOpen={openDrawer}
  >
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={toggleDrawer}
    >
      <List>
        {menuItems.map((id: any) => {
          const p = id === 'home' ? { title: 'Início', icon: 'home' } : registeredPages()[id]
          return <ListItem button key={id} onClick={este} selected={id.localeCompare(page.id) === 0}>
            <ListItemIcon>
              <Icon className={"fa fa-" + p.icon} />
            </ListItemIcon>
            <ListItemText primary={p.title} />
          </ListItem>
          function este() {
            navigate(id === 'home' ? false : id)
          }
        })}
      </List>
    </div>
  </Drawer>
}
