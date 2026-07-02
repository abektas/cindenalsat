export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const post = await prisma.blogPost.findUnique({ where: { id: params.id } })
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(post)
  } catch (error) {
    console.error('Blog get error:', error)
    return NextResponse.json({ error: 'Failed to get blog post' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const data = await req.json()
    const post = await prisma.blogPost.update({
      where: { id: params.id },
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
    console.error('Blog update error:', error)
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    await prisma.blogPost.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Blog delete error:', error)
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 })
  }
}
