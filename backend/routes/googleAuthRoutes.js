const express = require("express")
const passport = require("passport")
const router = express.Router()

// Initialize Google OAuth2.0 authentication
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
)

// Handle Google OAuth2.0 callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login", // Redirect to login page if authentication fails
  }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/")
  }
)

module.exports = router
