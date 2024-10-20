'use client'

import { useLanguage } from '../../contexts/LanguageContext'
import { Button } from '@/components/ui/button'

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage()

  const handleSwitch = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <Button onClick={handleSwitch} variant="outline" className={className}>
      {t('languageSwitch').replace('{lang}', language === 'en' ? 'Español' : 'English')}
    </Button>
  )
}