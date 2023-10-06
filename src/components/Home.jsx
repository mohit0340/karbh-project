import React, { useState } from 'react'
import "../style/home.css"
import Data from "../data.json"
import { useDispatch } from 'react-redux'
import { additem } from '../service/Cart-slice'
import CodeOffRoundedIcon from '@mui/icons-material/CodeOffRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';


const Home = () => {
const [data,setData]= useState(Data[0].data)
const dispatch=useDispatch()



const handleaddtocart=(val)=>{
    return dispatch(additem(val))

}



  return (
    <div className='w-100 p-5'>
        <div>
            <p className='fw-bold' style={{fontSize:"50px"}}>Best Themes and<br></br>Plugins Marketplace</p>
            <p className='fs-4 text-secondary'>Welcome to DigiMarket Multi vendor Marketplace Theme.<br></br> Buy and Sell any kind of Digital Product you Wish.</p>
            <div className='d-flex gap-5 '>
                <button className='fs-5 text-light shadow-lg rounded-5 border-0' style={{backgroundColor:"#FF464D",height:"52px",width:"162px"}}>Shop Now</button>
                <button className='fs-5 shadow-lg rounded-5 border-2 btn-2' style={{color:"#FF464D",borderColor:"#FF464D",height:"52px",width:"162px"}}>Start Selling</button>

            </div>
        </div>


        <div className='d-flex flex-wrap gap-5 align-items-center ' style={{marginTop:"150px"}}>
            <img src='https://themebing.com/wp/tijarah/wp-content/uploads/2020/01/1.png' className=" img" style={{height:"28px",width:"154px"}}></img>
            <img src='https://themebing.com/wp/tijarah/wp-content/uploads/2020/01/2.png' className="img" style={{height:"28px",width:"154px"}}></img>
            <img src='https://themebing.com/wp/tijarah/wp-content/uploads/2020/01/3.png' className="img" style={{height:"28px",width:"154px"}}></img>
            <img src='https://themebing.com/wp/tijarah/wp-content/uploads/2020/01/4.png' className="img" style={{height:"28px",width:"154px"}}></img>
            <img src='https://themebing.com/wp/tijarah/wp-content/uploads/2020/01/5.png' className="img" style={{height:"28px",width:"154px"}}></img>
            <img src='https://themebing.com/wp/tijarah/wp-content/uploads/2020/01/6.png' className="img" style={{height:"28px",width:"154px"}}></img>

        </div>



        <div  style={{marginTop:"150px"}}>
            <div className='d-flex justify-content-between'>
                <div>
                <p className='fs-1 fw-bold'>Featured Items</p>
                <p className='fs-5 text-secondary'> Nemo enim ipsam voluptatem quia voluptas aspernatur</p>
                </div>
                <div>
                    <button className='fs-5 shadow-lg rounded-5 border-2 btn-2' style={{color:"#FF464D",borderColor:"#FF464D",height:"52px",width:"162px"}}>All Items </button>
                </div>
                </div>
        </div>
        <div className='d-flex mt-5 justify-content-between '>{
            data.map((val)=>(
            <div className='shadow-lg rounded-3 ' key={val.id}>
                <img src={val.image} className='rounded-2 rounded-bottom-0 ' style={{width:"350px",height:"250px"}}  />
                <div className='m-2  d-flex flex-column'>
                    <p className='fs-4 fw-bold'>{val.name}</p>
                    <p className='fs-5 fw-medium text-secondary'>{val.discription}</p>
                    <p className='fs-5 fw-bold'>${val.price}</p>
                    <button className='btn btn-outline-danger' onClick={()=>handleaddtocart(val)}>Add to cart</button>
                </div>
            </div>
))}


        </div>

        <div className='container text-center' style={{marginTop:"150px"}}>
        
       <p className='fs-1 fw-bolder'> Why Choose DigiMarket</p>
       <p className=' text-secondary fw-medium'>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on<br></br> the Internet tend to repeat predefined necessary.</p>


        </div>


        <div className='container text-center d-flex bg-light-subtle justify-content-between gap-5 mt-5' >
        <div className='d-flex flex-column align-items-center rounded-2 p-3  gap-3' style={{backgroundColor:" rgba(144, 19, 254, 0.06)"}}>
            <p className=' rounded-5 text-light p-3 fw-bolder' style={{backgroundImage:"linear-gradient(180deg, #E08BFC 0%, #7357FB 180%)"}}><CodeOffRoundedIcon></CodeOffRoundedIcon></p>
            <p className='fs-4 fw-bold'>We are Open Source</p>
            <p>Lorem ipsum dummy text in print and website industry are<br/> usually use in these section</p>
        </div>
        <div className='d-flex flex-column align-items-center rounded-2 p-3 gap-3' style={{backgroundColor:"rgba(43, 98, 201, 0.06)"}}>
            <p className=' rounded-5 text-light p-3 fw-bolder' style={{backgroundImage:"linear-gradient(180deg, #00AEEF 0%, #0F5EC9 180%)"}}><EmojiObjectsRoundedIcon/></p>
            <p className='fs-4 fw-bold'>Problem Solvers</p>
            <p>Lorem ipsum dummy text in print and website industry are<br/> usually use in these section</p>
        </div>
        <div className='d-flex flex-column align-items-center rounded-2 p-3 gap-3' style={{backgroundColor:"rgba(26, 188, 156, 0.06)"}}>
            <p className=' rounded-5 text-light p-3 fw-bolder' style={{ backgroundImage: "linear-gradient(180deg, #00E31D 0%, #00C0CE 180%)" }}><BugReportRoundedIcon/></p>
            <p className='fs-4 fw-bold'>Regular Updates & Bug fixes</p>
            <p>Lorem ipsum dummy text in print and website industry are<br/> usually use in these section</p>
        </div>
       </div>

      
    </div>
  )
}

export default Home
