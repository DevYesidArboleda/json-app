"use client"

import { useLanguage } from '../../contexts/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground py-4 mt-8 bottom-0">
      <div className="container mx-auto text-center">
        <p>{t('footer.createdBy')}</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} {t('footer.allRightsReserved')}</p>
      </div>
    </footer>
  )
}