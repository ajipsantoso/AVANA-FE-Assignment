import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#373737',
    minHeight: '100vh'
  }
}))

function Main(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}

export default Main;
