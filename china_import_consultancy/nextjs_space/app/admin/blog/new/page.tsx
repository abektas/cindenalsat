'use client'

import { AdminLayout } from '@/components/admin-layout'
import { BlogForm } from '@/components/blog-form'

export default function NewBlogPage() {
  return (
    <AdminLayout>
      <BlogForm />
    </AdminLayout>
  )
}
