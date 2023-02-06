import React from 'react'
import { Avatar,Paper,Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input';
const Auth = () => {
const classes=useStyles();
const isSignUp=false
const handleSubmit=()=>{}
const handleChange=()=>{}
  return (
   <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
        </Avatar>
        <Typography variant='h5' >{isSignUp?"Sign Up":"Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {
                    isSignUp&&(
                       <>
                        <Input name="firstName"handleChange={handleChange} label="First Name" autoFocus half xs={6}/>
                        <Input name="firstName"handleChange={handleChange} label="First Name"  half xs={6}/>
                        </> 
                    )
                }
                  <Input name="email"handleChange={handleChange} label="email Address"  type="email" xs={6}/>
                  <Input name="password"handleChange={handleChange} label="Password"  type="password" xs={6}/>
            </Grid>
        </form>
    </Paper>
   </Container>
  )
}

export default Auth