import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#373737',
    maxHeight: '100vh',
    overflowY: 'scroll'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

function Main(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        {props.children}
      </Container>
    </div>
  );
}

export default Main;
