import React from 'react'
import Logo from '../../assets/Logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='fashionsavvy'>
      <div className='logo'><img src ={Logo} alt=""/>
      <p>FashionSavvy</p>
      <ul>
        <li>Home</li>
       <Link to = '/Shop'><li>Shop</li></Link>
        <li>Account</li>
        <Link to='/About'><li>About Us</li></Link>
        <li>Support</li>
        <li>Cart</li>
      </ul>
      </div>
    </div>

  
        
    
  )
}

export default Navbar