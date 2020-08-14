import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import logo from '../../assets/img/logo.png'
import Avatar from '../Avatar/Avatar';
import MenuList from '../MenuList/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: 35,
  },
  avatar: {
    marginTop: 50
  },
  menuList: {
    marginTop: 41 
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#1c1c1c',
    color: '#ffffff'
  },
}))

function Sidebar() {
  const classes = useStyles();
  return (
    <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={true}
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
  );
}

export default Sidebar;
