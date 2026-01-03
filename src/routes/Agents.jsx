import React from 'react'
import './Agents.css'
import Left from '../assets/LEFT.png'
import Right from '../assets/RIGHT.png'

const Agents = () => {
  return (
    <div className='Agents'>
      <img src={Left} alt='' className='LArrow-btn' />
      <img src={Right} alt='' className='RArrow-btn' />
      <div className='slider'></div>
    </div>
  )
}

export default Agents
