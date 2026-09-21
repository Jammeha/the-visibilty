'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 22, mass: 0.5 })
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 22, mass: 0.5 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const grow = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform += ' scale(2.2)'
        cursorRef.current.style.opacity = '0.6'
      }
    }
    const shrink = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] top-0 left-0 size-10 rounded-full border border-[#1687ff]/60 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] top-0 left-0 size-1.5 rounded-full bg-[#1687ff]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
