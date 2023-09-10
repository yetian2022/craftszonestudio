import React from "react"
import axios from "axios"

const ImageUpload = () => {
  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("image", file)

    // Replace with your actual API URL
    await axios.post("http://localhost:3001/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }

  return (
    <div>
      <input type="file" onChange={uploadImage} />
    </div>
  )
}

export default ImageUpload
