import React, { useState } from 'react'
import { Checkbox,TextField,Button,Box,Alert, FormControlLabel } from '@mui/material'
import { NavLink,useNavigate } from 'react-router-dom'


const Registration = () => {

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
            name: data.get('name'),
            email: data.get('email'),
            pasasword: data.get('password'),
            pasasword2: data.get('password2'),
            tc: data.get('tc'),
        }
    
        // console.log(actualData);
    
        if(actualData.name && actualData.email && actualData.pasasword && actualData.pasasword2 && actualData.tc !=null){
            
            if(actualData.pasasword === actualData.pasasword2){
                console.log(actualData);
                document.getElementById('registration-form').reset();
                setError({status:true,msg:'Registration Succes', type:'success'})
                navigate('/dashbord');
            }else{
                setError({status:true,msg:'Password and Confirm Password doesnot match', type:'error'})              
            }
            

        }else{
            setError({status:true,msg:'All Fields are Required', type:'error'})
        }
    
      }


  return (
    <>
    <Box component='form' noValidate sx={{mt:1}} id="registration-form" onSubmit={handleSubmit}>
        <TextField required margin='normal' fullWidth id='name' name='name' label='Name'/>
        <TextField required margin='normal' fullWidth id='email' name='email' label='Email Address'/>
        <TextField required margin='normal' fullWidth id='password' name='password' label='Password'type='password'/>
        <TextField required margin='normal' fullWidth id='password2' name='password2' label='Confirm Password'type='password'/>
    <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc"/>} label="I agree to term and Condition "/>
    <Box textAlign='center'>
        <Button type='submit' sx={{mt:3,mb:2,px:5}} variant='contained'>SignUp</Button>
    </Box>
 

    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ' ' }
    

    </Box>
    </>
  )
}

export default Registration