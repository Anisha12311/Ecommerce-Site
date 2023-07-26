import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import '../Styles/Register.css'
const Register = () => {

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
    <div>
      <h1 style = {{marginBottom : '6px'}}>Register</h1>
      <span  className = "text" >Already have an account ?  &nbsp; <Link href = "/login">Sign In</Link></span>
      <form onSubmit={handleSubmit}>
  <TextField style = {{marginBottom : '30px'}} type = 'text' name = 'username' onChange={handleOnchange} fullWidth label="Username" id="fullWidth" />
  <TextField style = {{marginBottom : '30px'}} type = 'email' name = 'email'   onChange={handleOnchange} fullWidth label="Email" id="fullWidth" />
  <TextField style = {{marginBottom : '30px'}} type = 'password' name = 'password'  onChange={handleOnchange} minLength = {6} fullWidth label="Password" id="fullWidth" />
  <Button type = 'submit' variant="contained" style = {{width : "100%"}} >Sign Up</Button>
</form>
</div>
  )
}

export default Register