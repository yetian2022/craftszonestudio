import React, { useEffect, useState } from "react"

const ImageSlideshow = () => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Fetch images from the backend
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => setImages(data))

    // Change image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div>
      <h2>Check our happy moments</h2>
      <div>
        {images.length > 0 && (
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        )}
      </div>
    </div>
  )
}

export default ImageSlideshow
