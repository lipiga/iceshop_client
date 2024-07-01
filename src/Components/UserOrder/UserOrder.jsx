import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import './UserOrder.css'

const UserOrder = () => {
    const userid = localStorage.getItem("userid")
    const [orderItem,setOrderitem] = useState([])
    const [orderstatus,setOrderstatus] = useState(false)

    const GetUserOrder = async()=>{
        const response = await axios.get("http://localhost:4000/api/order/getuserorder",{headers: {'user_id': userid}})
        if(response.data.success){
            setOrderitem(response.data.data)
            setOrderstatus(true)
        }else{
            console.log("error")
        }
    }
    
    GetUserOrder();
  return (
    <div className='grid'>
    <Navbar/>
         
          <div className='product-card'>
              <p>product</p>
              <p>name</p>
              <p>quantity</p>
              <p>price</p>
          </div>
        {
              orderItem.map((item, index) => {
                  return (
                      <div key={index}>

                          {
                              item.product.map((product, index) => {
                                  return (
                                      <div className='product-card' key={index}>

                                          <img src={"http://localhost:4000/images/" + product.image} />
                                          <p>{product.name}</p>
                                          <p>{product.quantity}</p>
                                          <p>{product.price}</p>
                                      </div>
                                  )
                              })
                          }
                      </div>
                  )
              })
          }
          
    </div>
  )
}

export default UserOrder