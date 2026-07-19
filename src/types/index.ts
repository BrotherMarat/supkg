import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  path: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface Segment {
  icon: LucideIcon
  title: string
}

export interface Brand {
  name: string
  description: string
}

export interface WorkflowStep {
  step: number
  title: string
}

export interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export interface PageMeta {
  title: string
  description: string
}
