import { useState } from "react";
import {Grid,TextField,Button,Box,Alert} from "@mui/material";
const ForgetPassword = () => {
    const [error,setError]= useState({
        status:false,
        msg:"",
        type:""
      });
    
      const handleSubmit=(e)=>{
        e.preventDefault();
    
        const data=new FormData(e.currentTarget);
        const actualData={
            email: data.get('email'),
            
        }
    

    
        if(actualData.email){
            console.log(actualData);
            document.getElementById('forget-form').reset();
            setError({status:true,msg:'Rest Email Send ', type:'success'})

        }else{
            setError({status:true,msg:'Please provide valid Email', type:'error'})
        }
    
      }
  return (
    <>

    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
      <Box component='form' noValidate sx={{mt:1}} id="forget-form" onSubmit={handleSubmit}>
        <TextField required margin='normal' fullWidth id='email' name='email' label='Email Address'/>
        
    <Box textAlign='center'>
        <Button type='submit' sx={{mt:3,mb:2,px:5}} variant='contained'>Send</Button>
    </Box>
 
    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ' ' }

    </Box>
      </Grid>
    </Grid>


    </>
  )
}

export default ForgetPassword