import React, { useState } from 'react';
import './Slider.css';

function Slider({ image1, image2, image3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cambia el número a 3
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Cambia el número a 3
  };

  return (
    <main>
      <ul className="slider" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>

        <li key={0} className="slider-item" style={{ backgroundImage: `url(${image1.url})` }}>
          <div className="content">
              <h2 className="title">Una donación puede salvar hasta tres vidas</h2>
              <button>Dona ahora!</button>
          </div>
        </li>
        
        <li key={1} className="slider-item" style={{ backgroundImage: `url(${image2.url})` }}>
          <div className="content">
              <h2 className="title">Donar sangre no solo ayuda a otros, también revitaliza tu salud</h2>
              <button>Dona ahora!</button>
          </div>
        </li>

        <li key={2} className="slider-item" style={{ backgroundImage: `url(${image3.url})` }}>
          <div className="content">
              <h2 className="title">Una donación puede ser el comienzo de muchas historias de vida</h2>
              <button>Dona ahora!</button>
          </div>
        </li>
      </ul>

      {/* Controles de navegación */}
      <nav className="nav">
        <button className="btn prev" onClick={prevSlide}>←
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <button className="btn next" onClick={nextSlide}>→
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </nav>
    </main>
  );
}

export default Slider;