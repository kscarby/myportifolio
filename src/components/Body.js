import React from 'react';
import { Aboutme } from './Aboutme.js';
import { motion } from 'framer-motion';

import Carousel from './Carousel.js';

import "../styles/Body.css"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
        <h1 className="aboutme-title">Sobre (About Me)</h1>
        <div>
          {Aboutme[0].text.split('\n\n').map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>
        <button className='bt-aboutme'>Saiba mais</button>
      </motion.section>

      <motion.section
        className="container-portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="portfolio-title">Portfólio (Work/Portfolio)</h1>
        <Carousel/>
      </motion.section>

      <motion.section
        className="container-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="services-title">Serviços (Services)</h1>
      </motion.section>

      <motion.section
        className="container-feedbacks"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="feedbacks-title">Feedbacks</h1>
      </motion.section>

      <motion.section
        className="container-contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="contact-title">Contato (Contact)</h1>
      </motion.section>
    </div>
  );
};

export default Body;
