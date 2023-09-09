import React from "react"
import { Link } from "react-router-dom"
import "../css/NavigationBar.css"

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        YourLogo
      </Link>
      <ul className="menu">
        <li>
          <Link to="/brookline">Brookline</Link>
        </li>
        <li>
          <Link to="/cambridge">Cambridge</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="login-icon">
        <Link to="/login">
          <img src="src/loginicon.jpg" alt="Login" />
        </Link>
      </div>
    </nav>
  )
}

export default NavigationBar
