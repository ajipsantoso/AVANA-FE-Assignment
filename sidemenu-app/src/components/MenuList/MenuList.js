import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {List, ListItem, Collapse, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { connect } from "react-redux";
import { chooseMenu } from '../../store/action/actionList';

const useStyles = () => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: ''
  }
});

const useListStyles = makeStyles({
  nested: {
    paddingLeft: 17,
  },
  listItem: {
    marginBottom: 10,
    "&$selected": {
      background: 'linear-gradient(270deg, #383838 0%, #272626 100%)',
      borderRight: '#F7B500 solid 3px',
      '&:hover': {
        background: 'linear-gradient(270deg, #383838 0%, #272626 100%)'
      }
    }
  },
  selected: {}
});

function ListRow(props) {
  const { listData, menuSelect } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useListStyles();
  const multiList = (listData) => {
    setOpen(!open)
    menuSelect.onSelectMenu(listData)
  }
  return (
    <React.Fragment>
      { listData.childs && listData.isShowed
        ? <React.Fragment>
            <ListItem 
              classes={{ root: classes.listItem, selected: classes.selected}}
              selected={menuSelect.selectedMenu.id === listData.id}
              button
              onClick={() => multiList(listData)}
            >
              <ListItemText primary={listData.id} />
              {!open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className={classes.nested}>
                {listData.childs.map((child, idx) => (
                  <ListRow key={idx} listData={child} menuSelect={menuSelect} />
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        : listData.isShowed
          ? <ListItem
              classes={{ root: classes.listItem, selected: classes.selected}}
              button
              selected={menuSelect.selectedMenu.id === listData.id}
              onClick={() => menuSelect.onSelectMenu(listData)}
            >
              <ListItemText primary={listData.id} />
            </ListItem>
          : null
      }
    </React.Fragment>
  )
};

class MenuList extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      selectedIndex: 0,
    }
    this.formatListData = this.formatListData.bind(this);
  };

  formatListData(listData) {
    const {onSelectMenu, selectedMenu} = this.props
    return (<React.Fragment>
      {
        listData.map((list, idx) => {
          return <ListRow key={idx} listData={list} menuSelect={{onSelectMenu, selectedMenu}} />
        })
      }
      </React.Fragment>)
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="MenuList">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {this.formatListData(this.props.listData)}
        </List>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    selectedMenu: state.submenu.selectedMenu
  };
};

const mapDispatchToPatch = (dispatch) => {
  return {
    onSelectMenu: (payload) => dispatch(chooseMenu(payload))
  }
};


export default connect(mapStateToProps, mapDispatchToPatch)(withStyles(useStyles)(MenuList));
