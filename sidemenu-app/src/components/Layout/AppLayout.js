import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  AppLayout: {
    display: 'flex',
  },
}))

function AppLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.AppLayout}>
      <Sidebar />
      <Main>
        {props.children}
      </Main>
    </div>
  );
}


export default AppLayout;
