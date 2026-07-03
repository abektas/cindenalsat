import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/admin/navigation/[id] - Menü öğesi detayı
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params

    const navItem = await prisma.navigationItem.findUnique({
      where: { id },
      include: {
        children: {
          orderBy: { sortOrder: 'asc' }
        }
      }
    })

    if (!navItem) {
      return NextResponse.json({ error: 'Navigation item not found' }, { status: 404 })
    }

    return NextResponse.json(navItem)
  } catch (error: any) {
    console.error('Error fetching navigation item:', error)
    return NextResponse.json(
      { error: 'Failed to fetch navigation item', message: error.message },
      { status: 500 }
    )
  }
}

// PATCH /api/admin/navigation/[id] - Menü öğesi güncelle
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
    const body = await req.json()

    const {
      labelTr,
      labelEn,
      href,
      parentId,
      icon,
      target,
      sortOrder,
      published
    } = body

    // Check if nav item exists
    const existingItem = await prisma.navigationItem.findUnique({
      where: { id }
    })

    if (!existingItem) {
      return NextResponse.json({ error: 'Navigation item not found' }, { status: 404 })
    }

    // Validate target if provided
    if (target && target !== '_self' && target !== '_blank') {
      return NextResponse.json(
        { error: 'Invalid target value. Must be _self or _blank' },
        { status: 400 }
      )
    }

    // Prevent self-referencing parent
    if (parentId === id) {
      return NextResponse.json(
        { error: 'Cannot set parent to itself' },
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

    // Update nav item
    const navItem = await prisma.navigationItem.update({
      where: { id },
      data: {
        ...(labelTr && { labelTr }),
        ...(labelEn && { labelEn }),
        ...(href && { href }),
        ...(parentId !== undefined && { parentId: parentId || null }),
        ...(icon !== undefined && { icon }),
        ...(target && { target }),
        ...(sortOrder !== undefined && { sortOrder }),
        ...(published !== undefined && { published }),
        updatedAt: new Date()
      }
    })

    // Log activity
    await logActivity(
      (session.user as any).id,
      'update',
      'navigation',
      navItem.id,
      `Updated navigation item: ${labelTr || existingItem.labelTr}`
    )

    return NextResponse.json(navItem)
  } catch (error: any) {
    console.error('Error updating navigation item:', error)
    return NextResponse.json(
      { error: 'Failed to update navigation item', message: error.message },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/navigation/[id] - Menü öğesi sil
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params

    // Check if nav item exists
    const existingItem = await prisma.navigationItem.findUnique({
      where: { id },
      include: { children: true }
    })

    if (!existingItem) {
      return NextResponse.json({ error: 'Navigation item not found' }, { status: 404 })
    }

    // Check if has children
    if (existingItem.children.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete navigation item with children. Delete children first or reassign them.' },
        { status: 400 }
      )
    }

    // Delete nav item
    await prisma.navigationItem.delete({
      where: { id }
    })

    // Log activity
    await logActivity(
      (session.user as any).id,
      'delete',
      'navigation',
      id,
      `Deleted navigation item: ${existingItem.labelTr}`
    )

    return NextResponse.json({ success: true, message: 'Navigation item deleted successfully' })
  } catch (error: any) {
    console.error('Error deleting navigation item:', error)
    return NextResponse.json(
      { error: 'Failed to delete navigation item', message: error.message },
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
