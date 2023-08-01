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
import AdminUsers from './pages/Admin/AdminUsers'
import AdminEditProduct from './pages/Admin/AdminEditProduct'
import AdminEditUser from './pages/Admin/AdminEditUser'
import AdminProduct from './pages/Admin/AdminProduct'
import AdminCreateProduct from './pages/Admin/AdminCreateProduct'
import AdminOrder from './pages/Admin/AdminOrder'
import AdminOrderDetails from './pages/Admin/AdminOrderDetails'
import AdminChat from './pages/Admin/AdminChat'
import AdminAnalytics from './pages/Admin/AdminAnalytics'
import Header from './Components/Header'
import Footer from './Components/Footer'
import RoutewithUserChat from './Components/User/RoutewithUserChat'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
         <Routes>

          <Route element = {<RoutewithUserChat/>}>

          <Route path = "/" exact element = {<Home/>}/>
          <Route path = "/login"  element = {<Login/>}/>
          <Route path = "/signin"  element = {<Register/>}/>      
          <Route path = "/productlist"  element = {<ProductList/>}/>
          <Route path = "/productdetails"  element = {<Productdetails/>}/>
          <Route path = "/cart"  element = {<Cart/>}/>
          </Route>
          
          <Route element = {<ProtectedRoute admin = {false}/>}>
          <Route path = "/user"  element = {<UserProfile/>}/>
          <Route path = "/user/my-orders"  element = {<UserOrders/>}/>
          <Route path = "/user/cart"  element = {<UserCartDetails/>}/>
          <Route path = "/user/order-details"  element = {<UserOrderDetails/>}/>
          </Route>
          
          <Route element = {<ProtectedRoute admin = {true}/>}>
          <Route path = "/admin/users"  element = {<AdminUsers/>}/>
          <Route path = "/admin/edit-user"  element = {<AdminEditUser/>}/>
          <Route path = "/admin/product"  element = {<AdminProduct/>}/>
          <Route path = "/admin/create-new-product"  element = {<AdminCreateProduct/>}/>
          <Route path = "/admin/product"  element = {<AdminProduct/>}/>
          <Route path = "/admin/edit-product"  element = {<AdminEditProduct/>}/>
          <Route path = "/admin/order"  element = {<AdminOrder/>}/>
          <Route path = "/admin/order-details"  element = {<AdminOrderDetails/>}/>
          <Route path = "/admin/chat"  element = {<AdminChat/>}/>
          <Route path = "/admin/analytics"  element = {<AdminAnalytics/>}/>
          </Route>

        

         </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
