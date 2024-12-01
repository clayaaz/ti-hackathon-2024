import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './css/VehicleCard.css'

const VehicleCard = ({ vehicle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { name, user_name, number_plate, price, type, sub_type, image_url, size, phone_number } = vehicle

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img src={image_url} alt={name} />
      </div>
      <div className="vehicle-info">
        <h3 className="vehicle-name">{name}</h3>
        <h3 className="owner-name">{user_name}</h3>
        <div className="vehicle-details">
          <span className="plate-number">{number_plate}</span>
          <span className="vehicle-type">{`${type} • ${sub_type}`}</span>
        </div>
        <div className="vehicle-meta">
          <span className="vehicle-size">{size}</span>
          <span className="vehicle-price">Rs.{price}/day</span>
        </div>
        <button className="rent-button" onClick={openModal}>
          Rent Now
        </button>
      </div>

      {isModalOpen && createPortal(
        <div 
          className="modal-overlay" 
          onClick={closeModal}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Vehicle Details</h2>
            <div className="modal-details">
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Owner:</strong> {user_name}</p>
              <p><strong>Phone Number:</strong> {phone_number}</p>
              <p><strong>Number Plate:</strong> {number_plate}</p>
              <p><strong>Type:</strong> {type}</p>
              <p><strong>Sub Type:</strong> {sub_type}</p>
              <p><strong>Size:</strong> {size}</p>
              <p><strong>Price:</strong> Rs.{price}/day</p>
            </div>
            <div className="modal-buttons">
              <a 
                href={`mailto:${vehicle.user_email}?subject=Inquiry about ${vehicle.name}&body=Hello, I am interested in renting your ${vehicle.name}.`}
                className="contact-owner-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Owner
              </a>
              <button 
                className="close-button" 
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.getElementById('portal-root')
      )}
    </div>
  )
}

export default VehicleCard