const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, // 'admin' or 'user'
})
