import React from 'react'
import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({half=false,name,handleChange,label,autoFocus=false,type,handleShowPassword,}) => {
  return (
    <Grid item xs={12} sm={half?6:12}>
           <TextField name={name} label="First Name" onChange={handleChange} variant="outlined" required fullWidth label={label} autoFocus={autoFocus} type={type}
           InputProps={['password','confirmPassword'].includes(name)?{endAdornment:(<InputAdornment position='end'>
            <IconButton onClick={handleShowPassword}>
                {type==="password"?<Visibility/>:<VisibilityOff/>}
            </IconButton>
           </InputAdornment>)}:{}}/>
    </Grid>
  )
}

export default Input