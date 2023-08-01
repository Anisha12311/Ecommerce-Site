import React from 'react'
import '../../Styles/Cart.css'
const OrderSummary = () => {
  return (
    <div style = {{margin : '0px 20px 0px 20px'}}>
      <h2>Order Summary</h2>
      
      <div style = {{justifyContent : 'space-between', alignItems : 'left',display : 'flex', fontSize : '20px', marginBottom : '10px'}}>
        <div>Subtotal </div>
        <div>$80</div>
      </div>
      <div style = {{justifyContent : 'space-between',alignItems : 'left', display : 'flex', fontSize : '20px', marginBottom : '10px'}}>
        <div>Estimated Shipping </div>
        <div>$5.90</div>
      </div>
      <div style = {{justifyContent : 'space-between', display : 'flex', fontSize : '20px', marginBottom : '10px'}}>
        <div>Shipping Discount </div>
        <div>$ -5.90</div>
      </div>
      <div style = {{border : '1px solid #e9e5e5', margin : '20px 0px 0px 0px'}}></div>
      <div style = {{justifyContent : 'space-between', display : 'flex', fontSize : '20px' ,}}>
        <h3>Total </h3>
        <h3>$80</h3>
      </div>
      <button className="button-product" role="button" style = {{marginBottom : '20px',textAlign : 'center'}}>
        Proceed to Checkout
          </button>
    </div>
  )
}

export default OrderSummary
