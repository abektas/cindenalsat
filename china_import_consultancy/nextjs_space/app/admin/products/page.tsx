'use client'

import { AdminLayout } from '@/components/admin-layout'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Pencil, Trash2, Loader2, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

const CATEGORIES = [
  { value: 'viral', label: 'Viral Ürünler' },
  { value: 'previous', label: 'Önceki Proje Ürünleri' },
  { value: 'alibaba', label: "Alibaba'dan Trend Ürünler" },
]

type Product = {
  id: string; category: string; titleTr: string; titleEn: string; descTr: string; descEn: string;
  image: string; priceTr: string; priceEn: string; link: string; sortOrder: number; published: boolean;
}

const empty: Omit<Product, 'id'> = {
  category: 'viral', titleTr: '', titleEn: '', descTr: '', descEn: '',
  image: '', priceTr: '', priceEn: '', link: '', sortOrder: 0, published: true,
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [editing, setEditing] = useState<Product | null>(null)
  const [form, setForm] = useState<Omit<Product, 'id'>>(empty)
  const [adding, setAdding] = useState(false)
  const [saving, setSaving] = useState(false)
  const [filter, setFilter] = useState('all')

  const load = () => fetch('/api/admin/products').then(r => r.json()).then(setProducts).catch(() => {})
  useEffect(() => { load() }, [])

  const save = async () => {
    setSaving(true)
    try {
      if (editing) {
        await fetch(`/api/admin/products/${editing.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      } else {
        await fetch('/api/admin/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      }
      setEditing(null); setAdding(false); setForm(empty); load()
    } finally { setSaving(false) }
  }

  const del = async (id: string) => {
    if (!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return
    await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
    load()
  }

  const startEdit = (p: Product) => {
    setEditing(p)
    setForm({ category: p.category, titleTr: p.titleTr, titleEn: p.titleEn, descTr: p.descTr, descEn: p.descEn, image: p.image, priceTr: p.priceTr, priceEn: p.priceEn, link: p.link, sortOrder: p.sortOrder, published: p.published })
    setAdding(true)
  }

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter)
  const inputCls = 'w-full px-3 py-2 rounded-lg border text-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400'
  const labelCls = 'block text-xs font-medium text-gray-600 mb-1'

  return (
    <AdminLayout>
      <div className="max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-2xl font-bold">Ürün Yönetimi</h1>
          <Button onClick={() => { setAdding(true); setEditing(null); setForm(empty) }} className="bg-gradient-to-r from-orange-500 to-orange-400 text-white">
            <Plus className="w-4 h-4 mr-2" /> Yeni Ürün
          </Button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <Button variant={filter === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setFilter('all')}>Tümü ({products.length})</Button>
          {CATEGORIES.map(c => (
            <Button key={c.value} variant={filter === c.value ? 'default' : 'outline'} size="sm" onClick={() => setFilter(c.value)}>
              {c.label} ({products.filter(p => p.category === c.value).length})
            </Button>
          ))}
        </div>

        {/* Form */}
        {adding && (
          <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
            <h2 className="font-display font-bold text-lg mb-4">{editing ? 'Ürün Düzenle' : 'Yeni Ürün Ekle'}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Kategori *</label>
                <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className={inputCls}>
                  {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Sıralama</label>
                <input type="number" value={form.sortOrder} onChange={e => setForm({...form, sortOrder: Number(e.target.value)})} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Başlık (TR) *</label>
                <input value={form.titleTr} onChange={e => setForm({...form, titleTr: e.target.value})} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Başlık (EN)</label>
                <input value={form.titleEn} onChange={e => setForm({...form, titleEn: e.target.value})} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Açıklama (TR)</label>
                <textarea value={form.descTr} onChange={e => setForm({...form, descTr: e.target.value})} rows={2} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Açıklama (EN)</label>
                <textarea value={form.descEn} onChange={e => setForm({...form, descEn: e.target.value})} rows={2} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Görsel URL *</label>
                <input value={form.image} onChange={e => setForm({...form, image: e.target.value})} className={inputCls} placeholder="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwqqgq3Z15oOn68K_ijoCKIUls5tCYEcvkZxbg_79HnZ82b9J-wdO-yV4gCGEGoTKOcXMtsnKBWuvmK5Eugpr26kElHvdC62_FpcIGN56Jy2n5ZAYKzt49EIee5joI7Uayco9egvqoAthp/s1600/makeup-levels-example.png" />
              </div>
              <div>
                <label className={labelCls}>Ürün Linki</label>
                <input value={form.link} onChange={e => setForm({...form, link: e.target.value})} className={inputCls} placeholder="https://lh4.googleusercontent.com/c2l3ujS-e1HFu8Jjbw75agLEi1lZNn_Vhfvp9mOzgPyp98CRr-V9b5p9zvnefyrwsZocvIpc2sN9K6lZLvCqbdhUap7SlEEAgoaF2hHKsc-Op8mM0_WWr46pEhYlmtbm7MYRaEgZ" />
              </div>
              <div>
                <label className={labelCls}>Fiyat (TR)</label>
                <input value={form.priceTr} onChange={e => setForm({...form, priceTr: e.target.value})} className={inputCls} placeholder="₺99 - ₺149" />
              </div>
              <div>
                <label className={labelCls}>Fiyat (EN)</label>
                <input value={form.priceEn} onChange={e => setForm({...form, priceEn: e.target.value})} className={inputCls} placeholder="$9 - $14" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})} />
                <span className="text-sm">Yayında</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={save} disabled={saving || !form.titleTr || !form.image} className="bg-blue-500 text-white">
                {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null} {editing ? 'Güncelle' : 'Ekle'}
              </Button>
              <Button variant="outline" onClick={() => { setAdding(false); setEditing(null); setForm(empty) }}>İptal</Button>
            </div>
          </div>
        )}

        {/* Product list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <div key={p.id} className="bg-white rounded-xl border shadow-sm overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-100">
                {p.image ? (
                  <Image src={p.image} alt={p.titleTr} fill className="object-cover" unoptimized />
                ) : (
                  <div className="flex items-center justify-center h-full"><ShoppingBag className="w-8 h-8 text-gray-300" /></div>
                )}
                <span className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full bg-black/60 text-white">
                  {CATEGORIES.find(c => c.value === p.category)?.label}
                </span>
                {!p.published && <span className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full bg-red-500 text-white">Taslak</span>}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1 line-clamp-2">{p.titleTr}</h3>
                {p.priceTr && <p className="text-xs text-blue-600 font-medium">{p.priceTr}</p>}
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" onClick={() => startEdit(p)}><Pencil className="w-3 h-3 mr-1" /> Düzenle</Button>
                  <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700" onClick={() => del(p.id)}><Trash2 className="w-3 h-3" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <ShoppingBag className="w-12 h-12 mx-auto mb-3" />
            <p>Henüz ürün eklenmemiş</p>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
