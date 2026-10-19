import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export function PageContainer({ children, className = '', noPadding = false }: PageContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:text-indigo-200">
      <Navbar />
      <motion.main
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`flex-1 w-full max-w-5xl mx-auto ${noPadding ? '' : 'px-4 sm:px-6 lg:px-8 py-8 sm:py-12'} ${className}`}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
