import { Card } from './Card'
import { ScrollReveal } from './ScrollReveal'

interface BrandCardProps {
  name: string
  description: string
  index?: number
}

export function BrandCard({ name, description, index = 0 }: BrandCardProps) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <Card hover className="h-full">
        <h3 className="text-xl font-semibold tracking-tight text-primary">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-secondary">{description}</p>
      </Card>
    </ScrollReveal>
  )
}
