import React from 'react'
import './Hero.css'
import { FaArrowRight } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className='hero'>
        <h1 className='hero-heading'>We Ensure Better Education For a Better World</h1>
        <p className="hero-desc">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <button className='btn'>Subscribe <FaArrowRight className='arrow-icon' /> </button>
    </div>
  )
}

export default Hero