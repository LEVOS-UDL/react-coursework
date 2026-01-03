import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <form>
        <h2>Contact Us!</h2>
        <div className='input'>
          <label>Name</label>
          <input type='text' className='field' placeholder='Enter your name' required />
        </div>
        
      </form>
    </section>
  )
}

export default Contact
