import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import logo from '../../assets/img/logo.png'
import Avatar from '../Avatar/Avatar';
import MenuList from '../MenuList/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: 35,
  },
  avatar: {
    marginTop: 50
  },
  menuList: {
    marginTop: 41,
    overflowY: 'scroll',
    height: '100%'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    maxHeight: '100vh'
  },
}))

function Sidebar(props) {
  const classes = useStyles();
  const { menuListData } = props;
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
        <MenuList listData={menuListData} />
      </section>      
    </Drawer>
  );
}

const mapStateToProps = (state) => {
  return {
    menuListData: state.submenu.menuList
  };
}

export default connect(mapStateToProps)(Sidebar);
