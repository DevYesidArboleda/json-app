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
import { updatePost } from '@/lib/api'
import { Post } from '@/types/post'

interface UpdatePostFormProps {
  post: Post
  onSuccess: (updatedPost: Post) => void
  onCancel: () => void
}

export default function UpdatePostForm({ post, onSuccess, onCancel }: UpdatePostFormProps) {
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const updatedPost = await updatePost({ ...post, title, body })
      onSuccess(updatedPost)
    } catch (error) {
      console.error('Error updating post:', error)
      toast({
        title: 'Error',
        description: t('toasts.updateError'),
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog open={true} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('updatePost.title')}</DialogTitle>
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
            <Button type="submit">{t('updatePost.update')}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}