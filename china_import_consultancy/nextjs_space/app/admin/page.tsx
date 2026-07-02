'use client'

import { AdminLayout } from '@/components/admin-layout'
import { useEffect, useState } from 'react'
import { FileText, Briefcase, MessageSquare, Eye, ShoppingBag, Star } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ blog: 0, services: 0, contacts: 0, products: 0, testimonials: 0 })

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/blog').then((r) => r.json()).then((d) => d.length || 0).catch(() => 0),
      fetch('/api/admin/services').then((r) => r.json()).then((d) => d.length || 0).catch(() => 0),
      fetch('/api/admin/products').then((r) => r.json()).then((d) => d.length || 0).catch(() => 0),
      fetch('/api/admin/testimonials').then((r) => r.json()).then((d) => d.length || 0).catch(() => 0),
    ]).then(([blog, services, products, testimonials]) => setStats({ blog, services, contacts: 0, products, testimonials }))
  }, [])

  const cards = [
    { label: 'Blog Yazıları', count: stats.blog, icon: FileText, href: '/admin/blog', color: 'from-blue-500 to-blue-400' },
    { label: 'Hizmetler', count: stats.services, icon: Briefcase, href: '/admin/services', color: 'from-teal-500 to-teal-400' },
    { label: 'Ürünler', count: stats.products, icon: ShoppingBag, href: '/admin/products', color: 'from-orange-500 to-orange-400' },
    { label: 'Müşteri Yorumları', count: stats.testimonials, icon: Star, href: '/admin/testimonials', color: 'from-yellow-500 to-yellow-400' },
    { label: 'Site İçerikleri', count: null, icon: Eye, href: '/admin/site-content', color: 'from-pink-500 to-pink-400' },
  ]

  return (
    <AdminLayout>
      <div className="max-w-5xl">
        <h1 className="font-display text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="block">
              <div className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-3`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <p className="text-sm text-muted-foreground">{card.label}</p>
                {card.count !== null && (
                  <p className="text-2xl font-bold mt-1">{card.count}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="font-display font-bold text-lg mb-3">Hoş Geldiniz!</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Admin panelinden sitenizin tüm içeriklerini yönetebilirsiniz:
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-blue-500" /> <strong>Blog Yazıları:</strong> Yeni yazı ekleyin, mevcut yazıları düzenleyin veya silin</li>
            <li className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-teal-500" /> <strong>Hizmetler:</strong> Hizmet kartlarını güncelleyin, sıralayın</li>
            <li className="flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-orange-500" /> <strong>Ürünler:</strong> Viral Ürünler, Önceki Projeler ve Alibaba ürünlerini yönetin</li>
            <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> <strong>Müşteri Yorumları:</strong> Ana sayfadaki müşteri referanslarını düzenleyin</li>
            <li className="flex items-center gap-2"><Eye className="w-4 h-4 text-pink-500" /> <strong>Site İçerikleri:</strong> Hero, hakkımızda ve diğer bölüm görsellerini değiştirin</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  )
}
