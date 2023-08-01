import React from 'react'
import Rating from "@mui/material/Rating";
import QuantityProduct from "../../Components/Product/QuantityProduct";

const ShoppingCart = () => {
  return (
    <div>
   
      <div style = {{border : '1px solid #e9e5e5', marginTop : '20px'}}></div>
      <div style = {{display : 'flex'}}>
        
        <img width = {170} height = {170}src = 'https://www.pcprofessionals.co.uk/wp-content/uploads/2016/05/Collection.png'/>
       
        <div style = {{marginLeft : "30px", padding : 0,textAlign : 'left',lineHeight : '2rem'}}>
        <h2>Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie</h2>
        <div style = {{display : 'flex'}}>
        <Rating
           name="size-small" 
           size="small" 
          style = {{marginRight : '10px'}}
            defaultValue={5}
            precision={0.5}
            readOnly
          />          
          <p style = {{margin : 0, color : 'purple',}}>In stock</p>
          </div>
          <h2 style = {{justifyContent : 'left',margin : 0}}>$123</h2>

          <QuantityProduct/>
      
      </div>
       
        </div>
        
    </div>
  )
}

export default ShoppingCart
