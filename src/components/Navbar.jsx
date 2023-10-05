import React from 'react'
import { useSelector } from 'react-redux'
import {Link ,NavLink} from "react-router-dom"
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "../style/home.css"


const Navbar = () => {



    const storedata=useSelector(state=>state.cart)
   
    
  return (
    <div className='d-flex align-items-center justify-content-between position-sticky top-0 bg-opacity-10 ' style={{height:"90px",backgroundColor:"#FFF"}} >


        <div className='ms-5'>
            <img src="./assets/logo.png "  style={{width:"55%"}}></img>
        </div>
        <div className='d-flex align-items-center justify-content-around gap-5 me-5'>
      <NavLink to="/"  className='fs-5  p-1 rounded-2  text-decoration-none link'>Home</NavLink>
      <NavLink to="/about" className='fs-5 p-1 rounded-2 text-decoration-none link'>About</NavLink>
      <NavLink to="/themes" className='fs-5 p-1 rounded-2  text-decoration-none link' >Themes</NavLink>
      <NavLink to="/pages" className='fs-5  p-1 rounded-2 text-decoration-none link'>Pages</NavLink>
      <NavLink to="/contact" className='fs-5 p-1 rounded-2  text-decoration-none link'>Contact</NavLink>
      <NavLink to="/cart" className='fs-5 p-1 rounded-2  text-decoration-none link'><ShoppingCartRoundedIcon/> : {storedata.length} Items </NavLink>
      <NavLink to="/myaccount" className='fs-5 rounded-2 text-decoration-none d-flex align-items-center gap-1 p-1  link'><AccountCircleRoundedIcon/> My Account</NavLink>
      </div>
     

    </div>
  )
}

export default Navbar
