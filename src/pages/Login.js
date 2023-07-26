import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import '../Styles/Register.css'
import Box from '@mui/material/Box';

const Login = () => {

  const [data, setData] = useState({
    username : '',
    email : '',
    password : ''
  })

  const [values, setValues] = useState([])

  const handleOnchange = (e) => {
  console.log(e.target.value)
  setData({...data, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     setValues([{...data}])
  }
  console.log(values)
  return (
    <div style = {{justifyContent : 'center', display : 'flex'}}>
    <Box  sx={{
      pt : 2,
      pl : 6,
      pr : 6,
      textAlign : "center",
    width: 400,
    height: 400,
    backgroundColor: 'white',mr : 15,mt :10,mb : 12 ,boxShadow:'5px 5px 15px 5px rgba(0,0,0,0.3)',}}>
    <div>
      <h1 style = {{marginBottom : '6px'}}>Login</h1>
      <span  className = "text" >Don't you have an account ?  &nbsp; <Link href = "/" style = {{cursor:'pointer'}}>Sign Up</Link></span>
      <form onSubmit={handleSubmit}>
  <TextField style = {{marginBottom : '30px'}} type = 'email' name = 'email'   onChange={handleOnchange} fullWidth label="Email" id="fullWidth" />
  <TextField style = {{marginBottom : '30px'}} type = 'password' name = 'password'  onChange={handleOnchange} minLength = {6} fullWidth label="Password" id="fullWidth" />
  <Button type = 'submit' variant="contained" style = {{width : "100%"}} >Sign In</Button>
</form>
</div>
</Box>
    
</div>
  )
}

export default Login