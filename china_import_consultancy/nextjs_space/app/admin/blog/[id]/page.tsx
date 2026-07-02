'use client'

import { AdminLayout } from '@/components/admin-layout'
import { BlogForm } from '@/components/blog-form'
import { useEffect, useState } from 'react'

export default function EditBlogPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/admin/blog/${params.id}`)
      .then((r) => r.json())
      .then(setPost)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [params.id])

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12 text-muted-foreground">Yükleniyor...</div>
      </AdminLayout>
    )
  }

  if (!post) {
    return (
      <AdminLayout>
        <div className="text-center py-12 text-muted-foreground">Yazı bulunamadı.</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <BlogForm initialData={post} isEdit />
    </AdminLayout>
  )
}
