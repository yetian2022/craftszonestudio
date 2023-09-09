import React from "react"
import { Link } from "react-router-dom"
import "../css/Brookline.css" // Import the CSS

const Brookline = () => {
  return (
    <div className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source src="\videos\herosectionvideo.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Start Crafting Your Memories!</h1>
        <Link to="/booking/menu">
          <button className="book-now-button">Book Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Brookline
