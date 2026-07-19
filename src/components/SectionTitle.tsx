import { ScrollReveal } from './ScrollReveal'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <ScrollReveal className={`mb-12 max-w-3xl lg:mb-16 ${alignClass}`}>
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/75' : 'text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
