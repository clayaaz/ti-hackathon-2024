import React from 'react'
import './css/HomePage.css'

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2128&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh"
      }}>
        <div className="hero-content">
          <h1>Car Rentals for Every Occasion</h1>
          <p>150+ Types of Premium Cars Available</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Easy Online Booking</h3>
          <p>Book your dream car with just a few clicks</p>
        </div>
        <div className="feature-card">
          <h3>Add a vehicle</h3>
          <p>Rent your vehicle to other users</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Long-Distance Rental</h3>
            <p>Perfect for road trips and extended journeys</p>
          </div>
          <div className="service-card">
            <h3>Airport Transfers</h3>
            <p>Convenient pickup and drop-off services</p>
          </div>
          <div className="service-card">
            <h3>Business Meetings</h3>
            <p>Professional vehicles for corporate needs</p>
          </div>
          <div className="service-card">
            <h3>Wedding Events</h3>
            <p>Luxury cars for your special day</p>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="fleet">
        <h2>Our Premium Fleet</h2>
        <div className="fleet-grid">
          <div className="car-card" style={{backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)), url('https://th.bing.com/th/id/OIP.G58nym7AWHI-mzJmltdwxgHaEt?rs=1&pid=ImgDetMain')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"}}>
            <h3>Family Cars</h3>
            <p>Comfortable and spacious buses perfectly fit for family trips</p>
          </div>
          <div className="car-card" style={{backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8)), url('https://th.bing.com/th/id/R.35f9568dbf41412abb2f8ad01b65e0c1?rik=JRwFeHFxKhGnDg&pid=ImgRaw&r=0')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"}}>
            <h3>E.V's</h3>
            <p>Elegant vehicles also for the environment</p>
          </div>
          <div className="car-card" style={{backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8)), url('https://wallpaperaccess.com/full/386190.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"}}> 
            <h3>Luxury Cars</h3>
            <p>Premium vehicles for special moments</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage