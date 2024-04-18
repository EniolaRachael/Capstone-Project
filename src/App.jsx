import React from 'react'
import HomePage from './components/Pages/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './components/Shop/Shop' 
import About from './components/About Us/About'

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
      <Route path ='/' element={ <HomePage/>}/>
      <Route path ='/About' element={ <About/>}/>
      <Route path ='/Shop'  element={ <Shop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
