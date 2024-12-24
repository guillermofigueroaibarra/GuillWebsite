import React, { useState } from "react";
import "./ImgGallery.css";

const ImgGallery = ({ images, text = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="img-gallery">
      <button className="arrow left-arrow" onClick={handlePrev}>
        &#9664; {/* Left arrow */}
      </button>
      <div className="image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index}`}
            className={`gallery-image ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}

        <p>{text}</p>
      </div>
      <button className="arrow right-arrow" onClick={handleNext}>
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ImgGallery;
