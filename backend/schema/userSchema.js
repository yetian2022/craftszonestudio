const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, // 'admin' or 'user'
})

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12)
  }
  next()
})

const User = mongoose.model("User", userSchema)

module.exports = User
