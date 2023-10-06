import { useState,useEffect } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Protectedroute from './components/Protectedroute'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyAccount from './components/MyAccount'
import Themes from './components/Themes'
import Pages from './components/Pages'
import Cart from './components/Cart' 
import Login from './components/Login'
import "../node_modules/react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

function App() {
  useEffect(()=>{
  localStorage.setItem("karbh-login",JSON.stringify({username:"admin@gmail.com",password:"12345678"}))
  })

  

  return (
    <div className=' w-100 ' style={{fontFamily:"arial",minHeight:"100vh"}} >
      <ToastContainer autoClose={1500} position={'top-center'}/>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<Protectedroute Component={About}/>}></Route>
        <Route path='/themes' element={<Protectedroute Component={Themes}/>}></Route>
        <Route path='/pages' element={<Protectedroute Component={Pages}/>}></Route>
        <Route path='/contact' element={<Protectedroute Component={Contact}/>}></Route>
        <Route path='/cart' element={<Protectedroute Component={Cart}/>}></Route>
        <Route path='/myaccount' element={<Protectedroute Component={MyAccount}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/protected' element={<Protectedroute/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>




      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  )
}

export default App
