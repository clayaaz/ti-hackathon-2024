import React, { useState } from 'react'
import './css/AddVehicle.css'

const AddVehicle = () => {
  const [vehicle, setvehicle] = useState({
    name: '',
    number_plate: '',
    phone_number: '',
    size: 'small',
    price: '',
    type: 'car',
    sub_type: '',
    image_url: '',
    condition: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Vehicle data:', vehicle)
  }

  const handleChange = (e) => {
    setvehicle({
      ...vehicle,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="add-vehicle-container">
      <form className="add-vehicle-form" onSubmit={handleSubmit}>
        <h2>Add Your Vehicle</h2>

        <div className="form-group">
          <label>Vehicle Name</label>
          <input
            type="text"
            name="name"
            value={vehicle.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Number Plate</label>
          <input
            type="text"
            name="number_plate"
            value={vehicle.number_plate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone_number"
            value={vehicle.phone_number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Size</label>
          <select name="size" value={vehicle.size} onChange={handleChange}>
            <option value="small">Small 5 seats</option>
            <option value="medium">Medium 7 seats</option>
            <option value="large">Large 7+ seats</option>
          </select>
        </div>

        <div className="form-group">
          <label>Price (per day)</label>
          <input
            type="number"
            name="price"
            value={vehicle.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select name="type" value={vehicle.type} onChange={handleChange}>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="bus">Bus</option>
            <option value="van">Van</option>
          </select>
        </div>

        <div className="form-group">
          <label>Sub Type</label>
          <input
            type="text"
            name="sub_type"
            placeholder="e.g., SUV, Sedan, Sport"
            value={vehicle.sub_type}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Car Image</label>
          <input
            type="url"
            name="image_url"
            value={vehicle.image_url}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Car Condition</label>
          <input
            type="text"
            name="condition"
            value={vehicle.condition}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  )
}

export default AddVehicle