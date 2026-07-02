export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const slug = searchParams.get('slug')

    if (slug) {
      const post = await prisma.blogPost.findFirst({ where: { slug, published: true } })
      if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      return NextResponse.json(post)
    }

    const where: any = { published: true }
    if (category && category !== 'all') where.categoryKey = category

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { date: 'desc' },
      select: {
        id: true, slug: true, categoryKey: true, date: true, image: true,
        titleTr: true, titleEn: true, excerptTr: true, excerptEn: true,
      },
    })
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Public blog error:', error)
    return NextResponse.json({ error: 'Failed to get blog posts' }, { status: 500 })
  }
}
