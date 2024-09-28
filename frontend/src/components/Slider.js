import React, { useState } from 'react';

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImageIndex = (currentIndex + 1) % images.length;

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Mostrar solo la imagen actual */}
        <div
          className="slider-item"
          style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        >
          <p>{images[currentIndex].text}</p>
        </div>
      </div>

      {/* Controles de navegación */}
      <nav>
        <button onClick={prevSlide}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button onClick={nextSlide}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </nav>

      {/* Vista previa de la próxima imagen */}
      <div className="next-image-preview">
        <h4>Próxima imagen:</h4>
        <img
          src={images[nextImageIndex].url}
          alt="Próxima imagen"
          style={{ width: '100px', height: '60px', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default Slider;

