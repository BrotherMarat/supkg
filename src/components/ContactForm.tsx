import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useTranslation } from '../context/LanguageContext'
import { Button } from './Button'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const inputClassName =
    'w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-text outline-none transition-colors placeholder:text-secondary/60 focus:border-accent focus:ring-2 focus:ring-accent/20'

  const { form } = t.contacts

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
          {form.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClassName}
          placeholder={form.namePlaceholder}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-primary">
            {form.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClassName}
            placeholder={form.phonePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
            {form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClassName}
            placeholder={form.emailPlaceholder}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClassName} resize-none`}
          placeholder={form.messagePlaceholder}
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        {t.common.send}
      </Button>
    </form>
  )
}
