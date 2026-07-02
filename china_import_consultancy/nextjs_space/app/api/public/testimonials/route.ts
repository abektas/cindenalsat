export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { published: true },
      orderBy: { sortOrder: 'asc' },
    })
    return NextResponse.json(testimonials)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
