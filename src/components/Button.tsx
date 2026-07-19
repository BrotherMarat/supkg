import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  to?: string
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent/90 shadow-sm shadow-accent/20',
  secondary:
    'bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/10',
  outline:
    'border border-border bg-white text-text hover:border-accent hover:text-accent',
  ghost: 'text-white hover:bg-white/10 border border-white/30',
}

export function Button({
  variant = 'primary',
  to,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
