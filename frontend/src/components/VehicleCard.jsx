import React from 'react'
import './css/VehicleCard.css'

const VehicleCard = ({ vehicle }) => {
  const { name, number_plate, price, type, sub_type, image_url, size } = vehicle

  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img src={image_url} alt={name} />
      </div>
      <div className="vehicle-info">
        <h3 className="vehicle-name">{name}</h3>
        <div className="vehicle-details">
          <span className="plate-number">{number_plate}</span>
          <span className="vehicle-type">{`${type} • ${sub_type}`}</span>
        </div>
        <div className="vehicle-meta">
          <span className="vehicle-size">{size}</span>
          <span className="vehicle-price">${price}/day</span>
        </div>
        <button className="rent-button">Rent Now</button>
      </div>
    </div>
  )
}

export default VehicleCard