import React from 'react'
import './FloatingDiv.css'


const FloatingDiv = ({image,txtTop,txtBottom}) => {

  return (
    <div className='floatingDiv'>
        <img src={image} alt='' />
        <span>
            {txtTop} <br />
            {txtBottom}
        </span>
    </div>
  )
}

export default FloatingDiv