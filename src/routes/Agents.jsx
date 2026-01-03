import React from 'react'
import './Agents.css'
import Agent1 from '../assets/AGENT1.png'
import Agent2 from '../assets/AGENT2.jpg'
import Agent3 from '../assets/AGENT3.jpg'
import Agent4 from '../assets/AGENT4.jpg'
import Agent5 from '../assets/AGENT5.jpg'

const Agents = () => {
  return (
    <div className='Agents'>
      <div className='Agent-Card'>
        <img src={Agent1} alt='' className='Agent1' />
        <div className='container'>
          <h2>Debra Rivas</h2>
          <p>sdasdasdasdasdas</p>
        </div>
      </div>

      <div className='Agent-Card'>
        <img src={Agent2} alt='' className='Agent2' />
        <div className='container'>
          <h2>Marcos Hoover</h2>
          <p>sdasdasdasdasdas</p>
        </div>
      </div>

      <div className='Agent-Card'>
        <img src={Agent3} alt='' className='Agent3' />
        <div className='container'>
          <h2>Jane Wilkinson</h2>
          <p>sdasdasdasdasdas</p>
        </div>
      </div>

      <div className='Agent-Card'>
        <img src={Agent4} alt='' className='Agent4' />
        <div className='container'>
          <h2>Trey Fischer</h2>
          <p>sdasdasdasdasdas</p>
        </div>
      </div>

      <div className='Agent-Card'>
        <img src={Agent5} alt='' className='Agent5' />
        <div className='container'>
          <h2>Amalia Orr</h2>
          <p>sdasdasdasdasdas</p>
        </div>
      </div>
    </div>
  )
}

export default Agents






