export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { published: true },
      orderBy: { sortOrder: 'asc' },
    })
    return NextResponse.json(services)
  } catch (error) {
    console.error('Public services error:', error)
    return NextResponse.json({ error: 'Failed to get services' }, { status: 500 })
  }
}
