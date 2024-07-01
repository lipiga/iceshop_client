import React, { useContext, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios  from 'axios'
import './SellerHeader.css'
import { useNavigate } from 'react-router-dom'

const SellerHeader = () => {

  const seller_id = localStorage.getItem("sellerid")
  const [sellermenu,setSellermenu] = useState("")
  const navigate = useNavigate()
  const sellerDetails = localStorage.getItem("sellerdetails")
  const details = JSON.parse(sellerDetails)
  const image = "http://localhost:4000/images/"+details.image
  


  return (
    <div>
      <div className='seller-nav'>
        <h1>Dashboard</h1>
        <ul>
          <li className={sellermenu === "myproducts" ? 'active' : ''} onClick={() => { setSellermenu("myproducts"); navigate("/seller") }}>My Products</li>
          <li className={sellermenu === "addproducts" ? 'active' : ''} onClick={() => { setSellermenu("addproducts"); navigate("/addproducts") }}>Add Products</li>
          <li className={sellermenu === "orders" ? 'active' : ''} onClick={() => { setSellermenu("orders") ; navigate('/sellerorder')}}>Orders</li>
          <li onClick={() => { localStorage.removeItem("sellerid"); localStorage.removeItem("sellerdetails"); navigate('/') }}>logout</li>
        </ul>
        <img src={image} />
        
      </div>
      
      
    </div>
  )
}

export default SellerHeader