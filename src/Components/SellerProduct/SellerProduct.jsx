import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SellerProduct.css'
import { useNavigate } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";

const SellerProduct = () => {

  const sellerid = localStorage.getItem("sellerid")
  const [product,setProduct] = useState([])
  const navigate = useNavigate()

  const fetchSellerProducts =  async()=>{
    const response = await axios.get("http://localhost:4000/api/product/getsellerproduct",{headers:{'seller_id':sellerid}})
    if(response.data.success){
      setProduct(response.data.data)  
    }
  }
  const deleteProduct = async(itemId)=>{
    const response = await axios.post("http://localhost:4000/api/product/deleteproduct", { id: itemId })
    if(response.data.success){
      alert(response.data.message)
      fetchSellerProducts();
    }
  }
  fetchSellerProducts();
  return (
    <div className='product-list'>
      {product.map((item,index)=>{
        return <>
          <div key={index} className='wrapper'>
              <p className='product-delete' onClick={()=>deleteProduct(item._id)}>X</p>
              <FaEdit onClick={()=>{localStorage.setItem("productid",item._id);navigate('/edit');}} className='product-edit' />
              <div className='product-img'>
                <img src={"http://localhost:4000/images/"+item.image} />
              </div>
              <div className='product-info'>
                <div className='product-text'>
                  <h1>{item.name}</h1>
                  <p>{item.product_detail}</p>
                </div>
                <div className='product-price-btn'>
                <p>₹<span>{item.price}</span></p>
                  <p>Stock :{item.stock}</p>
                </div>
              </div>
          </div>
        </>
      })}
    </div>
  )
}

export default SellerProduct
  