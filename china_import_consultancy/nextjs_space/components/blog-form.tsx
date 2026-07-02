'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ImageUpload } from '@/components/image-upload'
import { Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { categories } from '@/lib/blog-data'

interface BlogFormProps {
  initialData?: any
  isEdit?: boolean
}

export function BlogForm({ initialData, isEdit }: BlogFormProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    slug: initialData?.slug || '',
    categoryKey: initialData?.categoryKey || 'cin-fuarlari',
    date: initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    image: initialData?.image || '',
    titleTr: initialData?.titleTr || '',
    titleEn: initialData?.titleEn || '',
    excerptTr: initialData?.excerptTr || '',
    excerptEn: initialData?.excerptEn || '',
    contentTr: initialData?.contentTr || '',
    contentEn: initialData?.contentEn || '',
    published: initialData?.published ?? true,
  })

  const updateField = (key: string, value: any) => setForm((f) => ({ ...f, [key]: value }))

  // Auto-generate slug from Turkish title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i')
      .replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const url = isEdit ? `/api/admin/blog/${initialData.id}` : '/api/admin/blog'
      const method = isEdit ? 'PUT' : 'POST'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Kaydetme başarısız')
      }
      router.replace('/admin/blog')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const filteredCategories = categories.filter((c) => c.key !== 'all')

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/blog">
          <Button type="button" variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="w-4 h-4" /> Geri
          </Button>
        </Link>
        <h1 className="font-display text-xl font-bold">
          {isEdit ? 'Yazıyı Düzenle' : 'Yeni Blog Yazısı'}
        </h1>
      </div>

      {/* Image */}
      <ImageUpload
        value={form.image}
        onChange={(url) => updateField('image', url)}
        label="Öne Çıkan Görsel"
      />

      {/* Basic Info */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium block mb-1.5">Kategori</label>
          <select
            value={form.categoryKey}
            onChange={(e) => updateField('categoryKey', e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm bg-background"
          >
            {filteredCategories.map((cat) => (
              <option key={cat.key} value={cat.key}>{cat.tr}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1.5">Tarih</label>
          <Input type="date" value={form.date} onChange={(e) => updateField('date', e.target.value)} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium block mb-1.5">Slug (URL)</label>
        <Input
          value={form.slug}
          onChange={(e) => updateField('slug', e.target.value)}
          placeholder="ornek-blog-yazisi"
        />
        {form.titleTr && !form.slug && (
          <button
            type="button"
            onClick={() => updateField('slug', generateSlug(form.titleTr))}
            className="text-xs text-primary mt-1 hover:underline"
          >
            Başlıktan otomatik oluştur
          </button>
        )}
      </div>

      {/* Turkish Content */}
      <div className="bg-blue-50 rounded-xl p-4 space-y-3">
        <h3 className="font-semibold text-sm text-blue-700">🇹🇷 Türkçe İçerik</h3>
        <div>
          <label className="text-sm font-medium block mb-1">Başlık (TR)</label>
          <Input
            value={form.titleTr}
            onChange={(e) => updateField('titleTr', e.target.value)}
            placeholder="Türkçe başlık..."
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Özet (TR)</label>
          <textarea
            value={form.excerptTr}
            onChange={(e) => updateField('excerptTr', e.target.value)}
            placeholder="Kısa özet..."
            rows={2}
            className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-y"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">İçerik (TR)</label>
          <textarea
            value={form.contentTr}
            onChange={(e) => updateField('contentTr', e.target.value)}
            placeholder="Blog içeriği... (**kalın** ve - liste desteklenir)"
            rows={10}
            className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-y font-mono"
            required
          />
        </div>
      </div>

      {/* English Content */}
      <div className="bg-teal-50 rounded-xl p-4 space-y-3">
        <h3 className="font-semibold text-sm text-teal-700">🇬🇧 English Content</h3>
        <div>
          <label className="text-sm font-medium block mb-1">Title (EN)</label>
          <Input
            value={form.titleEn}
            onChange={(e) => updateField('titleEn', e.target.value)}
            placeholder="English title..."
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Excerpt (EN)</label>
          <textarea
            value={form.excerptEn}
            onChange={(e) => updateField('excerptEn', e.target.value)}
            placeholder="Short excerpt..."
            rows={2}
            className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-y"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Content (EN)</label>
          <textarea
            value={form.contentEn}
            onChange={(e) => updateField('contentEn', e.target.value)}
            placeholder="Blog content... (**bold** and - list supported)"
            rows={10}
            className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-y font-mono"
            required
          />
        </div>
      </div>

      {/* Publish Toggle */}
      <div className="flex items-center gap-3">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => updateField('published', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
        <span className="text-sm font-medium">{form.published ? 'Yayında' : 'Taslak'}</span>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" disabled={saving} className="bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 gap-2">
          <Save className="w-4 h-4" />
          {saving ? 'Kaydediliyor...' : (isEdit ? 'Güncelle' : 'Yayınla')}
        </Button>
        <Link href="/admin/blog">
          <Button type="button" variant="outline">İptal</Button>
        </Link>
      </div>
    </form>
  )
}
