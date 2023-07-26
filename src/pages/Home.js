import React from 'react'
import dashboard from '../Assert/dashbord.png'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../Styles/Home.css'
import CataoryCard from '../Components/CataoryCard';
import Grid from '@mui/material/Grid';
import Register from './Register';

const Home = () => {

  const catories = [
    'books','laptop','phone','test'
  ]


  return (
    <div>

    <div style = {{display : 'flex',justifyContent : 'space-between'}}>
      <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
      <img width = {750} height = {600}src = {dashboard}/>
      </Box>
      <div>
        <Box  sx={{
          pt : 2,
          pl : 6,
          pr : 6,
          textAlign : "center",
        width: 400,
        height: 500,
        backgroundColor: 'white',mr : 15,mt :5,boxShadow:'5px 5px 15px 5px rgba(0,0,0,0.3)',}}>
           <Register/>
        </Box>
      </div>
    </div>
          <div className = "heading">
          <h2>Communications is at the heart of e-commerce and communitys</h2>
          <span>My vision is to build an e-commerce ecosystem that allows consumers and businesses to do all aspects of business online</span>
          </div>

          <div className = 'container'>
          <Grid container >
      {catories.map((category) => (
        <Grid item xs={4} key={category.id} style = {{marginBottom:'45px'}} >
          <CataoryCard data={category} />
        </Grid>
      ))}
      
    </Grid>
        </div>

    </div>
  )
}

export default Home
