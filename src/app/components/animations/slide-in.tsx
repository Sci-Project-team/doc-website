'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  distance?: number
  className?: string
}

const directionVariants = {
  left: (distance: number) => ({
    hidden: { opacity: 0, x: -distance },
    visible: { opacity: 1, x: 0 }
  }),
  right: (distance: number) => ({
    hidden: { opacity: 0, x: distance },
    visible: { opacity: 1, x: 0 }
  }),
  up: (distance: number) => ({
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 }
  }),
  down: (distance: number) => ({
    hidden: { opacity: 0, y: -distance },
    visible: { opacity: 1, y: 0 }
  })
}

export function SlideIn({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = 'left',
  distance = 50,
  className 
}: SlideInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={directionVariants[direction](distance)}
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

interface SlideInStaggerProps {
  children: ReactNode[]
  direction?: 'left' | 'right' | 'up' | 'down'
  staggerDelay?: number
  distance?: number
  className?: string
}

export function SlideInStagger({ 
  children, 
  direction = 'left',
  staggerDelay = 0.1,
  distance = 50,
  className 
}: SlideInStaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={directionVariants[direction](distance)}
          transition={{
            duration: 0.6,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function Reveal({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className 
}: RevealProps) {
  return (
    <motion.div
      className={`overflow-hidden ${className || ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {}
      }}
    >
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: { y: "0%" }
        }}
        transition={{
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

interface DrawLineProps {
  delay?: number
  duration?: number
  className?: string
  direction?: 'horizontal' | 'vertical'
}

export function DrawLine({ 
  delay = 0, 
  duration = 1,
  className,
  direction = 'horizontal'
}: DrawLineProps) {
  return (
    <motion.div
      className={`bg-gradient-to-r from-primary-500 to-secondary-500 ${
        direction === 'horizontal' ? 'h-0.5 w-full' : 'w-0.5 h-full'
      } ${className || ''}`}
      initial={{ 
        scaleX: direction === 'horizontal' ? 0 : 1,
        scaleY: direction === 'vertical' ? 0 : 1 
      }}
      whileInView={{ 
        scaleX: 1,
        scaleY: 1 
      }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      style={{
        originX: direction === 'horizontal' ? 0 : 0.5,
        originY: direction === 'vertical' ? 0 : 0.5
      }}
    />
  )
}