import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Welcome to Crafts Zone!</h1>
      <p>Please select your location:</p>
      <Link to="/brookline">
        <button>Brookline</button>
      </Link>
      <Link to="/cambridge">
        <button>Cambridge</button>
      </Link>
    </div>
  )
}

export default Home
