import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import './Hero.css'

function Chip() {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.getElapsedTime() / 4
    mesh.current.rotation.y = state.clock.getElapsedTime() / 2
  })

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[2, 0.5, 2]} />
      <meshStandardMaterial color={hovered ? '#FFB800' : '#0A84FF'} />
    </mesh>
  )
}

const roles = [
  'Embedded Systems Engineer',
  'IoT Innovator',
  'Award-Winning Technologist'
]

function TypingText() {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')

  React.useEffect(() => {
    const fullText = roles[index]
    if (display.length < fullText.length) {
      const timeout = setTimeout(
        () => setDisplay(fullText.slice(0, display.length + 1)),
        150
      )
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplay('')
        setIndex((index + 1) % roles.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [display, index])

  return <span className="typing">{display}</span>
}

function Hero() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Seshadri S
          </motion.h1>
          <motion.h2
            className="tagline"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Designing the Future of Connected Hardware
          </motion.h2>
          <motion.div
            className="roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <TypingText />
          </motion.div>
        </div>
        <div className="hero-canvas">
          <Canvas style={{ height: 300 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Chip />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </header>
  )
}

export default Hero
