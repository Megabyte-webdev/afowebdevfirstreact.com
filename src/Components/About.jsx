import React, { useState } from 'react'
import "./About.css"
import { FaPlay, FaPause } from 'react-icons/fa'
import aboutImg from "../assets/land.jpg"
const About = () => {
    const [play, setPlay]=useState(false);
  return (
    <div className='about'>
        <div className="about-left" onClick={()=>setPlay(!play)}>
            <img src={aboutImg} alt="Land" />
            <div className="play-btn">
                {
                    play ? <FaPause /> : <FaPlay />
                }
            </div>
        </div>
        <div className="about-right">
            <h4> About University</h4>
            <h2> Nurturing Tomorrow's Leader Today</h2>
            <p> Embark on a transfromative educational journey with our university's comprehensive educational programs. Our cutting-edge curriculum is designed to empower students with the knowledge skills, and experiences needed to excel in the dynamic field of education.</p>
            <p> With a focus of innovation, hands-on learning, and personlized mentorship, our program prepare inspiring educators to make a eaniful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default About