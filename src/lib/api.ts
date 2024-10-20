import { Post } from '@/types/post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export async function getPosts(page: number, limit: number): Promise<{ posts: Post[], totalCount: number }> {
  const response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`)
  const posts = await response.json()
  const totalCount = parseInt(response.headers.get('x-total-count') || '0', 10)
  return { posts, totalCount }
}

export async function createPost(post: Omit<Post, 'id'>): Promise<Post> {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return await response.json()
}

export async function updatePost(post: Post): Promise<Post> {
  const response = await fetch(`${API_URL}/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return await response.json()
}

export async function deletePost(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
}