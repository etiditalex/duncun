'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface ImpactCounterProps {
  value: number
  label: string
  suffix?: string
  duration?: number
  delay?: number
}

const ImpactCounter = ({ 
  value, 
  label, 
  suffix = '', 
  duration = 2,
  delay = 0 
}: ImpactCounterProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const increment = value / (duration * 60) // 60fps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-gray-700 font-medium">{label}</div>
    </motion.div>
  )
}

export default ImpactCounter

