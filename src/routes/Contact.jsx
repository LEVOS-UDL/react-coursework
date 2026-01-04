import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <form>
        <h2>Contact Us!</h2>
        <div className='input'>
          <label>First Name</label>
          <input type='text' className='field' placeholder='Enter your First Name' required />
        </div>
        <div className='input'>
          <label>Surname</label>
          <input type='text' className='field' placeholder='Enter your Surname' required />
        </div>
        <div className='input'>
          <label>Email</label>
          <input type='text' className='field' placeholder='Enter your Email' required />
        </div>
        <div className='input'>
          <label>Message</label>
          <textarea name='' id='' className='field message' placeholder='Type your message' required />
        </div>
        <button type='submit'>Send</button>
      </form>
    </section>
  )
}

export default Contact
