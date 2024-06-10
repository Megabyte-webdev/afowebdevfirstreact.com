import React from 'react'
import './Programs.css'
import { FaBone, FaSatelliteDish, FaPeopleGroup } from 'react-icons/fa6'
import prm1 from "../assets/prm-1.jpg"
import prm2 from "../assets/prm-2.jpg"
import prm3 from "../assets/prm-3.jpg"
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
          <img src={prm1} alt="prm1" />
          <section className="caption">
            <FaBone className='prm-img-caption' />
            <p>Learn to provide</p>
          </section>
        </div>
        <div className="program">
          <img src={prm2} alt="prm2" />
          <section className="caption">
              <FaSatelliteDish className='prm-img-caption' />
              <p>Reach out to us</p>
            </section>
        </div>
        <div className="program">
          <img src={prm3} alt="prm3" />
          <section className="caption">
            <FaPeopleGroup className='prm-img-caption' />
            <p>Check Out Our Community</p>
          </section>
        </div>
    </div>
  )
}

export default Programs