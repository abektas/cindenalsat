import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// POST /api/admin/pages/[id]/publish - Sayfayı yayınla
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params

    const page = await prisma.page.update({
      where: { id },
      data: { published: true, updatedAt: new Date() }
    })

    // Log activity
    await logActivity(
      (session.user as any).id,
      'publish',
      'page',
      id,
      `Published page`
    )

    return NextResponse.json(page)
  } catch (error: any) {
    console.error('Error publishing page:', error)
    return NextResponse.json(
      { error: 'Failed to publish page', message: error.message },
      { status: 500 }
    )
  }
}

// POST /api/admin/pages/[id]/unpublish - Sayfayı yayından kaldır
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params

    const page = await prisma.page.update({
      where: { id },
      data: { published: false, updatedAt: new Date() }
    })

    // Log activity
    await logActivity(
      (session.user as any).id,
      'unpublish',
      'page',
      id,
      `Unpublished page`
    )

    return NextResponse.json(page)
  } catch (error: any) {
    console.error('Error unpublished page:', error)
    return NextResponse.json(
      { error: 'Failed to unpublish page', message: error.message },
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
