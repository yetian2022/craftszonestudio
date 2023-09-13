const express = require("express")
const router = express.Router()
const multer = require("multer")
const Image = require("../model/imageModel")

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

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const newImage = new Image({
      url: req.file.path, // assuming that 'path' will have the link to the image
    })

    await newImage.save()

    res
      .status(201)
      .json({ message: "Image uploaded successfully", image: newImage })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: "An error occurred while uploading the image" })
  }
})

module.exports = router
