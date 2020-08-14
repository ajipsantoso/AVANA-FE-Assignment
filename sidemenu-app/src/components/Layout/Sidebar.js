import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import logo from '../../assets/img/logo.png'
import Avatar from '../Avatar/Avatar';
import MenuList from '../MenuList/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1c1c1c',
    color: '#ffffff'
  },
  logo: {
    marginTop: 35,
  },
  avatar: {
    marginTop: 50
  },
  menuList: {
    marginTop: 41 
  }
}))

function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
              paper: classes.drawerPaper,
          }}
          anchor="left"
      >
        <section className={classes.logo}>
          <img alt="logo" src={logo} width="147" height="31" />
        </section>
        <section className={classes.avatar}>
          <Avatar />
        </section>
        <section className={classes.menuList}>
          <MenuList />
        </section>      
      </Drawer>
    </div>
  );
}

export default Sidebar;
