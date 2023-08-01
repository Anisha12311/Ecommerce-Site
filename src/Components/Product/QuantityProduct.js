import React from 'react'
import IconButton from '@mui/joy/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantityProduct = () => {
  return (
    <div>
      <p style = {{ color : 'gray', marginBottom : 0}}>Quantity</p>
      <div style = {{display : 'flex' , marginBottom : '10px'}}>
      <IconButton variant="outlined">
      <RemoveIcon />
       
      </IconButton>
      <IconButton variant="outlined">
        3
      </IconButton>
      <IconButton variant="outlined">
      <AddIcon />
      </IconButton>
      </div>
     
         
      
    </div>
  )
}

export default QuantityProduct
