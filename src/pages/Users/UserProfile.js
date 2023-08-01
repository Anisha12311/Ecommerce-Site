
import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import '../../Styles/Register.css'
import Box from '@mui/material/Box';

const UserProfile = () => {

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
    
  
    backgroundColor: 'white',mr : 15,mt :10,mb : 12 ,boxShadow:'5px 5px 15px 5px rgba(0,0,0,0.3)',}}>
    <div>
      <h1 style = {{marginBottom : '6px'}}>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div style = {{display : 'flex'}}>
      <TextField style = {{ margin : '20px 20px 0px 0px'}} type = 'name' name = 'name'   onChange={handleOnchange} fullWidth label="Name" id="fullWidth" />
  <TextField style = {{ margin : '20px 20px 0px 0px'}} type = 'email' name = 'email'   onChange={handleOnchange} fullWidth label="Email" id="fullWidth" />
  </div>
  <div style = {{display : 'flex'}}>
  <TextField style = {{ margin : '20px 20px 0px 0px'}} type = 'password' name = 'password'  onChange={handleOnchange} minLength = {6} fullWidth label="Password" id="fullWidth" />
  <TextField style = {{margin : '20px 20px 0px 0px'}} type = 'phone' name = 'phone'   onChange={handleOnchange} fullWidth label="Phone Number" id="fullWidth" />
</div>
<div style = {{display : 'flex'}}>
  <TextField style = {{ margin : '20px 20px 0px 0px'}} type = 'text' name = 'address'   onChange={handleOnchange} fullWidth label="Address" id="fullWidth" />
  <TextField style = {{ margin : '20px 20px 0px 0px'}} type = 'text' name = 'state'   onChange={handleOnchange} fullWidth label="State" id="fullWidth" />
  </div>
  <div style = {{display : 'flex'}}>
  <TextField style = {{ margin : '20px 20px 0px 0px'}} type = 'text' name = 'zip'   onChange={handleOnchange} fullWidth label="Zip Code" id="fullWidth" />
  <TextField style = {{ margin : '20px 20px 0px 0px'}} type = 'text' name = 'city'   onChange={handleOnchange} fullWidth label="City" id="fullWidth" />
  </div>
  <TextField style = {{ margin : '20px 20px 0px 0px'}} type = 'text' name = 'country'   onChange={handleOnchange} fullWidth label="Country" id="fullWidth" />

  <Button type = 'submit' variant="contained" style = {{width : "100%", marginTop : "20px" ,marginBottom : '40px'}} >Update</Button>
</form>
</div>
</Box>
    
</div>
  )
}

export default UserProfile
