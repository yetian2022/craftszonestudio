console.log("authenticateJWT module loaded")
const jwt = require("jsonwebtoken")

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.sendStatus(403)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }
    req.user = user
    next()
  })
}

module.exports = authenticateJWT
