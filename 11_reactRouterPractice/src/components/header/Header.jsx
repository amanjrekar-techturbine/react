import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav>
            <NavLink to="/" style={({isActive}) => {
                return {color: isActive ? "red" : "gray"}
            }}>HOME</NavLink>
            <NavLink to="/about" style={({isActive}) => {
                return {color: isActive ? "red" : "gray"}
            }}>ABOUT</NavLink>
            <NavLink to="/contact" style={({isActive}) => {
                return {color: isActive ? "red" : "gray"}
            }}>CONTACT</NavLink>
        </nav>
    </div>
  )
}

export default Header