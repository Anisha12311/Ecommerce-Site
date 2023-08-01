import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import '../Styles/Cart.css'
import QuantityProduct from "../Components/Product/QuantityProduct";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  padding: "20px 20px 20px 20px",
  color: theme.palette.text.secondary,
}));
const catories = [
  'Books','Laptop','Phone','Watch','HeadPhone','Table'
]
const Productdetails = () => {
  return (
    <div style = {{justifyContent : 'center',display : 'flex',marginTop : "60px"}}>
    
      <Box width={1000} height={ 470} sx={{display : 'flex', textAlign : "center",marginBottom : '60px',padding: "10px 20px 20px", overflow: "hidden", boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>       
        <div>
          <Box  width = {400} height= {350} sx={{  flexGrow: 1, margin: "80px 20px 20px", overflow: "hidden" ,boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'}}>
     
              <img width = {400} height = {350}src = "https://www.pcprofessionals.co.uk/wp-content/uploads/2016/05/Collection.png" />
          </Box>
        </div>
   
   
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
          <p style = { { margin : 0,lineHeight : '1.5rem', color : 'gray'}}>Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie</p>

          <div style = {{border : '1px solid #e9e5e5', marginTop : '20px'}}></div>
          <QuantityProduct/>
          <button className="button-product" role="button">
           Add to cart
          </button>
      </div>
      
    </Box>
    </div>
  );
};

export default Productdetails;
