import React, { useState } from 'react'
import './css/AddVehicle.css'
import { useVehicleStore } from '../store/vehicles'

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
    condition: '',
    user_email: ''
  })
  const {createVehicle} = useVehicleStore()

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent form from reloading the page
    
    try {
      const {success, message} = await createVehicle(vehicle);
      if (success) {
        alert(message); // Or use a better notification system
        // Reset form
        setvehicle({
          name: '',
          user_name: '',
          number_plate: '',
          phone_number: '',
          size: 'small',
          price: '',
          type: 'car',
          sub_type: '',
          image_url: '',
          condition: '',
          user_email: ''
        });
      } else {
        alert('Failed to add vehicle: ' + message);
      }
    } catch (error) {
      console.error('Error adding vehicle:', error);
      alert('Failed to add vehicle. Please try again.');
    }
  }
  const getAnimationDelay = (index) => ({
    animationDelay: `${index * 0.1}s`
  });


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

        <div className="form-group" style={getAnimationDelay(1)}>
          <label>Vehicle Name</label>
          <input style={{maxWidth: '570px'}}
            type="text"
            name="name"
            value={vehicle.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" style={getAnimationDelay(1)}>
          <label>Your Name</label>
          <input style={{maxWidth: '570px'}}
            type="text"
            name="user_name"
            value={vehicle.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" style={getAnimationDelay(1)}>
          <label>Your Email</label>
          <input style={{maxWidth: '570px'}}
            type="text"
            name="user_email"
            value={vehicle.user_email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group" style={getAnimationDelay(2)}>
          <label>Number Plate</label>
          <input style={{maxWidth: '570px'}}
            type="text"
            name="number_plate"
            value={vehicle.number_plate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group" style={getAnimationDelay(3)}>
          <label>Phone Number</label>
          <input style={{maxWidth: '570px'}}
            type="tel"
            name="phone_number"
            value={vehicle.phone_number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group" style={getAnimationDelay(4)}>
          <label>Size</label>
          <select name="size" value={vehicle.size} onChange={handleChange}>
            <option value="small">Small 1-5 seats</option>
            <option value="medium">Medium 7 seats</option>
            <option value="large">Large 7+ seats</option>
          </select>
        </div>

        <div className="form-group" style={getAnimationDelay(5)}>
          <label>Price (per day)</label>
          <input style={{maxWidth: '570px'}}
            type="number"
            name="price"
            value={vehicle.price}
            onChange={handleChange}
            required
          />
        </div>

          <div className="form-group" style={getAnimationDelay(6)}>
          <label>Type</label>
          <select name="type" value={vehicle.type} onChange={handleChange}>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="bus">Bus</option>
            <option value="van">Van</option>
          </select>
        </div>

        <div className="form-group" style={getAnimationDelay(7)}>
          <label>Sub Type</label>
          <input style={{maxWidth: '570px'}}
            type="text"
            name="sub_type"
            placeholder="e.g., SUV, Sedan, Sport"
            value={vehicle.sub_type}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={getAnimationDelay(8)}>
          <label>Car Image</label>
          <input style={{maxWidth: '570px'}}
            type="url"
            name="image_url"
            value={vehicle.image_url}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group" style={getAnimationDelay(9)}>
          <label>Car Condition</label>
          <input style={{maxWidth: '570px'}}
            type="text"
            name="condition"
            value={vehicle.condition}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={getAnimationDelay(10)}>Add Vehicle</button>
      </form>
    </div>
  )
}

export default AddVehicle