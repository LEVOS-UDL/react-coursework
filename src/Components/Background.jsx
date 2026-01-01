import React from 'react'
import './Background.css'

const Background = () => {
  return (
    <div className='Background'>
      <div className='Background-text'>
      <h1>The Perfect House. The Perfect Neighbourhood.</h1>
      <h3>Lets us help you find the perfect place.</h3>
      <input type="text" placeholder="Search for properties..." className="search-input"></input>
      <button className='btn'>Search</button>
      <div className='btn2'>
        <button className='btn'>Buy</button>
        <button className='btn'>Rent</button>
        <button className='btn'>Sell</button>
      </div>
      </div>
    </div>
  )
}

export default Background
