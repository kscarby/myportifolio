import React from 'react'
import { motion } from 'framer-motion'

import '../styles/Contact.css'

const Contact = () => {

      const handleSubmit = (e) => {
    e.preventDefault();
    // futuramente: enviar para email / firebase / api
  };

  return (
    <section className="contact-container" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          Tem um projeto em mente ou precisa de ajuda com algo?
          Me conta sua ideia 💡
        </p>

        <form className='form-input' onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="seu@email.com" required />
          </div>
          <div className="input-group">
            <label>Mensagem</label>
            <textarea
              placeholder="Descreva seu projeto ou dúvida"
              rows="8"
              required
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact