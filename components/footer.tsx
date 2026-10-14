'use client'

import { useLocale } from '@/lib/locale-context'
import { Phone, Mail, MessageSquare, BookOpen, Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const { locale, t } = useLocale()

  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <img src="/cindenalsat-logo.jpg" alt="Çin'den Al Sat Logo" className="h-14 w-auto rounded-full ring-1 ring-border shadow-sm" />
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
            <a href="https://www.pinterest.com/chinaimportconsultancy" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition-colors text-red-700" aria-label="Pinterest">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.265-.402.159-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12C24 5.372 18.627 0 12 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
