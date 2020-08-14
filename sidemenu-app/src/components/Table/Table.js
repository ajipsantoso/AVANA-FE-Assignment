import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Switch,
  Collapse,
  Box,
  IconButton
} from '@material-ui/core';
import {
  KeyboardArrowDown,
  KeyboardArrowUp
} from '@material-ui/icons';
import { connect } from 'react-redux';
import { updateAllow, updateShow } from '../../store/action/actionList';

const useStyles = theme => ({
  table: {
    minWidth: 650,
  },
});

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  table: {
    paddingLeft: '20'
  }
});

function Row(props) {
  const { row, method } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return (
    <React.Fragment>
      { row.childs
        ? <React.Fragment>
            <TableRow
              key={row.id}
              className={classes.root}
            >
              <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">
                  <Switch
                    color="primary"
                    checked={row.isShowed}
                    onChange={(event) => method.onChangeIsShow({id: row.id, value: event.target.checked})}
                    name={`show-${row.id}`}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Switch
                    color="primary"
                    checked={row.isAllowed}
                    onChange={(event) => method.onChangeIsAllow({id: row.id, value: event.target.checked})}
                    name={`show-${row.id}`}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box margin={1}>
                    <Table className={classes.table} aria-label="collapsible table">
                      <TableHead>
                        <TableRow>
                          <TableCell size="small">Child Data</TableCell>
                          <TableCell>Id</TableCell>
                          <TableCell align="center">Show</TableCell>
                          <TableCell align="center">Allow</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.childs.map((child, idx) => (
                          <Row key={idx} row={child} method={method} />
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        : <TableRow
            key={row.id}
          >
            <TableCell></TableCell>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="center">
              <Switch
                color="primary"
                checked={row.isShowed}
                onChange={(event) => method.onChangeIsShow({id: row.id, value: event.target.checked})}
                name={`show-${row.id}`}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </TableCell>
            <TableCell align="center">
              <Switch
                color="primary"
                checked={row.isAllowed}
                onChange={(event) => method.onChangeIsAllow({id: row.id, value: event.target.checked})}
                name={`show-${row.id}`}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </TableCell>
          </TableRow>
      }
    </React.Fragment>
  )
}

class TableComponent extends React.Component {
  constructor() {
    super();
    this.formatTableData = this.formatTableData.bind(this);
  }

  formatTableData(tableData) {
    const {onChangeIsShow, onChangeIsAllow} = this.props
    return (<React.Fragment>
      {
        tableData.map((rowData, idx) => {
          return <Row key={idx} row={rowData} method={{onChangeIsShow, onChangeIsAllow}} />
        })
      }
      </React.Fragment>)
  }
  // handleClick = () => {
  //   this.setState({ open: !this.state.open })
  // };
  // handleListItemClick = (event, index) => {
  //   this.setState({ selectedIndex: index })
  // };
  render() {
    const { classes } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell size="small">Child Data</TableCell>
              <TableCell>Id</TableCell>
              <TableCell align="center">Show</TableCell>
              <TableCell align="center">Allow</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.formatTableData(this.props.listData)}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapDispatchToPatch = (dispatch) => {
  return {
    onChangeIsShow: (payload) => dispatch(updateShow(payload)),
    onChangeIsAllow: (payload) => dispatch(updateAllow(payload)),
  }
}

export default connect(null, mapDispatchToPatch)(withStyles(useStyles)(TableComponent));
