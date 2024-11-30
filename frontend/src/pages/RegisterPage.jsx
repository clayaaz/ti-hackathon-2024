import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css/RegisterPage.css'

const RegisterPage = () => {
  const navigate = useNavigate();
  const [users, setusers] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('');

    // Validate passwords match
    if (users.password !== users.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5000' 
        : '';

      const response = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: users.name,
          username: users.username,
          email: users.email,
          password: users.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful
        alert('Registration successful!');
        navigate('/login'); // Redirect to login page
      } else {
        // Registration failed
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('An error occurred during registration');
    }
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

        {error && <div className="error-message">{error}</div>}

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