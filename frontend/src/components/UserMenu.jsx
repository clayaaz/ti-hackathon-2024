import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './css/UserMenu.css';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="user-menu-container">
      <button 
        className="user-icon-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-user"></i> {/* Make sure to include Font Awesome in your project */}
      </button>

      {isOpen && (
        <div className="user-dropdown">
          <div className="user-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.username}</p>
          </div>
          <button 
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu; 