import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [view, setView]=useState(false);
  const [sticky, setSticky]= useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50? setSticky(true): setSticky(false);
    })
  })

  //for nav add :onMouseLeave={()=>setView(false)}
  const styleSticky= sticky ? {
    backgroundColor: "var(--primary-blue)"
  }:{};
  return (
    <nav style={ styleSticky } className={`nav${view?' responsive':''}`} >
        <img src={logo} className="logo" alt="logo" />
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/programs">Program</NavLink></li>
            <li><NavLink to="/about-us">About us</NavLink></li>
            <li><NavLink to="/campus">Campus</NavLink></li>
            <li className='btn'><button><NavLink to="/contact-us"> Contact us </NavLink></button></li>
        </ul>
        <div className='menu-toggle' onClick={()=>setView(!view)}>
          {
            !view ? <FaBars /> : <FaTimes />
          }
        </div>
    </nav>
  )
}

export default Navbar