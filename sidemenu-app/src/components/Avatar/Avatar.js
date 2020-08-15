import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import profileAsset from '../../assets/img/profile.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center'
    },
    avatarSize: {
      width: 71.75,
      height: 71.75,
    },
    diplayName: {
      marginTop: 20,
      fontSize: 18
    }
}));

function AvatarComponent() {
  const classes = useStyles();
  const name = 'Aji Priambodo Santoso'
  return (
    <div className={classes.root}>
      <Avatar alt="avana" src={profileAsset} className={classes.avatarSize} />
      <span className={classes.diplayName}>{name}</span>
    </div>
  );
}

export default AvatarComponent;
