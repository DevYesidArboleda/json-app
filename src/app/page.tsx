"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
      <LanguageSwitcher className="absolute top-4 right-4" />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{t('home.title')}</CardTitle>
          <CardDescription>{t('home.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {t('home.projectDescription')}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild>
            <Link href="/posts">{t('home.viewPosts')}</Link>
          </Button>
          {/* <Button asChild variant="outline">
            <Link href="/create">{t('home.createPost')}</Link>
          </Button> */}
        </CardFooter>
      </Card>
    </main>
  );
}
