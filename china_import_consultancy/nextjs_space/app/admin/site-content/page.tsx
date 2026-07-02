'use client'

import { AdminLayout } from '@/components/admin-layout'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ImageUpload } from '@/components/image-upload'
import { Save, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const imageKeys = [
  { key: 'hero_image', label: 'Hero Arka Plan Görseli', desc: 'Ana sayfa hero bölümü arka plan görseli' },
  { key: 'team_image', label: 'Ekip Görseli', desc: 'Hakkımızda bölümündeki ekip fotoğrafı' },
  { key: 'fair_image', label: 'Fuar Görseli', desc: 'Çin fuarı / ticaret görseli' },
  { key: 'warehouse_image', label: 'Depo Görseli', desc: 'Depo / lojistik görseli' },
  { key: 'handshake_image', label: 'El Sıkışma Görseli', desc: 'İş birliği / el sıkışma görseli' },
]

export default function AdminSiteContentPage() {
  const [content, setContent] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/admin/site-content')
      .then((r) => r.json())
      .then(setContent)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch('/api/admin/site-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      })
      if (res.ok) {
        toast.success('Site içerikleri kaydedildi!')
      } else {
        toast.error('Kaydetme başarısız.')
      }
    } catch (e) {
      toast.error('Bir hata oluştu.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12 text-muted-foreground">Yükleniyor...</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-2xl font-bold">Site İçerikleri</h1>
            <p className="text-sm text-muted-foreground mt-1">Sitedeki görselleri değiştirin</p>
          </div>
          <Button onClick={handleSave} disabled={saving} className="bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 gap-2">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Kaydediliyor...' : 'Tümünü Kaydet'}
          </Button>
        </div>

        <div className="space-y-6">
          {imageKeys.map(({ key, label, desc }) => (
            <div key={key} className="bg-white rounded-xl border shadow-sm p-5">
              <h3 className="font-semibold text-sm mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground mb-3">{desc}</p>
              <ImageUpload
                value={content[key] || ''}
                onChange={(url) => setContent((prev) => ({ ...prev, [key]: url }))}
              />
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
