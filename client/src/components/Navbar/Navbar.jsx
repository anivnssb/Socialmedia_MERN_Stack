import { AppBar, Typography } from '@material-ui/core';
import React from 'react';
import memories from '../../images/memories.png';
import useStyles from './style';
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img
        className={classes.image}
        src={memories}
        alt="memories"
        height="60"
      />
    </AppBar>
  );
};

export default Navbar;
