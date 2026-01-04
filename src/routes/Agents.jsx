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
          <p>With 30 years worth of knowledge around the market Debra Rivas gives clients an in depth guide for buying, selling or even investing ensuring only the best information backed by strategic insight and integrity. Debra Rivas is your trusted partner in the ever-evolving real estate landscape.</p>
        </div>
      </div>

      <div className='Agent-Card'>
        <img src={Agent2} alt='' className='Agent2' />
        <div className='container'>
          <h2>Marcos Hoover</h2>
          <p>Marcos Hoover makes sure that his clients make well-informed decisions on buying, selling and investing he is a professional when it comes to communicating with clients and makes a seamless advices based on a clients unique needs.</p>
        </div>
      </div>

      <div className='Agent-Card'>
        <img src={Agent3} alt='' className='Agent3' />
        <div className='container'>
          <h2>Jane Wilkinson</h2>
          <p>Jane Wilkinson is all about a result-driven approach when it comes to rea estate she helps clients through ever single step of buying, renting or investing Jane is always committed to bringing a smooth experience to make things as easy as possible.</p>
        </div>
      </div>

      <div className='Agent-Card'>
        <img src={Agent4} alt='' className='Agent4' />
        <div className='container'>
          <h2>Trey Fischer</h2>
          <p>Trey Fischer gives a practical and client-focused approach to real estate with clear communication Trey works close with buyers, sellers and investors making sure to bring only informed decisions the most reliable person that pays attention to detials.</p>
        </div>
      </div>

      <div className='Agent-Card'>
        <img src={Agent5} alt='' className='Agent5' />
        <div className='container'>
          <h2>Amalia Orr</h2>
          <p>Amalia Orr uses preperation to affectivly find the best course of action for her clients and takes accountability where it matters the most, her values are honest communication and well thought out decisions by staying ahead of market trends.</p>
        </div>
      </div>
    </div>
  )
}

export default Agents






