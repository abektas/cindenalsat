'use client'

import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { categories } from '@/lib/blog-data'
import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowLeft, Share2, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function BlogPostClient({ slug }: { slug: string }) {
  const { locale } = useLocale()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/public/blog?slug=${slug}`)
      .then((r) => { if (r.ok) return r.json(); throw new Error('Not found') })
      .then(setPost)
      .catch(() => setPost(null))
      .finally(() => setLoading(false))
  }, [slug])

  const blogT = locale === 'tr'
    ? { back: '← Tüm Yazılar', notFound: 'Yazı bulunamadı.', backToList: 'Faydalı Bilgilere Dön', share: 'Paylaş', contact: 'Bize Ulaşın', whatsapp: 'WhatsApp ile Yazın', ctaTitle: 'Ücretsiz Ön Değerlendirme Alın', ctaDesc: 'Çin\'den ithalat sürecinizde profesyonel destek almak için bizimle iletişime geçin.' }
    : { back: '← All Articles', notFound: 'Article not found.', backToList: 'Back to Useful Information', share: 'Share', contact: 'Contact Us', whatsapp: 'Write on WhatsApp', ctaTitle: 'Get a Free Preliminary Assessment', ctaDesc: 'Contact us for professional support in your import process from China.' }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" /></div>
        <Footer />
      </main>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <p className="text-muted-foreground text-lg">{blogT.notFound}</p>
          <Link href="/faydali-bilgiler"><Button className="mt-4" variant="outline">{blogT.backToList}</Button></Link>
        </div>
        <Footer />
      </main>
    )
  }

  const title = locale === 'tr' ? post.titleTr : post.titleEn
  const excerpt = locale === 'tr' ? post.excerptTr : post.excerptEn
  const content = locale === 'tr' ? post.contentTr : post.contentEn
  const catLabel = categories.find((c) => c.key === post.categoryKey)?.[locale] ?? post.categoryKey

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title, text: excerpt, url: window.location.href }).catch(() => {})
    } else if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href).catch(() => {})
    }
  }

  const formatContent = (text: string) => {
    return text.split('\n\n').map((para) => {
      if (para.startsWith('**') && para.endsWith('**')) {
        return `<h3 class="font-display font-bold text-xl mt-8 mb-3 text-foreground">${para.replace(/\*\*/g, '')}</h3>`
      }
      const formatted = para.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      if (formatted.startsWith('- ')) {
        const items = formatted.split('\n').map((li) => `<li class="ml-4">${li.replace(/^- /, '')}</li>`).join('')
        return `<ul class="list-disc pl-4 space-y-1 text-muted-foreground">${items}</ul>`
      }
      return `<p class="text-muted-foreground leading-relaxed">${formatted}</p>`
    }).join('')
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 sm:pt-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 pb-8">
          <Link href="/faydali-bilgiler" className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />{blogT.back}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 text-sm text-white/70 mb-4">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="text-teal-300 font-medium flex items-center gap-1"><Tag className="w-3.5 h-3.5" />{catLabel}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white">{title}</h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">{excerpt}</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 -mt-2">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="aspect-video relative rounded-2xl overflow-hidden shadow-xl bg-muted">
          <Image src={post.image} alt={title} fill className="object-cover" sizes="800px" priority />
        </motion.div>
      </div>

      <article className="max-w-[800px] mx-auto px-4 sm:px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="prose prose-lg max-w-none space-y-4" dangerouslySetInnerHTML={{ __html: formatContent(content || '') }} />
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Button variant="outline" size="sm" onClick={handleShare} className="gap-2"><Share2 className="w-4 h-4" />{blogT.share}</Button>
          <Link href="/#contact"><Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 shadow-md gap-2"><Phone className="w-4 h-4" />{blogT.contact}</Button></Link>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-12 rounded-2xl p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-center">
          <h3 className="font-display font-bold text-xl text-white">{blogT.ctaTitle}</h3>
          <p className="mt-2 text-white/90 text-sm max-w-md mx-auto">{blogT.ctaDesc}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#contact"><Button className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg gap-2 px-6"><Phone className="w-4 h-4" />{blogT.contact}</Button></Link>
            <a href="https://wa.me/905053697425" target="_blank" rel="noopener noreferrer"><Button className="bg-green-500 hover:bg-green-600 text-white shadow-lg gap-2 px-6"><MessageCircle className="w-4 h-4" />{blogT.whatsapp}</Button></a>
          </div>
        </motion.div>
      </article>
      <Footer />
    </main>
  )
}
