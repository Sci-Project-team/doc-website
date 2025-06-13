'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const directionVariants = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = 'up',
  className 
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  className 
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className 
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  )
}

interface FloatingProps {
  children: ReactNode
  duration?: number
  delay?: number
  className?: string
}

export function Floating({ 
  children, 
  duration = 3, 
  delay = 0,
  className 
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface PulseGlowProps {
  children: ReactNode
  color?: string
  className?: string
}

export function PulseGlow({ 
  children, 
  color = 'primary-500',
  className 
}: PulseGlowProps) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          `0 0 5px rgba(14, 165, 233, 0.5)`,
          `0 0 20px rgba(14, 165, 233, 0.8)`,
          `0 0 5px rgba(14, 165, 233, 0.5)`
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}