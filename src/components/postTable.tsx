'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useToast } from '@/hooks/use-toast'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import UpdatePostForm from './updatePostForm'
import CreatePostForm from './createPostForm'
import { getPosts, deletePost } from '@/lib/api'
import { Post } from '@/types/post'

export default function PostsTable() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { toast } = useToast()
  const { t } = useLanguage()

  const postsPerPage = 10

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  useEffect(() => {
    const filtered = posts.filter(post => 
      post.id.toString().includes(searchTerm) ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredPosts(filtered)
  }, [searchTerm, posts])

  const fetchPosts = async () => {
    try {
      const { posts, totalCount } = await getPosts(currentPage, postsPerPage)
      setPosts(posts)
      setTotalPages(Math.ceil(totalCount / postsPerPage))
    } catch (error) {
      console.error('Error fetching posts:', error)
      toast({
        title: 'Error',
        description: t('toasts.fetchError'),
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id)
      setPosts(posts.filter(post => post.id !== id))
      toast({
        title: 'Success',
        description: t('toasts.deleteSuccess'),
      })
    } catch (error) {
      console.error('Error deleting post:', error)
      toast({
        title: 'Error',
        description: t('toasts.deleteError'),
        variant: 'destructive',
      })
    }
  }

  const handleUpdate = (post: Post) => {
    setSelectedPost(post)
  }

  const handleUpdateSuccess = (updatedPost: Post) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post))
    setSelectedPost(null)
    toast({
      title: 'Success',
      description: t('toasts.updateSuccess'),
    })
  }

  const handleCreateSuccess = (newPost: Post) => {
    setPosts([newPost, ...posts])
    setIsCreateModalOpen(false)
    toast({
      title: 'Success',
      description: t('toasts.createSuccess'),
    })
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder={t('posts.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => setIsCreateModalOpen(true)}>{t('createPost.create')}</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('posts.id')}</TableHead>
            <TableHead>{t('posts.postTitle')}</TableHead>
            <TableHead>{t('posts.actions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2" onClick={() => handleUpdate(post)}>
                  {t('posts.update')}
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(post.id)}>
                  {t('posts.delete')}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between mt-4">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          {t('posts.previous')}
        </Button>
        <span>{t('posts.page').replace('{currentPage}', currentPage.toString()).replace('{totalPages}', totalPages.toString())}</span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          {t('posts.next')}
        </Button>
      </div>
      {selectedPost && (
        <UpdatePostForm 
          post={selectedPost} 
          onSuccess={handleUpdateSuccess} 
          onCancel={() => setSelectedPost(null)} 
        />
      )}
      {isCreateModalOpen && (
        <CreatePostForm 
          onSuccess={handleCreateSuccess} 
          onCancel={() => setIsCreateModalOpen(false)} 
        />
      )}
    </div>
  )
}