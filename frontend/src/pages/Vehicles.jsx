import React, { useState, useEffect } from 'react'
import VehicleCard from '../components/VehicleCard'
import VehicleFilter from '../components/VehicleFilter'
import './css/Vehicle.css'
import { useVehicleStore } from '../store/vehicles'

const Vehicles = () => {
  const {fetchVehicles, vehicles} = useVehicleStore()
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles)

  // Effect to fetch vehicles
  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  // Add this new effect to update filteredVehicles when vehicles changes
  useEffect(() => {
    setFilteredVehicles(vehicles);
  }, [vehicles]);


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
        
        <div className="vehicle-cards-container">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vehicles