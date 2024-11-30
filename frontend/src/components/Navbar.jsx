import React from 'react'
import { Link } from 'react-router-dom'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { useAuth } from '../context/AuthContext'
import './css/Navbar.css'

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      // You can add a toast notification here
    } catch (error) {
      console.error('Logout failed:', error)
      // Handle error (show error message)
    }
  }

  const renderAuthSection = () => {
    if (isLoggedIn && user) {
      return (
        <div className="nav-auth">
          <UserCircleIcon className="auth-icon" />
          <span className="user-name">{user.name}</span>
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )
    }

    return (
      <Link to="/login" className="nav-auth">
        <UserCircleIcon className="auth-icon" />
        <span>Login / Register</span>
      </Link>
    )
  }

  return (
    <div className="nav-wrapper">
      <nav className="nav-container">
        <Link to="/" className="nav-logo">
          RideMandu
        </Link>

        <div className="nav-center">
          <Link to="/vehicles" className="nav-item">Browse Vehicles</Link>
          <Link to="/add-vehicle" className="nav-item">Add Vehicle</Link>
        </div>

        {renderAuthSection()}
      </nav>
    </div>
  )
}

export default Navbar