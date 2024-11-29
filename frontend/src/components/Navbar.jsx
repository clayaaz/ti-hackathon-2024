import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <nav className="nav-container">
        <Link to="/" className="nav-logo">
          Logo
        </Link>

        <div className="nav-center">
          <Link to="/vehicles" className="nav-item">Browse Vehicles</Link>
          <Link to="/add-vehicle" className="nav-item">Add Vehicle</Link>
        </div>

        <Link to="/login" className="nav-auth">
          <FaUserCircle className="auth-icon" />
          <span>Login / Register</span>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
