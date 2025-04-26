import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Carousel.css';

const images = [
  '../assets/img1.jpg',
  '../assets/img2.jpg',
  '../assets/img3.jpg',
  '../assets/img4.jpg',
];

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={scrollLeft}>
        <ChevronLeft size={32} />
      </button>

      <motion.div
        className="carousel-images"
        ref={carouselRef}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className="carousel-image"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>

      <button className="carousel-button right" onClick={scrollRight}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Carousel;
