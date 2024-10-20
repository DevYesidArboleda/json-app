'use client'

import CreatePostForm from '@/components/createPostForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useLanguage } from '../../../contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function CreatePostPage() {
  const { t } = useLanguage()

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t('createPost.title')}</h1>
        <div className="flex gap-2 flex-col md:flex-row">
          <Button asChild>
            <Link href="/">{t('createPost.backToHome')}</Link>
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
      <CreatePostForm />
    </main>
  )
}