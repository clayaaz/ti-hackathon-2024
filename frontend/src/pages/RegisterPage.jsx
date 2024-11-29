import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/RegisterPage.css'

const RegisterPage = () => {
  const [users, setusers] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add registration logic here
    if (users.password !== users.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('Register attempt:', users)
  }

  const handleChange = (e) => {
    setusers({
      ...users,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={users.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={users.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={users.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={users.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={users.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterPage