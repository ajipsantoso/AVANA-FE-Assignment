import React from 'react';
import Table from '../../components/Table/Table';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  barStatus: {
    marginBottom: 51
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  allow: {
    color: 'green'
  },
  notallow: {
    color: 'red'
  }
}));

function MainPage(props) {
  const { tableListData, selectedMenu } = props;
  const classes = useStyles();
  return (
    <div className="MainPage">
      <Grid container justify="center" className={classes.barStatus} spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3>Selected Menu : { selectedMenu.id ? selectedMenu.id : 'None' }</h3>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3>{
              typeof selectedMenu.isAllowed === 'boolean' 
                ? selectedMenu.isAllowed === true
                  ? <span className={classes.allow}>Allowed To Enter Menu</span>
                  : <span className={classes.notallow}>Not Allowed To the Menu</span>
                : 'None Selected'
              }
            </h3>
          </Paper>
        </Grid>
      </Grid>
      <Table listData={tableListData} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedMenu: state.submenu.selectedMenu,
    tableListData: state.submenu.menuList
  };
}

export default connect(mapStateToProps)(MainPage);
