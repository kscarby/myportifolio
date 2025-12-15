import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Carousel.css';
import { PortifolioProjects } from '../components/Informations';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import github from '../assets/github.png';
import tv from '../assets/tv.png';

const imageMap = {
  img1: img1,
  img2: img2,
  img3: img3,
};

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
        whileTap={{ cursor: 'grabbing' }}
      >
        {PortifolioProjects.map((project, index) => (
          <div className="carousel-slide-wrapper" key={project.id}>
              <div className="carousel-slide">
                <motion.img
                  src={imageMap[project.image]}
                  alt={`Imagem ${index + 1}`}
                  className="carousel-image"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="carousel-text-overlay">
                  <h1 className="title">{project.title}</h1>
                  <h3 className="subtitle">{project.subtitle}</h3>
                  <p className="description">{project.description}</p>
                  <p>Techs: {project.techs}</p>
                  <div className='carousel-bt'>
                    <img className='img-git' src={github}></img>
                    <img className='img-tv' src={tv}></img>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <button className="carousel-button right" onClick={scrollRight}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Carousel;
