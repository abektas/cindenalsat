import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/admin/navigation - Menü öğelerini listele
export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(req.url)
    const published = searchParams.get('published')

    const where: any = {}
    if (published !== null) {
      where.published = published === 'true'
    }

    const navItems = await prisma.navigationItem.findMany({
      where,
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
      include: {
        children: {
          orderBy: { sortOrder: 'asc' }
        }
      }
    })

    // Transform to hierarchical structure
    const rootItems = navItems.filter(item => !item.parentId)
    const result = rootItems.map(item => ({
      ...item,
      children: navItems.filter(child => child.parentId === item.id)
    }))

    return NextResponse.json(result)
  } catch (error: any) {
    console.error('Error fetching navigation items:', error)
    return NextResponse.json(
      { error: 'Failed to fetch navigation items', message: error.message },
      { status: 500 }
    )
  }
}

// POST /api/admin/navigation - Yeni menü öğesi ekle
export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const {
      labelTr,
      labelEn,
      href,
      parentId,
      icon,
      target = '_self',
      sortOrder = 0,
      published = true
    } = body

    // Validate required fields
    if (!labelTr || !labelEn || !href) {
      return NextResponse.json(
        { error: 'Missing required fields: labelTr, labelEn, href' },
        { status: 400 }
      )
    }

    // Validate target
    if (target !== '_self' && target !== '_blank') {
      return NextResponse.json(
        { error: 'Invalid target value. Must be _self or _blank' },
        { status: 400 }
      )
    }

    // Check if parent exists (if provided)
    if (parentId) {
      const parent = await prisma.navigationItem.findUnique({
        where: { id: parentId }
      })
      if (!parent) {
        return NextResponse.json(
          { error: 'Parent navigation item not found' },
          { status: 400 }
        )
      }
    }

    const navItem = await prisma.navigationItem.create({
      data: {
        labelTr,
        labelEn,
        href,
        parentId: parentId || null,
        icon,
        target,
        sortOrder,
        published
      }
    })

    // Log activity
    await logActivity(
      (session.user as any).id,
      'create',
      'navigation',
      navItem.id,
      `Created navigation item: ${labelTr}`
    )

    return NextResponse.json(navItem, { status: 201 })
  } catch (error: any) {
    console.error('Error creating navigation item:', error)
    return NextResponse.json(
      { error: 'Failed to create navigation item', message: error.message },
      { status: 500 }
    )
  }
}

// Helper function to log admin activity
async function logActivity(
  userId: string,
  action: string,
  resource: string,
  resourceId?: string,
  details?: string
) {
  try {
    await prisma.adminActivityLog.create({
      data: {
        userId,
        action,
        resource,
        resourceId,
        details
      }
    })
  } catch (error) {
    console.error('Failed to log activity:', error)
  }
}
