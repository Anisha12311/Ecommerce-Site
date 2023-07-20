import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'
import UserProfile from './pages/Users/UserProfile'
import UserOrderDetails from './pages/Users/UserOrderDetails'
import UserCartDetails from './pages/Users/UserCartDetails'
import UserOrders from './pages/Users/UserOrders'
import ProtectedRoute from './Components/ProtectedRoute'


const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path = "/" exact element = {<Home/>}/>
          <Route path = "/login"  element = {<Login/>}/>
          <Route path = "/signin"  element = {<Register/>}/>      
          <Route path = "/productlist"  element = {<ProductList/>}/>
          <Route path = "/productdetails"  element = {<Productdetails/>}/>
          <Route path = "/cart"  element = {<Cart/>}/>
          
          <Route element = {<ProtectedRoute/>}>
          <Route path = "/user"  element = {<UserProfile/>}/>
          <Route path = "/user/my-orders"  element = {<UserOrderDetails/>}/>
          <Route path = "/user/cart"  element = {<UserCartDetails/>}/>
          <Route path = "/user/order-details"  element = {<UserOrders/>}/>
          </Route>
          
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
