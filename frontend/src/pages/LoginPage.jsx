import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/LoginPage.css'

const LoginPage = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle login logic here
      console.log('Login attempt:', formData)
    }
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
  
          <button type="submit">Login</button>
  
          <p className="register-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    )
  }
  
  export default LoginPage