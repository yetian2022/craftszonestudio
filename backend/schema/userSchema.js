const userSchema = new mongoose.Schema({
  googleId: String,
  username: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
})

const User = mongoose.model("User", userSchema)
