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
    'Books','Laptop','Phone','Watch'
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
        backgroundColor: 'white',mr : 15,mt :5,boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',}}>
           <Register/>
        </Box>
      </div>
    </div>
          <div className = "heading">
          <h2>Communications is at the heart of e-commerce and communitys</h2>
          <span>My vision is to build an e-commerce ecosystem that allows consumers and businesses to do all aspects of business online</span>
          </div>

          <div className = 'container' >
          <Grid container spacing={{ xs: 3, md: 12 }} columns={{ xs: 1, sm: 2, md: 3 }} style = {{justifyContent:'center',alignItems:'center'}}>
      {catories.map((category,id) => (
        <Grid item key={category.id} >
          <CataoryCard category={category} id = {id} />
        </Grid>
      ))}
      
    </Grid>
        </div>

    </div>
  )
}

export default Home
