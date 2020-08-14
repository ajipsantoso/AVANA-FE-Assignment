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
  const { row } = props;
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
                    name={`show-${row.id}`}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Switch
                    color="primary"
                    checked={row.isShowed}
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
                      {row.childs.map((child) => (
                        <Row row={child} />
                      ))}
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
                name={`show-${row.id}`}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </TableCell>
            <TableCell align="center">
              <Switch
                color="primary"
                checked={row.isShowed}
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
    this.state = {
      tableData: [
        { "id": "dashboard", "isShowed": true, "isAllowed": true },
        {
          "id": "hq",
          "isShowed": false,
          "isAllowed": false,
          "childs": [
            { "id": "hq_stockist", "isShowed": false, "isAllowed": false },
            { "id": "hq_dropship_affiliate", "isShowed": false, "isAllowed": false }
          ]
        }
      ]
    }
    this.formatTableData = this.formatTableData.bind(this);
  }

  formatTableData(tableData) {
    return (<React.Fragment>
      {
        tableData.map((rowData,) => {
          return <Row row={rowData} />
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
            {this.formatTableData(this.state.tableData)}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(useStyles)(TableComponent);
