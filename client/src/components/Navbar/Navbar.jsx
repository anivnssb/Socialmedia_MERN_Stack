import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import memories from '../../images/memories.png';
import useStyles from './style';
import {Link, useHistory, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logOut} from '../../actions/auth'
const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch=useDispatch()
  const history=useHistory()
  const location=useLocation()
  const classes = useStyles();
  
  
  const logout=()=>{
  try{  
    dispatch(logOut(history));}
  catch(e){console.log(e)
  }
}

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className='classes.brandContainer'>
      <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img className={classes.image} src={memories} alt="memories" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user? <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.name} src={user?.imageUrl}>{user?.name?.charAt(0)}</Avatar>
          <Typography className={classes.userName} varriant="h6">{user?.name}</Typography>
          <Button variant="contained" className={classes.logout} onClick={logout}>Logout</Button>
        </div> : <Button component={Link} to="/auth" varriant="contained" color="primary" >Sign In</Button>}
         </Toolbar>
    </AppBar>
  );
};

export default Navbar;
