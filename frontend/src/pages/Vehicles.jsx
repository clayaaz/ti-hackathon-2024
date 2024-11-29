import React, { useState, useEffect } from 'react'
import VehicleCard from '../components/VehicleCard'
import VehicleFilter from '../components/VehicleFilter'
import './css/Vehicle.css'

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([
    {
        id: 1,
        name: "Toyota Camry",
        number_plate: "ABC 123",
        price: "50",
        type: "Car",
        sub_type: "Sedan",
        image_url: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop",
        size: "Medium"
      },
      {
        id: 2,
        name: "Honda Civic",
        number_plate: "XYZ 789",
        price: "45",
        type: "Car",
        sub_type: "Sedan",
        image_url: "https://images.unsplash.com/photo-1560009320-c01920eef9f8?q=80&w=2940&auto=format&fit=crop",
        size: "Medium"
      },
      {
        id: 3,
        name: "Tesla Model 3",
        number_plate: "EV 456",
        price: "80",
        type: "Car",
        sub_type: "Electric",
        image_url: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2940&auto=format&fit=crop",
        size: "Medium"
      }
  ])
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles)

  const handleFilterChange = (filters) => {
    let filtered = vehicles

    // Search filter
    if (filters.search.trim()) {
      const searchTerm = filters.search.toLowerCase()
      filtered = filtered.filter(vehicle => 
        vehicle.name.toLowerCase().includes(searchTerm)
      )
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter(vehicle => 
        vehicle.type.toLowerCase() === filters.type.toLowerCase()
      )
    }

    // Size filter
    if (filters.size !== 'all') {
      filtered = filtered.filter(vehicle => 
        vehicle.size.toLowerCase() === filters.size.toLowerCase()
      )
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number)
      filtered = filtered.filter(vehicle => {
        const price = Number(vehicle.price)
        if (max) {
          return price >= min && price <= max
        } else {
          return price >= min
        }
      })
    }

    setFilteredVehicles(filtered)
  }


  return (
    <div className="home-page">
      <div className="home-header">
        <h1>Available Vehicles</h1>
        <p>Find and rent the perfect vehicle for your needs</p>
      </div>
      
      <div className="home-content">
        <VehicleFilter onFilterChange={handleFilterChange} />
        
        <div className="vehicles-container">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vehicles