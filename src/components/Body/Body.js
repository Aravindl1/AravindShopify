import React from 'react'
import Navbar from '../NavBar/NavBar'
import './Body.css'
import Card from '../Card/Card'


const Body = () => {
  return (
        <div>
          <Navbar/>

          <div className='body-container'>   
              <div className='body-head d-none d-md-block'>
                 <button className='body-head1'>Pay Monthly</button>
                <button className='body-head2'>Pay Yearly(save 25%)</button>
              </div>
              <Card/>
          </div>
        </div>
  )
}

export default Body