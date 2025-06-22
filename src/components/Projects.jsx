import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    title: 'EV Battery Thermodynamic Optimization',
    description:
      'Developed a control system to regulate battery temperature, extending range and lifespan.',
    role: 'Firmware Architect'
  },
  {
    title: 'Intelligent Traffic Management & Accident Prevention',
    description:
      'Designed a sensor network and analytics platform to reduce congestion and improve road safety.',
    role: 'IoT Lead'
  }
]

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ translateY: -10 }}
    >
      <div className="project-visual">Image/3D Here</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="role">Role: {project.role}</p>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <ProjectCard key={proj.title} project={proj} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
