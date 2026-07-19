import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
