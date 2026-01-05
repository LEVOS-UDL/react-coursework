import React from 'react'
import House1 from '../assets/HOUSE1.jpg'
import Flat1 from '../assets/FLAT1.jpg'
import Cottage1 from '../assets/APARTMENT1.jpg'
import Bungalow1 from '../assets/BUNGALOW1.jpg'
import Apartment1 from '../assets/COTTAGE1.jpg'
import './Buy.css'

const Buy = () => {
  return (
    <div className='houses'>
      <div className='house-Card'>
        <img src={House1} alt='' className='house1' />
        <div className='container1'>
          
          <h2>PRICE:£750000</h2>
          <h2>LOCATION: Petts Wood Road, Petts Wood, Orpington BR5</h2>
          <p>DESCRIPTION: Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...</p>
        </div>
      </div>

      <div className='house-Card'>
        <img src={Flat1} alt='' className='flat1' />
        <div className='container1'>
          
          <h2>PRICE:£399995</h2>
          <h2>LOCATION:Crofton Road Orpington BR6</h2>
          <p>DESCRIPTION: Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.This apartment being only five years old, is still under a 10 year building guarantee...</p>
        </div>
      </div>

      <div className='house-Card'>
        <img src={Cottage1} alt='' className='cottage1' />
        <div className='container1'>
          
          <h2>PRICE:£620000</h2>
          <h2>LOCATION:Cheifton Hall Road TT8</h2>
          <p>DESCRIPTION: a stunning place in a sacluded nature based environment with 4 bedrooms 2 kitchens and plenty of space for indoor and outdoor activities</p>
        </div>
      </div>

      <div className='house-Card'>
        <img src={Bungalow1} alt='' className='bungalow1' />
        <div className='container1'>
          
          <h2>PRICE:£972000</h2>
          <h2>LOCATION:Cherry Pick Street P90</h2>
          <p>DESCRIPTION: a cozy low profile home single story for a small family very accessible and very charming with a front porch makes it efficient</p>
        </div>
      </div>

      <div className='house-Card'>
        <img src={Apartment1} alt='' className='apartment1' />
        <div className='container1'>
          
          <h2>PRICE:£200000</h2>
          <h2>LOCATION:Crawford leman Road R29</h2>
          <p>DESCRIPTION: Small easy to maintain home perfect for a single person who would like a home they can easily navigate and maintain 1 bedroom </p>
        </div>
      </div>
    </div>
  )
}

export default Buy
