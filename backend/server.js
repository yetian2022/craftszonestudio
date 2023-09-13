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
const cookieParser = require("cookie-parser")

// Passport Configuration for Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
)

app.use(
  require("express-session")({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())

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
