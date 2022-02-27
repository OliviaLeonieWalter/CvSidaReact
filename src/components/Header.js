import React from 'react'
import { NavLink } from 'react-router-dom'

import "./css/Header.css";

export const Header = () => {
  return (
    <div className='navbar'>
        <h1 className="logo-name">Olivia Walter</h1>
        <nav>
            <ul className="nav-items">
                <li className='nav-text'><NavLink to="/">Home</NavLink></li>
                <li className='nav-text'><NavLink to="/omMig">Om mig</NavLink></li>
                <li className='nav-text'><NavLink to="/Cv">CV</NavLink></li>
                <li className='nav-text'><NavLink to="/Portfolio">Portfolio</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header