import  React, { useEffect } from 'react'
import {Button,CssBaseline,Grid,Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../features/authSlice';
import {useGetLoggedUserQuery} from '../services/userAuthApi';
import { useState } from 'react';
import { setUserInfo,unSetUserInfo } from '../features/userSlice';
const Dashbord = () => {

  const handleLogout =()=>{
    dispatch(unSetUserInfo({name:"",email:""}))
    dispatch(unSetUserToken({access_token:null}))
    removeToken()
    navigate('/login')
    
  }


  const navigate=useNavigate();
  const dispatch=useDispatch()
  const {access_token}=getToken()
  const {data,isSuccess}=useGetLoggedUserQuery(access_token)
  const [userData,setUserData]=useState({
    email: "",
    name: ""
  })




  useEffect(()=>{
    if(data && isSuccess){
      setUserData({
        email:data.email,
        name:data.name,
      })
    }
  },[data,isSuccess])


  useEffect(()=>{
    if(data && isSuccess){
      dispatch(setUserInfo({
        email:data.email,
        name:data.name
      }))
    }
  },[data,isSuccess,dispatch])





  return (
    <>
    <CssBaseline/>
    <Grid container>
    <Grid item sm={4} sx={{backgroundColor:'gray' ,p:5,color:'white'}}>
    
    <h1>Dashboard</h1>
    <Typography variant='h5'>Email:{userData.email}</Typography>
    <Typography variant='h6'>Name:{userData.name}</Typography>
    <Button variant='contained' color='warning' size='large' onClick={handleLogout}>Logout</Button>

    </Grid>

    <Grid item sm={8}>
      <ChangePassword/>
    </Grid>
     
    </Grid>


    </>
  )
}

export default Dashbord