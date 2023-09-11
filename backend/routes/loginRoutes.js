const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../schema/userSchema") // User model

const router = express.Router()

router.post("/login", async (req, res) => {
  const { username, password } = req.body
  console.log("Plain password during login:", password) // debug only

  // Debug: Log incoming username and password to check if they are correct
  console.log("Incoming username:", username)
  console.log("Incoming password:", password)

  // Find user by username
  const user = await User.findOne({ username })
  console.log("Stored hashed password during login:", user.password) // debug only

  // Debug: Log user object fetched from the database
  console.log("User from database:", user)

  if (!user) {
    return res.status(400).json({ error: "Username not found" })
  }

  // Debug: Log the hashed password from the database for the user
  console.log("Hashed password from database:", user.password)

  // Check password
  const validPassword = await bcrypt.compare(password, user.password)

  // Debug: Log the result of the password comparison
  console.log("Password comparison result:", validPassword)

  if (!validPassword) {
    return res.status(400).json({ error: "Invalid password" })
  }

  // Generate and return JWT
  const token = jwt.sign(
    { id: user._id, username: user.username, role: user.role }, // payload
    process.env.JWT_SECRET, // Replace with your JWT secret
    { expiresIn: "1h" } // expires in 1 hour
  )

  res.json({ token })
})

module.exports = router
