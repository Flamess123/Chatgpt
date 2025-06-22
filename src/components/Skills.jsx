import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const skills = [
  'C',
  'Embedded C',
  'IoT',
  'PCB Design (KiCad)',
  'Java',
  'Arduino IDE',
  'VLSI',
  'UI/UX'
]

function SkillCard({ skill }) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {skill}
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
