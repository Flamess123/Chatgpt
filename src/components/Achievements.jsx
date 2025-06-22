import React from 'react'
import { motion } from 'framer-motion'
import './Achievements.css'

const achievements = [
  {
    title: 'NPTEL Certification in Embedded Systems',
    description: 'Completed advanced coursework with a top grade.'
  },
  {
    title: 'National Hackathon Winner',
    description: 'Led the team to develop an award-winning IoT prototype.'
  },
  {
    title: 'Best Paper Presentation',
    description: 'Recognized for innovative research at a leading conference.'
  }
]

function AchievementItem({ ach }) {
  return (
    <motion.div
      className="achievement-item"
      whileHover={{ scale: 1.05 }}
    >
      <h3>{ach.title}</h3>
      <p>{ach.description}</p>
    </motion.div>
  )
}

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        <div className="achievements-list">
          {achievements.map((a) => (
            <AchievementItem key={a.title} ach={a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
