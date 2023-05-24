import React from 'react'
import {Button,CssBaseline,Grid,Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';

const Dashbord = () => {
  const navigate=useNavigate();

  const handleLogout =()=>{
    console.log("logout");
    navigate('/login')
    
  }



  return (
    <>
    <CssBaseline/>
    <Grid container>
    <Grid item sm={4} sx={{backgroundColor:'gray' ,p:5,color:'white'}}>
    
    <h1>Dashboard</h1>
    <Typography variant='h5'>Email:islamarafath315@gmail.com</Typography>
    <Typography variant='h6'>Name:Arafath</Typography>
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