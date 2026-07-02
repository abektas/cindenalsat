import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host') || process.env.NEXTAUTH_URL || 'http://localhost:3000'
  const siteUrl = host?.startsWith?.('http') ? host : `https://${host}`

  let blogUrls: MetadataRoute.Sitemap = []
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, date: true },
    })
    blogUrls = posts.map((post: any) => ({
      url: `${siteUrl}/faydali-bilgiler/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {}

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/faydali-bilgiler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/kavak-kontraplak`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/viral-urunler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/onceki-projeler`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/alibaba-trend-urunler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...blogUrls,
    { url: `${siteUrl}/#services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/#about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/#contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
