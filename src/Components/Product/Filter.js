import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Filter = () => {
  return (
    <div>
        <h3>Filter</h3>
       <Box width={300} sx  = {{display : 'flex',overflow: 'hidden'}}>
     
      <Slider  defaultValue={50}   style = {{marginLeft : '20px'}} min={5}  max={30000}aria-label="Default" valueLabelDisplay="auto" />
    </Box>
    </div>
  )
}

export default Filter
