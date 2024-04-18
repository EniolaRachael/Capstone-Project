import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
        <div className='hero'>
            <div className='heroleft'>
                <h1>Discover Your Style with FashionSavvy</h1>
                <div className='herospan'>
                <div className='dot'></div><span> Attract Customers</span>
                <div className='dot'></div><span> Drive Sales</span>
                <div className='dot'></div><span>Track of Customer Details</span>
                <div className='dot'></div><span>Stay Organized</span>

                  <div className='insert'>
              <input type="text" placeholder='insert your mail' />
              <button type='search'>Shop Now</button> 
             </div>
            </div>  
                </div>

            </div>
            <div className='heroright'>
              <div>
                
              </div>
             
        </div>
    </div>
  )
}

export default Hero