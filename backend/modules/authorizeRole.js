function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next() // user has the role, proceed to the next middleware
    } else {
      res.status(403).json({ message: "Forbidden" }) // user doesn't have the required role, respond with 403 Forbidden
    }
  }
}

module.exports = authorizeRole
