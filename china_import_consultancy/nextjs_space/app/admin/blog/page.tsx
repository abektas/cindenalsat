'use client'

import { AdminLayout } from '@/components/admin-layout'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/blog')
      if (res.ok) setPosts(await res.json())
    } catch (e) { console.error(e) }
    setLoading(false)
  }

  useEffect(() => { fetchPosts() }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return
    try {
      await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
      fetchPosts()
    } catch (e) { console.error(e) }
  }

  return (
    <AdminLayout>
      <div className="max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-2xl font-bold">Blog Yazıları</h1>
          <Link href="/admin/blog/new">
            <Button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 gap-2">
              <Plus className="w-4 h-4" />
              Yeni Yazı
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Yükleniyor...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border">
            <p className="text-muted-foreground">Henüz blog yazısı yok.</p>
            <Link href="/admin/blog/new">
              <Button className="mt-4" variant="outline">Yeni Yazı Ekle</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post: any) => (
              <div key={post.id} className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-14 relative rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  {post.image && (
                    <Image src={post.image} alt={post.titleTr} fill className="object-cover" sizes="80px" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm truncate">{post.titleTr}</h3>
                    {!post.published && (
                      <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">Taslak</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {post.categoryKey} · {new Date(post.date).toLocaleDateString('tr-TR')}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Link href={`/admin/blog/${post.id}`}>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-600" onClick={() => handleDelete(post.id)}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
