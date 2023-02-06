import React, { useState } from 'react'
import { Avatar,Paper,Grid, Typography, Container, TextField, Button,  } from '@material-ui/core';
import {GoogleLogin} from 'react-google-login'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input';
import Icon from './icon'
const Auth = () => {
const [showPassword,setShowPassword]=useState(false)
const [isSignUp,setIsSignUp]=useState(false)
const classes=useStyles();
const handleSubmit=()=>{}
const handleChange=()=>{}
const switchMode=()=>{setIsSignUp((prevState)=>!prevState)}
const googleSuccess=async (res)=>{console.log(res)}
const googleFailure=(error)=>{ console.log('Google google sigin in was unsuccessfull. Try again later')
console.log(error)}
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
                  <Input name="password"handleChange={handleChange} handleShowPassword={setShowPassword} label="Password"  type="password" xs={6}/>
                  {isSignUp&& <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange}/>}
            </Grid>
            
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp?"Sign Up":"Sign In"}</Button>
            <GoogleLogin clientId='995288083228-b1j8g7qhsaujv4dpm7sftts3f5pvqo4e.apps.googleusercontent.com' render={(renderProps)=>(
                <Button className={classes.googleButton} color="primary"
                 fullWidth onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                   startIcon={<Icon/>} variant="contained">
Google Sign In
                   </Button>
            )}
            onSuccess={googleSuccess}
            onFailure ={googleFailure}
            cookiePolicy="single_host_origin"/>
            <Grid container justifyContent='flex-end'>
                <Grid item>
                    <Button onClick={switchMode}>{isSignUp?'Already have an account? Sign In' :"Dont have an account? Sign Up"}</Button>
                </Grid>
            </Grid>
        </form>
    </Paper>
   </Container>
  )
}

export default Auth