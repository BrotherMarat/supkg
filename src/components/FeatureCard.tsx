import type { LucideIcon } from 'lucide-react'
import { Card } from './Card'
import { ScrollReveal } from './ScrollReveal'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description?: string
  index?: number
}

export function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <Card hover className="h-full">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/8 text-accent">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-secondary">{description}</p>
        )}
      </Card>
    </ScrollReveal>
  )
}
