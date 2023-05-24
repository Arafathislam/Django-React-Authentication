import { useState } from 'react' 
import {Grid,TextField,Button,Box,Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const ResetPassword = () => {
  const navigate=useNavigate();

  const [error,setError]= useState({
    status:false,
    msg:"",
    type:""
  });

  const handleSubmit=(e)=>{
    e.preventDefault();

    const data=new FormData(e.currentTarget);
    const actualData={
        password: data.get('password'),
        password2: data.get('password2'),
        
    }



    if(actualData.password && actualData.password2){

      if(actualData.password === actualData.password2){
        console.log(actualData);
        document.getElementById('reset-form').reset();
        setError({status:true,msg:'Password Reset Successfully ', type:'success'})
        setTimeout(()=>{
          navigate("/login")
        },3000)
      }else{
        setError({status:true,msg:'Password and Confirm Password doesnot match', type:'error'})              
      }


    }else{
        setError({status:true,msg:'All fields ar required', type:'error'})
    }

  }
return (
<>

<Grid container justifyContent='center'>
  <Grid item sm={6} xs={12}>
    <h1>Reset Password</h1>
  <Box component='form' noValidate sx={{mt:1}} id="reset-form" onSubmit={handleSubmit}>
  <TextField required margin='normal' fullWidth id='password' name='password' label='New Password'type='password'/>
  <TextField required margin='normal' fullWidth id='password2' name='password2' label='New Confirm Password'type='password'/>
    
<Box textAlign='center'>
    <Button type='submit' sx={{mt:3,mb:2,px:5}} variant='contained'>Save</Button>
</Box>

{error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ' ' }

</Box>
  </Grid>
</Grid>


</>
  )
}

export default ResetPassword