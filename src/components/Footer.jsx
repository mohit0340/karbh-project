import React from 'react'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../style/home.css"

const Footer = () => {
  return (
    <div className='mt-4'>



      <div className='container mt-5 mb-5 d-flex gap-lg-5 justify-content-between'>
        <div className='d-flex flex-column gap-4 me-4'>
<img src='./assets/logo.png' style={{width:"55%"}}></img>    
<p style={{maxWidth:"280px"}} className=' lh-lg fw-medium text-secondary'>Popularised in the with the release of etras sheets containing passages and more rcently with desop publishing software like Maker including.</p>
<div className='d-flex gap-1'>
  <li className='list-unstyled p-2 rounded-5 social-link' style={{background:" linear-gradient(to right, #305fb3, #5c97ff)"}}><FacebookSharpIcon/></li>
  <li className='list-unstyled p-2 rounded-5 social-link' style={{background:" linear-gradient(to right, #5eaade, #86ceff)"}}><TwitterIcon/></li>
  <li className='list-unstyled p-2 rounded-5 social-link' style={{background:" linear-gradient(to right, #e1003a, #f74271)"}}><PinterestIcon/></li>
  <li className='list-unstyled p-2 rounded-5 social-link' style={{background:" linear-gradient(to right, #3d5a70, #3090d8)"}}><LinkedInIcon/></li>

  </div>      
        </div>
        <div className='d-flex flex-column me-4'> 
          <p className='fs-5 fw-bold'>Products</p>
          <div className='d-flex flex-column gap-2'>
            <li className='link list-unstyled'>My account</li>
            <li className='link list-unstyled'>About Us</li>
            <li className='link list-unstyled'>Checkout</li>
            <li className='link list-unstyled'>Contact Us</li>
            <li className='link list-unstyled'>Plugins</li>

          </div>
        </div>
        <div className='d-flex flex-column me-4'> 
          <p className='fs-5 fw-bold'>Resources</p>
          <div className='d-flex flex-column gap-2'>
            <li className='link list-unstyled'>My account</li>
            <li className='link list-unstyled'>About Us</li>
            <li className='link list-unstyled'>Checkout</li>
            <li className='link list-unstyled'>Contact Us</li>
            <li className='link list-unstyled'>Plugins</li>

          </div>
        </div>
        <div className='d-flex flex-column me-4'> 
          <p className='fs-5 fw-bold'>Help and FAQs</p>
          <div className='d-flex flex-column gap-2'>
            <li className='link list-unstyled'>My account</li>
            <li className='link list-unstyled'>About Us</li>
            <li className='link list-unstyled'>Checkout</li>
            <li className='link list-unstyled'>Contact Us</li>
            <li className='link list-unstyled'>Plugins</li>

          </div>
        </div>
        <div className='d-flex flex-column me-4'> 
          <p className='fs-5 fw-bold'>Company</p>
          <div className='d-flex flex-column gap-2'>
            <li className='link list-unstyled'>My account</li>
            <li className='link list-unstyled'>About Us</li>
            <li className='link list-unstyled'>Checkout</li>
            <li className='link list-unstyled'>Contact Us</li>
            <li className='link list-unstyled'>Plugins</li>

          </div>
        </div>
      </div>
      <div className='w-100 bg-black text-secondary d-flex justify-content-center align-items-center' style={{height:"70px"}} >
        <p className='fs-5 fw-bold mt-4'>Copyright © 2023 Tijarah All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
