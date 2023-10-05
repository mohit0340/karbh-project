import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"



const Protectedroute = (props) => {
    const{Component}= props
    const navigate=useNavigate()
    const[data,setData]=useState(JSON.parse(sessionStorage.getItem("karbh-login")))


    useEffect(()=>{
        if(!data){
            return  navigate("/login")
        }

    },[])
  return (
    <div>
      <Component></Component>
    </div>
  )
}

export default Protectedroute
