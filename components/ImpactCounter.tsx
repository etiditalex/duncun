'use client'

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
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
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
  }, [isVisible, value, duration])

  return (
    <div
      ref={ref}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-gray-700 font-medium">{label}</div>
    </div>
  )
}

export default ImpactCounter

