'use client'

import { AdminLayout } from '@/components/admin-layout'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Pencil, Trash2, Loader2, Star } from 'lucide-react'

type Testimonial = {
  id: string; name: string; company: string; role: string; avatar: string;
  textTr: string; textEn: string; rating: number; sortOrder: number; published: boolean;
}

const empty: Omit<Testimonial, 'id'> = {
  name: '', company: '', role: '', avatar: '', textTr: '', textEn: '', rating: 5, sortOrder: 0, published: true,
}

export default function AdminTestimonials() {
  const [items, setItems] = useState<Testimonial[]>([])
  const [editing, setEditing] = useState<Testimonial | null>(null)
  const [form, setForm] = useState<Omit<Testimonial, 'id'>>(empty)
  const [adding, setAdding] = useState(false)
  const [saving, setSaving] = useState(false)

  const load = () => fetch('/api/admin/testimonials').then(r => r.json()).then(setItems).catch(() => {})
  useEffect(() => { load() }, [])

  const save = async () => {
    setSaving(true)
    try {
      if (editing) {
        await fetch(`/api/admin/testimonials/${editing.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      } else {
        await fetch('/api/admin/testimonials', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      }
      setEditing(null); setAdding(false); setForm(empty); load()
    } finally { setSaving(false) }
  }

  const del = async (id: string) => {
    if (!confirm('Bu yorumu silmek istediğinize emin misiniz?')) return
    await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' })
    load()
  }

  const startEdit = (t: Testimonial) => {
    setEditing(t)
    setForm({ name: t.name, company: t.company, role: t.role, avatar: t.avatar, textTr: t.textTr, textEn: t.textEn, rating: t.rating, sortOrder: t.sortOrder, published: t.published })
    setAdding(true)
  }

  const inputCls = 'w-full px-3 py-2 rounded-lg border text-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400'
  const labelCls = 'block text-xs font-medium text-gray-600 mb-1'

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-2xl font-bold">Müşteri Yorumları</h1>
          <Button onClick={() => { setAdding(true); setEditing(null); setForm(empty) }} className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white">
            <Plus className="w-4 h-4 mr-2" /> Yeni Yorum
          </Button>
        </div>

        {adding && (
          <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
            <h2 className="font-display font-bold text-lg mb-4">{editing ? 'Yorum Düzenle' : 'Yeni Yorum Ekle'}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelCls}>İsim *</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputCls} /></div>
              <div><label className={labelCls}>Firma</label><input value={form.company} onChange={e => setForm({...form, company: e.target.value})} className={inputCls} /></div>
              <div><label className={labelCls}>Ünvan</label><input value={form.role} onChange={e => setForm({...form, role: e.target.value})} className={inputCls} placeholder="Genel Müdür" /></div>
              <div><label className={labelCls}>Avatar URL</label><input value={form.avatar} onChange={e => setForm({...form, avatar: e.target.value})} className={inputCls} placeholder="https://www.shutterstock.com/image-vector/avatar-icon-frame-user-profile-260nw-2653472433.jpg" /></div>
              <div className="sm:col-span-2"><label className={labelCls}>Yorum (TR) *</label><textarea value={form.textTr} onChange={e => setForm({...form, textTr: e.target.value})} rows={3} className={inputCls} /></div>
              <div className="sm:col-span-2"><label className={labelCls}>Yorum (EN)</label><textarea value={form.textEn} onChange={e => setForm({...form, textEn: e.target.value})} rows={3} className={inputCls} /></div>
              <div><label className={labelCls}>Puan (1-5)</label><input type="number" min={1} max={5} value={form.rating} onChange={e => setForm({...form, rating: Number(e.target.value)})} className={inputCls} /></div>
              <div><label className={labelCls}>Sıralama</label><input type="number" value={form.sortOrder} onChange={e => setForm({...form, sortOrder: Number(e.target.value)})} className={inputCls} /></div>
              <div className="flex items-center gap-2"><input type="checkbox" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})} /><span className="text-sm">Yayında</span></div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={save} disabled={saving || !form.name || !form.textTr} className="bg-blue-500 text-white">
                {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null} {editing ? 'Güncelle' : 'Ekle'}
              </Button>
              <Button variant="outline" onClick={() => { setAdding(false); setEditing(null); setForm(empty) }}>İptal</Button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {items.map(t => (
            <div key={t.id} className="bg-white rounded-xl border shadow-sm p-5 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {t.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{t.name}</span>
                  {t.company && <span className="text-xs text-gray-400">• {t.company}</span>}
                  {!t.published && <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">Taslak</span>}
                </div>
                <div className="flex gap-0.5 my-1">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-sm text-gray-600 line-clamp-2">{t.textTr}</p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <Button size="sm" variant="outline" onClick={() => startEdit(t)}><Pencil className="w-3 h-3" /></Button>
                <Button size="sm" variant="outline" className="text-red-500" onClick={() => del(t.id)}><Trash2 className="w-3 h-3" /></Button>
              </div>
            </div>
          ))}
        </div>
        {items.length === 0 && (
          <div className="text-center py-12 text-gray-400"><Star className="w-12 h-12 mx-auto mb-3" /><p>Henüz müşteri yorumu eklenmemiş</p></div>
        )}
      </div>
    </AdminLayout>
  )
}
