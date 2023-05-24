import React, { useState } from 'react'
import {TextField,Button,Box,Alert } from '@mui/material'
import { NavLink,useNavigate } from 'react-router-dom'


const Login = () => {

  const [error,setError]= useState({
    status:false,
    msg:"",
    type:""
  });

const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    const data=new FormData(e.currentTarget);
    const actualData={
        email: data.get('email'),
        pasasword: data.get('password'),
    }

    // console.log(actualData);

    if(actualData.email && actualData.pasasword){
        console.log(actualData);
        document.getElementById('login-form').reset();
        setError({status:true,msg:'Login Succes', type:'success'})
        navigate('/dashbord');
    }else{
        setError({status:true,msg:'All Fields are Required', type:'error'})
    }

  }

  return (
    <>

      <Box component='form' noValidate sx={{mt:1}} id="login-form" onSubmit={handleSubmit}>
        <TextField required margin='normal' fullWidth id='email' name='email' label='Email Address'/>
        <TextField required margin='normal' fullWidth id='pasword' name='password' label='Password'type='password'/>
    
    
    <Box textAlign='center'>
        <Button type='submit' sx={{mt:3,mb:2,px:5}} variant='contained'>Login</Button>
    </Box>
 
    <NavLink to='/forget'>Forgot Password ?</NavLink>
    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ' ' }
    

    </Box>

    </>
  )
}

export default Login