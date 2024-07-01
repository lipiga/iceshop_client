import React, { useState } from 'react'
import axios from 'axios'
import './SellerAddproducts.css'
import SellerHeader from '../Seller/SellerHeader'
import { toast } from 'react-toastify';

const SellerAddproducts = () => {
  const sellerId = localStorage.getItem("sellerid")
  const [image , setImage] = useState(false)
  const [product, setProduct] = useState({
    seller_id :sellerId,
    name :"",
    product_detail:"",
    price:"",
    stock:""
  })

  const onchangeHandler = (e)=>{
    const name = e.target.name
    const value = e.target.value

    setProduct(product=>({...product,[name]:value}))
  }

  const onSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("name",product.name)
    formData.append("seller_id",product.seller_id)
    formData.append("stock",Number(product.stock))
    formData.append("price",Number(product.price))
    formData.append("image",image)
    formData.append("product_detail",product.product_detail)

    console.log(formData)

    const response = await axios.post("http://localhost:4000/api/product/addproduct",formData)
    if(response.data.success){
      setImage(false)
      setProduct({
        name: "",
        product_detail: "",
        price: "",
        stock: ""
      })
      toast.success("Product Added")
    }
  }
  return (
    <div className='add'>
    <SellerHeader/>
    
      <form className='form-container' onSubmit={onSubmit}>
        <p>Enter Product Details</p>
       
        <input className='input-tag' onChange={onchangeHandler} value={product.name} placeholder='Enter Product Name' type='text' name="name" required  />
        <textarea onChange={onchangeHandler} value={product.product_detail} rows={3} placeholder='Enter Product Details' name='product_detail' required />
        <input className='input-tag' onChange={onchangeHandler} value={product.price} placeholder='Enter Product Price' type='number' name='price' required />
        <input className='input-tag' onChange={onchangeHandler} value={product.stock} placeholder='Enter Number of Stock' type='number' name='stock' required />
        <input className='input-tag' onChange={(e) => setImage(e.target.files[0])} type='file' name='image' required />
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default SellerAddproducts