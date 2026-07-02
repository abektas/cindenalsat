'use client'

import { useState, useEffect } from 'react'
import { useLocale } from '@/lib/locale-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { categories } from '@/lib/blog-data'
import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function BlogPageClient() {
  const { locale } = useLocale()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/public/blog?category=${activeCategory}`)
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setPosts(data) })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [activeCategory])

  const filteredPosts = posts.filter((post) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    const title = locale === 'tr' ? post.titleTr : post.titleEn
    const excerpt = locale === 'tr' ? post.excerptTr : post.excerptEn
    return title?.toLowerCase().includes(q) || excerpt?.toLowerCase().includes(q)
  })

  const blogT = locale === 'tr'
    ? {
        pageTitle: "Çin'den İthalat ile İlgili Faydalı Bilgiler",
        pageDesc: 'Çin İthalat Rehberi | Sourcing, Lojistik ve Ticaret Blogu.',
        categories: 'Kategoriler',
        readMore: 'Okumaya Devam Et',
        noPosts: 'Bu kategoride henüz yazı bulunmuyor.',
        searchPlaceholder: 'Yazılarda ara...',
      }
    : {
        pageTitle: 'Useful Information About China Import',
        pageDesc: 'China Import Guide | Sourcing, Logistics and Trade Blog.',
        categories: 'Categories',
        readMore: 'Continue Reading',
        noPosts: 'No posts found in this category.',
        searchPlaceholder: 'Search articles...',
      }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            {blogT.pageTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/80 max-w-3xl leading-relaxed"
          >
            {blogT.pageDesc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 relative max-w-md"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={blogT.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              {loading ? (
                <div className="text-center py-12 text-muted-foreground">Yükleniyor...</div>
              ) : filteredPosts.length === 0 ? (
                <p className="text-muted-foreground text-center py-12">{blogT.noPosts}</p>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => {
                    const title = locale === 'tr' ? post.titleTr : post.titleEn
                    const excerpt = locale === 'tr' ? post.excerptTr : post.excerptEn
                    const catLabel = categories.find((c) => c.key === post.categoryKey)?.[locale] ?? post.categoryKey
                    return (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="group"
                      >
                        <Link href={`/faydali-bilgiler/${post.slug}`} className="block">
                          <div className="flex flex-col sm:flex-row gap-5 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-300">
                            <div className="sm:w-52 sm:min-w-[208px] aspect-video sm:aspect-[4/3] relative rounded-xl overflow-hidden bg-muted shadow-sm">
                              <Image src={post.image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 208px" />
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {new Date(post.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                                <span className="text-primary font-medium flex items-center gap-1">
                                  <Tag className="w-3 h-3" />
                                  {catLabel}
                                </span>
                              </div>
                              <h2 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">{title}</h2>
                              <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{excerpt}</p>
                              <span className="mt-3 text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                {blogT.readMore}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="sticky top-24">
                <h3 className="font-display font-bold text-lg mb-4">{blogT.categories}</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                        activeCategory === cat.key
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat[locale]}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
