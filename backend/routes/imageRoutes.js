const express = require("express")
const router = express.Router()
const authModule = require("../modules/authenticateJWT")
const adminModule = require("../modules/authorizeAdmin")

// debug only
console.log("authModule:", authModule)
console.log("adminModule:", adminModule)

const multer = require("multer")

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

router.post(
  "/upload",
  authModule,
  adminModule,
  upload.single("image"),
  async (req, res) => {
    // upload logic here
  }
)

module.exports = router
