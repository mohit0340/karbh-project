import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify'



const Login = () => {


 const[email,setEmail]=useState("")
const navigate=useNavigate()

const[password,setPassword]=useState("")
const data=JSON.parse(localStorage.getItem("karbh-login"))



const handlelogin=(e)=>{
  e.preventDefault()
  if(email=="" || password==""){
    toast.error("Please Enter Data in All field")

  }
  else{
    if(data.username!==email || data.password!==password){
    toast.error("Please Enter valid email And Password")

    }
    else{
      toast.success("You are Logged-in")
  sessionStorage.setItem("karbh-login",JSON.stringify({username:email,password:password}))
    
      navigate("/myaccount")

    }
  }

}

  return (
    <div className='w-50 border d-flex justify-content-center bg-warning-subtle p-3 mt-4 rounded' style={{marginLeft:"25%"}}>
         <form className='w-75 d-flex flex-column gap-3' onSubmit={(e)=>handlelogin(e)}>
       <h2 className='text-center'>Login</h2>
       <div >

         <label>Username </label><br/>
         <input className='w-100 rounded border-dark border-1 p-1 bg-body-secondary' onChange={(e)=>setEmail(e.target.value)} type="text" />
      
       </div><br/> 
       <div >
         <label>Password </label><br/>
         <input type="password" className='w-100 rounded border-dark border-1 p-1 bg-body-secondary' onChange={(e)=>setPassword(e.target.value)}  />

       </div><br/>
      <button className='btn btn-outline-primary'>Submit</button>
     </form>
    </div>
  )
}

export default Login
