import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            Logo
          </Link>

          <Link to="/login" className="navbar-user">
            <FaUserCircle className="user-icon" />
            <span>Login / Register</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
