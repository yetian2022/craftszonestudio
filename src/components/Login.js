import axios from "axios"

const Login = () => {
  const loginUser = async () => {
    const { data } = await axios.post("/api/login", {
      username: "admin",
      password: "password",
    })
    document.cookie = `token=${data.accessToken}`
  }

  return <button onClick={loginUser}>Login</button>
}

export default Login
