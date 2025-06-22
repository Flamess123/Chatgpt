import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm an embedded systems engineer with a passion for solving real-world
          problems through connected hardware. My experience ranges from PCB
          design and firmware development to full-stack IoT solutions. I enjoy
          collaborating on innovative projects that push the boundaries of what
          technology can achieve.
        </motion.p>
      </div>
    </section>
  )
}

export default About
