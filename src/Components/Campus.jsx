import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import "./Campus.css"
import prm1 from "../assets/prm-1.jpg"
import prm2 from "../assets/prm-2.jpg"
import prm3 from "../assets/prm-3.jpg"
const Campus = () => {
  return (
    <>
    <div className='campus'>
        <img src={prm1} alt="prm1" />
        <img src={prm2} alt="prm2" />
        <img src={prm3} alt="prm3" />
        <img src={prm1} alt="prm1" />
    </div>
    <button className='see-more'>See more here <FaArrowRightLong className='arrow-icon' /> </button>
    </>
  )
}

export default Campus