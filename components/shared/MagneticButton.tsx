'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface Props {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function MagneticButton({ children, className = '', strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    })
  }, [strength])

  const onMouseLeave = useCallback(() => setPos({ x: 0, y: 0 }), [])

  return (
    <motion.div
      ref={ref}
      className={cn('inline-block', className)}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.6 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}
