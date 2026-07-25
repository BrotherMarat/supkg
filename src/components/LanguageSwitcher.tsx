import { LANGUAGES } from '../i18n'
import { useTranslation } from '../context/LanguageContext'

interface LanguageSwitcherProps {
  light?: boolean
}

export function LanguageSwitcher({ light = false }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useTranslation()

  return (
    <div
      className={`flex items-center gap-0.5 rounded-lg p-0.5 ${
        light ? 'border border-white/25' : 'border border-border/60'
      }`}
      role="group"
      aria-label={t.a11y.selectLanguage}
    >
      {LANGUAGES.map(({ code, label }) => {
        const isActive = language === code

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            className={`rounded-md px-1.5 py-1 text-[11px] font-semibold tracking-wide transition-colors sm:px-2 sm:text-xs ${
              isActive
                ? light
                  ? 'bg-white text-primary shadow-sm'
                  : 'bg-accent text-white'
                : light
                  ? 'text-white/70 hover:text-white'
                  : 'text-secondary hover:text-primary'
            }`}
            aria-pressed={isActive}
            aria-label={label}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
