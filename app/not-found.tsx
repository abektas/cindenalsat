import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı | Çin\'den Al Sat',
  description: 'Aradığınız sayfa bulunamadı. Çin\'den Al Sat ana sayfasına dönün veya faydalı bilgilerimize göz atın.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-extrabold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold mb-3">Sayfa Bulunamadı</h1>
        <p className="text-muted-foreground mb-6">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfadan devam edebilir veya faydalı bölümlerimize göz atabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition">
            Ana Sayfa
          </Link>
          <Link href="/faydali-bilgiler" className="px-6 py-3 rounded-full border border-border font-semibold hover:bg-muted transition">
            Faydalı Bilgiler
          </Link>
        </div>
      </div>
    </div>
  )
}
