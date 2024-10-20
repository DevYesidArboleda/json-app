'use client'

import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { createPost } from '@/lib/api'
import { Post } from '@/types/post'

interface CreatePostFormProps {
  onSuccess: (newPost: Post) => void
  onCancel: () => void
}

export default function CreatePostForm({ onSuccess, onCancel }: CreatePostFormProps) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newPost = await createPost({ title, body, userId: 1 })
      onSuccess(newPost)
    } catch (error) {
      console.error('Error creating post:', error)
      toast({
        title: 'Error',
        description: t('toasts.createError'),
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog open={true} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('createPost.title')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t('createPost.postTitle')}
            required
          />
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={t('createPost.postBody')}
            required
          />
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onCancel}>
              {t('updatePost.cancel')}
            </Button>
            <Button type="submit">{t('createPost.create')}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}