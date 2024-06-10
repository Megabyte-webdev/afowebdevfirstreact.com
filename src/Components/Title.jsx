import React from 'react'
import "./Title.css"

const Title = ({title, subtitle}) => {
  return (
    <div className='title'>
        <h5>{ title }</h5>
        <h2>{ subtitle }</h2>
    </div>
  )
}

export default Title