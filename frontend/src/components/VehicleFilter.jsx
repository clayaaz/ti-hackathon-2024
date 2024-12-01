import React, { useState } from "react";
import "./css/VehicleFilter.css";

const VehicleFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    size: "all",
    priceRange: "all",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Search</label>
        <input
          style={{ maxWidth: "70%" }}
          type="text"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          placeholder="Search vehicles..."
          className="search-input"
        />
      </div>

      <div className="filter-group">
        <label>Vehicle Type</label>
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="all">All Types</option>
          <option value="car">Car</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="truck">Truck</option>
          <option value="van">Van</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Size</label>
        <select name="size" value={filters.size} onChange={handleFilterChange}>
          <option value="all">All Sizes</option>
          <option value="small">Small 2-5 seats</option>
          <option value="medium">Medium 7 seats</option>
          <option value="large">Large 7+ seats</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Price Range</label>
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleFilterChange}
        >
          <option value="all">All Prices</option>
          <option value="1000-1500">Rs.1000 - Rs.1500</option>
          <option value="1500-2000">Rs.1500 - Rs.2000</option>
          <option value="2000-2500">Rs.2000 - Rs.2500</option>
          <option value="2500-1000000">Rs.2500+</option>
        </select>
      </div>
    </div>
  );
};

export default VehicleFilter;
