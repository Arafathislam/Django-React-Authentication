import React, { useState } from 'react'
import {Grid,Card,Typography,Tabs,Box,Tab} from '@mui/material';
import shop from '../../images/shop.png'
import Login from './Login';
import Registration from './Registration';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const TabPanel=(props) =>{
  const {children,value,index}=props;
  return (
    <div role ='tabpanel' hidden= {value !== index}>
      {
        value ===index && (
          <Box>{children}</Box>
        )
      }

    </div>
  )
}



const LoginReg = () => {
   const  [value,setValue]=useState(0)
   const handleChange =(event,newValue)=>{
      setValue(newValue);
   }
  return (
    <>
    <Grid container sx={{height:'90vh'}} >
      <Grid item lg={7} sm={5} sx={{
        backgroundImage:`url(${shop})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        display:{xs:'none',sm:'block'}
      }}>
      </Grid>
    
      <Grid item lg={5} sm={7} xs={12} >
      <Card sx={{width:'100%',height:'100%'}}>
      <Box sx={{ mx:3}}>
        <Box sx={{borderBottom: 1 ,borderColor:'divider'}}>
        <Tabs value ={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}  >
          <Tab  label='Login' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
          <Tab label='Registeration' sx={{textTransform:'none',fontWeight:'bold'}} ></Tab>
        </Tabs>

        </Box>
           <TabPanel value={value} index={0}>
             <Login/>
           </TabPanel>
           <TabPanel value={value} index={1}>
            <Registration/>
           </TabPanel>
      </Box>
      <Box textAlign='center' sx={{ mt: 2 }}>
            <ShoppingBagIcon sx={{ color: 'purple', fontSize: 100 }} />
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Geek-Shop</Typography>
        </Box>

      </Card>
      </Grid>



    </Grid>
    </>
  )
}

export default LoginReg