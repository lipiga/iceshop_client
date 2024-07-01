import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className='header'>
        <h1>NEW FLAVOURS FOR YOUR TASTE</h1>
        <p>Treat your tastebuds with our significant flavours</p>
        <button>Explore Now</button>
      </div>
      <h1 className='products'>Products</h1>
    </>
  )
}

export default Header