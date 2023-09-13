const { Schema, model } = require("mongoose")

const imageSchema = new Schema({
  url: String,
})

const Image = model("Image", imageSchema)

module.exports = Image
