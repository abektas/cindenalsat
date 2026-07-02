import { BlogPostClient } from '@/components/blog-post-client'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await prisma.blogPost.findFirst({ where: { slug: params.slug, published: true } })
    if (!post) {
      return { title: 'Yazı Bulunamadı | Çin\'den Al Sat' }
    }
    return {
      title: `${post.titleTr} | Çin'den Al Sat`,
      description: post.excerptTr,
      openGraph: {
        title: post.titleTr,
        description: post.excerptTr,
        images: [{ url: post.image }],
        type: 'article',
      },
    }
  } catch {
    return { title: 'Yazı Bulunamadı | Çin\'den Al Sat' }
  }
}

export default function BlogPostPage({ params }: Props) {
  return <BlogPostClient slug={params.slug} />
}
