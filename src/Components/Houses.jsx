import React from 'react'
import './Houses.css'
import HOUSE1 from '../assets/HOUSE1.jpg'
import FLAT1 from '../assets/FLAT1.jpg'
import COTTAGE1 from '../assets/COTTAGE1.jpg'
import BUNGALOW1 from '../assets/BUNGALOW1.jpg'
import APARTMENT1 from '../assets/APARTMENT1.jpg'

const Houses = () => {
  return (
    <div className="Houses">
      <div className="House">
        <img src={HOUSE1} alt="" />
        <h2>Houses</h2>
      </div>
      <div className="House">
        <img src={FLAT1} alt="" />
        <h2>Flats</h2>
      </div>
      <div className="House">
        <img src={BUNGALOW1} alt="" />
        <h2>Bungalows</h2>
      </div>
      <div className="House">
        <img src={APARTMENT1} alt="" />
        <h2>Apartments</h2>
      </div>
      <div className="House">
        <img src={COTTAGE1} alt="" />
        <h2>Cottages</h2>
      </div>
    </div>
  )
}

export default Houses
