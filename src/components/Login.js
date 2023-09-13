const Login = () => {
  const loginUserWithGoogle = () => {
    // Redirect the user to your Google OAuth URL
    window.location.href = "http://localhost:3001/auth/google"
  }

  return <button onClick={loginUserWithGoogle}>Login with Google</button>
}

export default Login
