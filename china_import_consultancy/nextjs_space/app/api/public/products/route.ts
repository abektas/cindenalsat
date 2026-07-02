export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const where: any = { published: true }
    if (category) where.category = category
    const products = await prisma.product.findMany({
      where,
      orderBy: { sortOrder: 'asc' },
    })
    return NextResponse.json(products)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
