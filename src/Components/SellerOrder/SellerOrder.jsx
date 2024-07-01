import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import SellerHeader from '../Seller/SellerHeader'
import './SellerOrder.css'

const SellerOrder = () => {

    const sellerid = localStorage.getItem("sellerid")
    const [orderItem, setOrderitem] = useState([])

    const GetUserOrder = async () => {
        const response = await axios.get("http://localhost:4000/api/order/getsellerorder", { headers: { 'seller_id': sellerid } })
        if (response.data.success) {
            setOrderitem(response.data.data)
        } else {
            console.log("error")
        }
    }
    orderItem.map((item)=>{
        item.product.map((product)=>{
            if(product.seller_id===sellerid){
                console.log(product)
            }
        })
    })

    GetUserOrder();
  return (
    <div className='grid'>
    <SellerHeader/>
              <div className='seller-card'>
              <p>Product</p>
              <p>Name</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Address</p>
          </div>
          {
              orderItem.map((item, index) => {
                  return (
                      <div key={index}>

                          {
                              item.product.map((product, index) => {

                                  return (

                                      <div  key={index}>
                                          {product.seller_id == sellerid ? 
                                          <div className='seller-card'>
                                                  <img src={"http://localhost:4000/images/" + product.image} />
                                                  <p>{product.name}</p>
                                                  <p>{product.quantity}</p>
                                                  <p>{product.price}</p>
                                                  <div>
                                                    <p>{item.username}</p>
                                                      <p>{item.phone}</p>
                                                      <p>{item.doorno},{item.street}</p>
                                                      <p>{item.area},{item.district}</p>
                                                      <p>{item.state}</p>
                                                      <p>Pincode - {item.pincode}</p>
                                                  </div>
                                          </div> :<div></div>}

                                          
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

export default SellerOrder