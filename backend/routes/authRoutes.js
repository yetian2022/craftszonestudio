const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../schema/userSchema") // User model

const router = express.Router()

// Register a new admin
router.post("/register", async (req, res) => {
  const { username, password } = req.body
  console.log(req.body) // debug only

  const hashedPassword = await bcrypt.hash(password, 10)
  console.log("Hashed password during registration:", hashedPassword) // debug only

  const newUser = new User({
    username,
    password: hashedPassword,
    role: "admin",
  })

  await newUser.save()
  res.status(201).json({ message: "Admin created" })
})

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })

  if (!user) {
    return res.status(400).json({ message: "User not found" })
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return res.status(400).json({ message: "Incorrect password" })
  }

  const token = jwt.sign({ id: user._id, role: user.role }, "your_jwt_secret", {
    expiresIn: "1h",
  })

  res.cookie("token", token, { httpOnly: true })
  res.status(200).json({ message: "Logged in" })
})

module.exports = router
