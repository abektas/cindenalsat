export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const products = await prisma.product.findMany({ orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }] })
    return NextResponse.json(products)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await req.json()
    const product = await prisma.product.create({ data: body })
    return NextResponse.json(product)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
