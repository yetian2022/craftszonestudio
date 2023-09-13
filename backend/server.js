require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const googleAuthRoutes = require("./routes/googleAuthRoutes") // Google OAuth routes
const Image = require("./model/imageModel")
const imageRoutes = require("./routes/imageRoutes") // Image routes

const { connect, Schema, model } = require("mongoose")

// Passport Configuration for Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "203299230858-2o3q26f3kkou6i9i5kbh6js6dlpa9456.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Store user's profile information in database
      // ...
      return done(null, profile)
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

const app = express()
app.use(express.json())
app.use(cors())

app.use(
  require("express-session")({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use(googleAuthRoutes) // Google OAuth routes
app.use("/api", imageRoutes) // Image routes (If you're still using this")

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

// API endpoint to get images (If you're still using this)
app.get("/api/images", async (req, res) => {
  const images = await Image.find({})
  res.json(images.map((image) => image.url))
})

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001/")
})
