import { BlogPostClient } from '@/components/blog-post-client'
import { blogPosts, getPostBySlug } from '@/lib/blog-data'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

/** Every blog post becomes a real static page — no database, no server. */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: "Yazı Bulunamadı | Çin'den Al Sat" }
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
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  return <BlogPostClient slug={slug} />
}