import React, { useState } from 'react'
import { Checkbox,TextField,Button,Box,Alert, FormControlLabel, Typography } from '@mui/material'
import { NavLink,useNavigate } from 'react-router-dom'

import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorageService'
const Registration = () => {

    const [server_error,setServerEror]=useState({})
    
    const navigate=useNavigate();
    const [registerUser,{isLoading}]=useRegisterUserMutation()

    const handleSubmit= async (e)=>{
        e.preventDefault();
    
        const data=new FormData(e.currentTarget);
        const actualData={
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password2: data.get('password2'),
            tc: data.get('tc'),
        }
        const res= await registerUser(actualData);
        console.log(res.error)
        if(res.error){
            setServerEror(res.error.data.errors)
        }
        if(res.data){
            storeToken(res.data.token)
            navigate('/dashbord')
        }
    }
        
        



  return (
    <>
    <Box component='form' noValidate sx={{mt:1}} id="registration-form" onSubmit={handleSubmit}>
        <TextField required margin='normal' fullWidth id='name' name='name' label='Name'/>
        {server_error.name ? <Typography style={{fontSize:12,color:'red',paddingLeft:10}}>{server_error.name[0]}</Typography> : ""}
        <TextField required margin='normal' fullWidth id='email' name='email' label='Email Address'/>
        {server_error.email ? <Typography style={{fontSize:12,color:'red',paddingLeft:10}}>{server_error.email[0]}</Typography> : ""}
        <TextField required margin='normal' fullWidth id='password' name='password' label='Password'type='password'/>
        {server_error.password ? <Typography style={{fontSize:12,color:'red',paddingLeft:10}}>{server_error.password[0]}</Typography> : ""}
        <TextField required margin='normal' fullWidth id='password2' name='password2' label='Confirm Password'type='password'/>
        {server_error.password2 ? <Typography style={{fontSize:12,color:'red',paddingLeft:10}}>{server_error.password2[0]}</Typography> : ""}
    <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc"/>} label="I agree to term and Condition "/>
    {server_error.name ? <span style={{fontSize:12,color:'red',paddingLeft:10}}>{server_error.name[0]}</span> : ""}
    <Box textAlign='center'>
        <Button type='submit' sx={{mt:3,mb:2,px:5}} variant='contained'>SignUp</Button>
    </Box>
    {server_error.non_field_errors ?<Alert severity='error'>{server_error.non_field_errors[0]}</Alert>:''}
 
    </Box>
   
    

 

    </>
  )
}

export default Registration