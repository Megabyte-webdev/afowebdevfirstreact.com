import React from 'react'
import img from "../assets/prm-1.jpg"
const Slide = ({slide}) => {
    return (
            <li>
                <div className="profile">
                    <img src={img} alt="img" />
                    <article>
                        <h3>{slide.name}</h3>
                        <p>{slide.job}</p>
                    </article>
                </div>
                <p>{slide.content}</p>

            </li>
    )
}

export default Slide