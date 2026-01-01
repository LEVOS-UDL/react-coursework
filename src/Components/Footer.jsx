import React from 'react'
import './Footer.css'
import Salford from '../assets/Salford.png' 

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <img src={Salford} alt="" className='Salford' />
            <div className='footer-info2'>
                <p>let us help you find the perfect place</p>
            </div>
            <div className='Socials'>
              <a href='#' className='social-icon'>Youtube</a>
              <a href='#' className='social-icon'>Instagram</a>
              <a href='#' className='social-icon'>Facebook</a>
              <a href='#' className='social-icon'>X</a>
            </div>
            <div className='footer-nav'>
              <h2>EXPLORE</h2>
              <ul>
                <li><a href='#'>Properties Available</a></li>
                <li><a href='#'>Agents Available</a></li>
                <li><a href='#'>Other Services</a></li>
              </ul>
            </div>
            <div className='Company'>
              <h2>Our Company</h2>
              <ul>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Extra information</a></li>
                <li><a href='#'>Contact us!</a></li>
              </ul>
            </div>
            <div className='contact-info'>
              <p>UNITED KINGDOM</p>
              <p>+44 826540123</p>
              <p><a href="#">Salford@gmail.com</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
