export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const content = await prisma.siteContent.findMany()
    const map: Record<string, string> = {}
    content.forEach((c: any) => { map[c.key] = c.value })
    return NextResponse.json(map)
  } catch (error) {
    console.error('Public site content error:', error)
    return NextResponse.json({ error: 'Failed to get site content' }, { status: 500 })
  }
}
