const bcrypt = require("bcryptjs")

async function checkPassword() {
  const plainPassword = "password123" // Replace with the plaintext password you used during registration
  const hashedPassword =
    "$2a$12$woU9yVKNbF1VIFGjnsXYY.D4.g.N9KFV8AdKmcgQhFOkzGff0WgS." // Replace with the hashed password stored in the database

  const isMatch = await bcrypt.compare(plainPassword, hashedPassword)
  console.log("Is Match:", isMatch)
}

checkPassword()
