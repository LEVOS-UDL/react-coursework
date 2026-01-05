import React from 'react'
import './About.css'
import HandShake from '../assets/HANDSHAKE.jpg'

const About = () => {
  return (
    <div>
      <h1>ABOUT US</h1>
      <p>We are Salford Real estate, we provide properties that can be purchased or rented and we also have multiple agents that you can talk to about anything! From advice on how to purchase a property and even on whats the difference between renting and buying. We are the top Real estate company when it comes to User expierence and satisfaction with lot's of possitive reviews you can't go wrong going with Salford! We also have the most diverse Properties available from Houses to appartments to more niche properties like cottages we have properties for everyone</p>
      <img src={HandShake} alt='' className='Image1'/>
    </div>
  )
}

export default About
