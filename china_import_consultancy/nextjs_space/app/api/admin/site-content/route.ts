export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const content = await prisma.siteContent.findMany()
    const map: Record<string, string> = {}
    content.forEach((c: any) => { map[c.key] = c.value })
    return NextResponse.json(map)
  } catch (error) {
    console.error('Site content error:', error)
    return NextResponse.json({ error: 'Failed to get site content' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const data = await req.json() as Record<string, string>
    const updates = Object.entries(data).map(([key, value]) =>
      prisma.siteContent.upsert({
        where: { key },
        update: { value },
        create: { key, value },
      })
    )
    await prisma.$transaction(updates)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Site content update error:', error)
    return NextResponse.json({ error: 'Failed to update site content' }, { status: 500 })
  }
}
