require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const multer = require("multer")
const { connect, Schema, model } = require("mongoose")
const loginRoutes = require("./routes/loginRoutes")

// debug only
const authenticateJWT = require("./modules/authenticateJWT")
const authorizeAdmin = require("./modules/authorizeAdmin")

console.log("authenticateJWT:", authenticateJWT)
console.log("authorizeAdmin:", authorizeAdmin)

// Multer storage configuration

const authRoutes = require("./routes/authRoutes")
const imageRoutes = require("./routes/imageRoutes")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api", authRoutes) // '/api' is the base path for all auth routes
app.use("/api", imageRoutes) // '/api' is the base path for all image routes
app.use("/api", loginRoutes) // '/api' is the base path for all login routes

// MongoDB setup
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err)
  })

const imageSchema = new Schema({
  url: String,
})

const Image = model("Image", imageSchema)

// API endpoint to get images
app.get("/api/images", async (req, res) => {
  const images = await Image.find({})
  res.json(images.map((image) => image.url))
})

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001/")
})
