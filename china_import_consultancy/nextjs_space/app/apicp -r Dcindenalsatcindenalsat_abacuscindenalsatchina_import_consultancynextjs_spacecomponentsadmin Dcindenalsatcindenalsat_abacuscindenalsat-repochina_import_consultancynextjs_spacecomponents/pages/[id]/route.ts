import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/admin/pages/[id] - Sayfa detayı
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

    const page = await prisma.page.findUnique({
      where: { id },
      include: {
        author: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }

    return NextResponse.json(page)
  } catch (error: any) {
    console.error('Error fetching page:', error)
    return NextResponse.json(
      { error: 'Failed to fetch page', message: error.message },
      { status: 500 }
    )
  }
}

// PATCH /api/admin/pages/[id] - Sayfa güncelle
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
      titleTr,
      titleEn,
      contentTr,
      contentEn,
      metaTitleTr,
      metaTitleEn,
      metaDescTr,
      metaDescEn,
      ogImage,
      published,
      showInNav,
      navOrder,
      layout,
      customCss,
      customJs
    } = body

    // Check if page exists
    const existingPage = await prisma.page.findUnique({
      where: { id }
    })

    if (!existingPage) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }

    // Update page
    const page = await prisma.page.update({
      where: { id },
      data: {
        ...(titleTr && { titleTr }),
        ...(titleEn && { titleEn }),
        ...(contentTr !== undefined && { contentTr }),
        ...(contentEn !== undefined && { contentEn }),
        ...(metaTitleTr && { metaTitleTr }),
        ...(metaTitleEn && { metaTitleEn }),
        ...(metaDescTr && { metaDescTr }),
        ...(metaDescEn && { metaDescEn }),
        ...(ogImage && { ogImage }),
        ...(published !== undefined && { published }),
        ...(showInNav !== undefined && { showInNav }),
        ...(navOrder !== undefined && { navOrder }),
        ...(layout && { layout }),
        ...(customCss && { customCss }),
        ...(customJs && { customJs }),
        updatedAt: new Date()
      },
      include: {
        author: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    // Log activity
    await logActivity(
      (session.user as any).id,
      'update',
      'page',
      page.id,
      `Updated page: ${titleTr || existingPage.titleTr}`
    )

    return NextResponse.json(page)
  } catch (error: any) {
    console.error('Error updating page:', error)
    return NextResponse.json(
      { error: 'Failed to update page', message: error.message },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/pages/[id] - Sayfa sil
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

    // Check if page exists
    const existingPage = await prisma.page.findUnique({
      where: { id }
    })

    if (!existingPage) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }

    // Delete page
    await prisma.page.delete({
      where: { id }
    })

    // Log activity
    await logActivity(
      (session.user as any).id,
      'delete',
      'page',
      id,
      `Deleted page: ${existingPage.titleTr}`
    )

    return NextResponse.json({ success: true, message: 'Page deleted successfully' })
  } catch (error: any) {
    console.error('Error deleting page:', error)
    return NextResponse.json(
      { error: 'Failed to delete page', message: error.message },
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
