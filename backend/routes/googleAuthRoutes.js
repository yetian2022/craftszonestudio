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
    // Successful authentication, set HttpOnly cookie and redirect home.
    res.cookie("googleAuthToken", req.user.token, {
      httpOnly: true,
      secure: false, // Set secure to false if not using HTTPS
      // process.env.NODE_ENV === "production", // Set secure to true if in production
    })
    res.redirect("/")
  }
)

module.exports = router
