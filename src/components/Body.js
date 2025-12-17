import React from 'react';
import { Aboutme } from './Aboutme.js';
import { motion } from 'framer-motion';

import Carousel from './Carousel.js';
import Services from './Services.js';
import Contact from './Contact.js';

import "../styles/Body.css"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Body = () => {

  return (
    <div className="body-container">
      <motion.section
        className="container-aboutme"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="aboutme-title">Sobre</h1>
        <div>
          {Aboutme[0].text.split('\n\n').map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>
        <button className='bt-aboutme'>Saiba mais</button>
      </motion.section>

      <motion.section
        id="projects"
        className="container-portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="portfolio-title">Meus projetos</h1>
        <Carousel/>
      </motion.section>

      <motion.section
        id="services"
        className="container-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="services-title">Serviços</h1>
        <Services />
      </motion.section>
      <motion.section
        id="contact"
        className="container-contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="contact-title">Fale comigo</h1>
        <Contact />
      </motion.section>
    </div>
  );
};

export default Body;
