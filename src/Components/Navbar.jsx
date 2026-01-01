import React from 'react'
import './Navbar.css'
import Salford from '../assets/Salford.png' 
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='container'>
      <Link to="/">
        <img src={Salford} alt="" className='Salford' />
      </Link>

      <ul className="nav-links">
        <li><Link to="/Buy" className="btn">Buy</Link></li>
        <li><Link to="/Rent" className="btn">Rent</Link></li>
        <li><Link to="/About" className="btn">About</Link></li>
        <li><Link to="/Agents" className="btn">Agents</Link></li>
        <li><Link to="/Contact" className="btn">Contact</Link></li>
        <li><Link to="/Login" className='btn4'> Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar





/* 
<img src={Salford} alt="" className='Salford' />
        <ul>
            <li><button className='btn'>Buy</button></li>
            <li><button className='btn'>Rent</button></li>
            <li><button className='btn'>About</button></li>
            <li><button className='btn'>Agents</button></li>
            <li><button className='btn'>Contacts</button></li>
        </ul>
*/


/*

const Navbar = () => {
  return (
    <nav className='container'>
      <Link to="/">
        <img src={Salford} alt="" className='Salford' />
      </Link>

      <Link to="/">
      <ul>
          <li><button className='btn'>Buy</button></li>
        </ul>
      </Link>

      <Link to="/">
      <ul>
          <li><button className='btn'>Rent</button></li>
        </ul>
      </Link>

      <Link to="/">
      <ul>
          <li><button className='btn'>About</button></li>
        </ul>
      </Link>

      <Link to="/">
      <ul>
          <li><button className='btn'>Agents</button></li>
        </ul>
      </Link>

      <Link to="/">
      <ul>
          <li><button className='btn'>Contacts</button></li>
        </ul>
      </Link>
    </nav>
  )
}

*/
