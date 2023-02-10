import React from 'react'
import './Card.css'
const Card = ({photo, heading,detail}) => {
  return (
    <div className='card' style={{left:"55%", top:"120%"}}>
      <img src={photo}/>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='c-button'>Check Out My Recent Projects</button>
    </div>
    
  )
}

export default Card
