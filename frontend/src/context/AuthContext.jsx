import React, { createContext, useContext, useState, useEffect } from 'react'

// Create the context
const AuthContext = createContext(null)

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in on mount
  useEffect(() => {
    checkAuthStatus()
  }, [])

  // Check local storage for auth token
  const checkAuthStatus = () => {
    try {
      const token = localStorage.getItem('authToken')
      const userData = localStorage.getItem('userData')
      
      if (token && userData) {
        setUser(JSON.parse(userData))
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error('Auth status check failed:', error)
    } finally {
      setLoading(false)
    }
  }

  // Login function
  const login = async (email, password) => {
    try {
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5000' 
        : '';

      console.log('Making login request with:', { email, password });
      
      const response = await fetch(`${baseUrl}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok && data.success) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        return { success: true };
      } else {
        return { 
          success: false, 
          error: data.error || 'Invalid credentials'
        };
      }
    } catch (error) {
      console.error('Login error details:', error);
      return { 
        success: false, 
        error: error.message || 'An error occurred during login'
      };
    }
  };

  // Logout function
  const logout = () => {
    try {
      // Clear localStorage
      localStorage.removeItem('authToken')
      localStorage.removeItem('userData')
      
      // Reset state
      setUser(null)
      setIsLoggedIn(false)
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  // Register function
  const register = async (userData) => {
    try {
      // Replace with your actual API call
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const data = await response.json()
      
      // Automatically log in after registration
      await login({
        email: userData.email,
        password: userData.password,
      })

      return data
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  // Context value
  const value = {
    user,
    isLoggedIn,
    loading,
    login,
    logout,
    register,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}