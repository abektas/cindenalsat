export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const posts = await prisma.blogPost.findMany({ orderBy: { date: 'desc' } })
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Blog list error:', error)
    return NextResponse.json({ error: 'Failed to list blog posts' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const data = await req.json()
    const post = await prisma.blogPost.create({
      data: {
        slug: data.slug,
        categoryKey: data.categoryKey,
        date: new Date(data.date),
        image: data.image,
        imageIsPublic: data.imageIsPublic ?? true,
        titleTr: data.titleTr,
        titleEn: data.titleEn,
        excerptTr: data.excerptTr,
        excerptEn: data.excerptEn,
        contentTr: data.contentTr,
        contentEn: data.contentEn,
        published: data.published ?? true,
      },
    })
    return NextResponse.json(post)
  } catch (error) {
    console.error('Blog create error:', error)
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 })
  }
}
