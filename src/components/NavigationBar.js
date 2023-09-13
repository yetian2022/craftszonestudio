import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "../css/NavigationBar.css"

const NavigationBar = () => {
  const [user, setUser] = React.useState(null)

  useEffect(() => {
    // Fetch the current user from the backend to check if they are logged in
    const fetchUser = async () => {
      try {
        const response = await axios.get("/auth/current_user", {
          withCredentials: true,
        })
        setUser(response.data)
      } catch (error) {
        console.error("Error fetching current user:", error)
      }
    }

    fetchUser()
  }, [])

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
