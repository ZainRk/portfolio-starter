import React from 'react'
import './Navbar.css'
const Navbar  = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Karan</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
            </div>
            <button className="button">
                Contact
            </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
