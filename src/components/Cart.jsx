import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeitem } from '../service/Cart-slice'
import { useEffect } from 'react'
import { useState } from 'react'

const Cart = () => {
    const dispatch=useDispatch()
    const cartdata=useSelector(state=>state.cart)
    const [total,setTotal]=useState("")
    let data=[]
    const handleremoveitem=(val)=>{
        dispatch(removeitem(val))
    }
    useEffect(()=>{
        
        cartdata.map((item)=>{
            data=[...data,item.price]
            
        })
        setTotal(eval(data.join("+")))

    },[cartdata])
    
  return (
    <div>
        {
            cartdata.length!=0?(
    <div className='d-flex flex-column gap-4 container'>
        {
            cartdata.map((item,index)=>(
                <div key={index} className='d-flex p-3 justify-content-between bg-primary-subtle rounded-3 align-items-center'>
                    <img src={item.image} style={{width:"100px",height:"100px"}}></img>
                    <p className='fs-4 fw-normal'>{item.name}</p>
                    <p className='fs-5 fw-bold'>${item.price}</p>
                    <button className='btn btn-outline-danger'  onClick={()=>handleremoveitem(index)}>Remove</button>
                  

                </div>
            ))
        }


        <div className=' border-2 border-dark text-end '>
            <p>Cart Total</p>
            
                    <p>Total = <span className='fw-bold'>${total}</span></p>
            
        </div>
      
    </div>):(

        <div className='text-center mt-5'>
            <p className='fs-1 fw-bold'>Please Add item to cart...</p>
        </div>
    )
        }
    </div>
  )
}

export default Cart
