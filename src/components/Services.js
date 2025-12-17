import React from 'react'
import { motion } from 'framer-motion'
import { PortifolioServices } from '../components/Informations';

import '../styles/Services.css'

const Services = () => {
    return (
      <div className="services-grid">
        {PortifolioServices.map(service => (
          <motion.div
            key={service.id}
            className="service-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            {service.itens && (
              <ul>
                {service.itens.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    )
}

export default Services