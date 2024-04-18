import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Footer from '../Footer/Footer.jsx'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer/> 
       
    </div>
  )
}

export default HomePage


