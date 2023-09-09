import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import PartyService from "./pages/PartyService"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Brookline from "./pages/Brookline"
import NavigationBar from "./components/NavigationBar"

const Cambridge = () => {
  return <h1>Welcome to the Cambridge Location!</h1>
}

const Placeholder = () => <div>Placeholder</div>

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/brookline" element={<Brookline />} />
        <Route path="/cambridge" element={<Cambridge />} />
        <Route path="/booking/menu" element={<Placeholder />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/party/mobileparty" element={<Placeholder />} />
        <Route path="/party/privateparty" element={<Placeholder />} />
        <Route path="/party" element={<PartyService />} />
        <Route path="/aboutus/team" element={<Placeholder />} />
        <Route path="/aboutus/hiring" element={<Placeholder />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
