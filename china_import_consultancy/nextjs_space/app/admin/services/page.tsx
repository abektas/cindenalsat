'use client'

import { AdminLayout } from '@/components/admin-layout'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ImageUpload } from '@/components/image-upload'
import { Save, Plus, Trash2, GripVertical, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

const iconOptions = ['Package', 'Search', 'Shield', 'Truck', 'ShoppingCart', 'Briefcase', 'Globe', 'Star', 'Zap', 'Award']

export default function AdminServicesPage() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [showNew, setShowNew] = useState(false)
  const [newService, setNewService] = useState({
    key: '', icon: 'Package', image: '', titleTr: '', titleEn: '', descTr: '', descEn: '', sortOrder: 0, published: true
  })

  const fetchServices = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/services')
      if (res.ok) setServices(await res.json())
    } catch (e) { console.error(e) }
    setLoading(false)
  }

  useEffect(() => { fetchServices() }, [])

  const handleUpdate = async (id: string, data: any) => {
    setSaving(true)
    try {
      await fetch(`/api/admin/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      fetchServices()
      setEditId(null)
    } catch (e) { console.error(e) }
    setSaving(false)
  }

  const handleCreate = async () => {
    if (!newService.key || !newService.titleTr) return
    setSaving(true)
    try {
      await fetch('/api/admin/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newService, sortOrder: services.length }),
      })
      setNewService({ key: '', icon: 'Package', image: '', titleTr: '', titleEn: '', descTr: '', descEn: '', sortOrder: 0, published: true })
      setShowNew(false)
      fetchServices()
    } catch (e) { console.error(e) }
    setSaving(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu hizmeti silmek istediğinize emin misiniz?')) return
    await fetch(`/api/admin/services/${id}`, { method: 'DELETE' })
    fetchServices()
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-2xl font-bold">Hizmetler</h1>
          <Button onClick={() => setShowNew(!showNew)} className="bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 gap-2">
            <Plus className="w-4 h-4" /> Yeni Hizmet
          </Button>
        </div>

        {/* New Service Form */}
        {showNew && (
          <div className="bg-white rounded-xl border shadow-sm p-5 mb-6 space-y-4">
            <h3 className="font-semibold text-sm">Yeni Hizmet Ekle</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="Anahtar (orn: logistics)" value={newService.key} onChange={(e) => setNewService({ ...newService, key: e.target.value })} />
              <select value={newService.icon} onChange={(e) => setNewService({ ...newService, icon: e.target.value })} className="border rounded-lg px-3 py-2 text-sm bg-background">
                {iconOptions.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <ImageUpload value={newService.image} onChange={(url) => setNewService({ ...newService, image: url })} label="Görsel" />
            <div className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="Başlık (TR)" value={newService.titleTr} onChange={(e) => setNewService({ ...newService, titleTr: e.target.value })} />
              <Input placeholder="Title (EN)" value={newService.titleEn} onChange={(e) => setNewService({ ...newService, titleEn: e.target.value })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <textarea placeholder="Açıklama (TR)" value={newService.descTr} onChange={(e) => setNewService({ ...newService, descTr: e.target.value })} rows={3} className="border rounded-lg px-3 py-2 text-sm bg-background resize-y" />
              <textarea placeholder="Description (EN)" value={newService.descEn} onChange={(e) => setNewService({ ...newService, descEn: e.target.value })} rows={3} className="border rounded-lg px-3 py-2 text-sm bg-background resize-y" />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCreate} disabled={saving} className="gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0">
                <Save className="w-4 h-4" /> {saving ? 'Kaydediliyor...' : 'Ekle'}
              </Button>
              <Button variant="outline" onClick={() => setShowNew(false)}>İptal</Button>
            </div>
          </div>
        )}

        {/* Services List */}
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Yükleniyor...</div>
        ) : (
          <div className="space-y-3">
            {services.map((service: any) => (
              <div key={service.id} className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <div className="flex items-center gap-4 p-4">
                  <div className="w-16 h-12 relative rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    {service.image && <Image src={service.image} alt={service.titleTr} fill className="object-cover" sizes="64px" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm">{service.titleTr}</h3>
                    <p className="text-xs text-muted-foreground truncate">{service.descTr}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={() => setEditId(editId === service.id ? null : service.id)} className="h-8 w-8 p-0">
                      {editId === service.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500" onClick={() => handleDelete(service.id)}>
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Edit Form */}
                {editId === service.id && (
                  <ServiceEditForm service={service} onSave={(data) => handleUpdate(service.id, data)} saving={saving} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

function ServiceEditForm({ service, onSave, saving }: { service: any; onSave: (data: any) => void; saving: boolean }) {
  const [form, setForm] = useState({ ...service })
  return (
    <div className="border-t p-5 bg-gray-50 space-y-4">
      <ImageUpload value={form.image} onChange={(url) => setForm({ ...form, image: url })} label="Görsel" />
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium block mb-1">İkon</label>
          <select value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm bg-background">
            {iconOptions.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium block mb-1">Sıra</label>
          <Input type="number" value={form.sortOrder} onChange={(e) => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium block mb-1">Başlık (TR)</label>
          <Input value={form.titleTr} onChange={(e) => setForm({ ...form, titleTr: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-medium block mb-1">Title (EN)</label>
          <Input value={form.titleEn} onChange={(e) => setForm({ ...form, titleEn: e.target.value })} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium block mb-1">Açıklama (TR)</label>
          <textarea value={form.descTr} onChange={(e) => setForm({ ...form, descTr: e.target.value })} rows={3} className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-y" />
        </div>
        <div>
          <label className="text-xs font-medium block mb-1">Description (EN)</label>
          <textarea value={form.descEn} onChange={(e) => setForm({ ...form, descEn: e.target.value })} rows={3} className="w-full border rounded-lg px-3 py-2 text-sm bg-background resize-y" />
        </div>
      </div>
      <Button onClick={() => onSave(form)} disabled={saving} className="gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0">
        <Save className="w-4 h-4" /> {saving ? 'Kaydediliyor...' : 'Kaydet'}
      </Button>
    </div>
  )
}
