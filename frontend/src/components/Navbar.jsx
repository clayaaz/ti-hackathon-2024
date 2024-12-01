import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import UserMenu from './UserMenu'
import './css/Navbar.css'
import logo from '../../assets/favicon.png'


const Navbar = () => {
  const { user } = useAuth()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <nav className="navbar">
      <div className="nav-brand">
      <Link to="/"><img src={logo} alt="ValleyRide" /> </Link>
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/vehicles">Vehicles</Link>
        {user && (
          <Link to="/add-vehicle">Add Vehicle</Link>
        )}
        
        {user ? (
          <UserMenu />
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="dark-mode-toggle"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar