import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

import "./Testimonials.css"
import slides from "../slides.json"
import Slide from './Slide'
const Testimonials = () => {
    const [slide, setSlide] = useState(0);
    
    function GoToSlide(n){
        setSlide(n);
    }
    return (
        <div className='testimonials'>
            <div className="controls">
                <FaArrowAltCircleLeft onClick={() => GoToSlide(prev => prev === 0 ? 0 : prev - 1)} className='prev-btn' />
                <FaArrowAltCircleRight onClick={() => GoToSlide(prev => prev === 3 ? 3 : prev + 1)} className='next-btn' />
            </div>
            <div className="slider">
                <div class="dots">
                    {
                        slides.map((e, index)=>{
                            return <span key={index} onClick={()=>GoToSlide(index)} className={`dot${index===slide?' active':''}`}></span>
                        })
                    }
                </div>
                <ul style={{ transform: `translateX(-${slide * 25}%)` }}>
                    {
                        slides.map((e)=>{
                            return(
                               <Slide slide={e} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Testimonials