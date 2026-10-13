'use client'

import { useLocale } from '@/lib/locale-context'
import { Phone, Mail, MessageSquare, BookOpen, Facebook, Instagram, Youtube } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Footer() {
  const { locale, t } = useLocale()
  const [year, setYear] = useState(2026)
  useEffect(() => { setYear(new Date().getFullYear()) }, [])

  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="Çin'den Al Sat Logo" className="h-12 w-auto object-contain" />
              <div>
                <p className="font-display font-bold">Çin&apos;den Al Sat</p>
                <p className="text-xs text-muted-foreground">{t?.footer?.description ?? ''}</p>
              </div>
            </a>
          </div>

          {/* Quick Links + Social */}
          <div className="flex items-center gap-3">
            <Link href="/faydali-bilgiler" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label={locale === 'tr' ? 'Faydalı Bilgiler' : 'Useful Info'}>
              <BookOpen className="w-4 h-4" />
            </Link>
            <a href="tel:+905053697425" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Phone">
              <Phone className="w-4 h-4" />
            </a>
            <a href="https://wa.me/905053697425" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="WhatsApp">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="mailto:china.import.consultancy@gmail.com" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
            <span className="w-px h-5 bg-border" />
            <a href="https://www.facebook.com/678806195312322" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors text-blue-600" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/cindenal_ithalat/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors text-pink-600" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/channel/UCiXofJ92GDpJf06qM5gEI6g" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors text-red-600" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://x.com/CindenAlSat" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="X">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {year} Çin&apos;den Al Sat İthalat Danışmanlığı. {t?.footer?.rights ?? ''}
        </div>
      </div>
    </footer>
  )
}
