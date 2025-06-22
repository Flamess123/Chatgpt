import React from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Form submission handling goes here')
          }}
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="5" placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
