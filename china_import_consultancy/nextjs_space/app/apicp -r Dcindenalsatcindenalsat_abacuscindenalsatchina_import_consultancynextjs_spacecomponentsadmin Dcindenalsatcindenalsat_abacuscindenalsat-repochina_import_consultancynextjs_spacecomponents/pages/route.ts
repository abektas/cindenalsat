import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/admin/pages - Tüm sayfaları listele
export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(req.url)
    const published = searchParams.get('published')
    const showInNav = searchParams.get('showInNav')

    const where: any = {}
    if (published !== null) {
      where.published = published === 'true'
    }
    if (showInNav !== null) {
      where.showInNav = showInNav === 'true'
    }

    const pages = await prisma.page.findMany({
      where,
      orderBy: [{ navOrder: 'asc' }, { createdAt: 'desc' }],
      include: {
        author: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return NextResponse.json(pages)
  } catch (error: any) {
    console.error('Error fetching pages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch pages', message: error.message },
      { status: 500 }
    )
  }
}

// POST /api/admin/pages - Yeni sayfa oluştur
export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const {
      slug,
      titleTr,
      titleEn,
      contentTr,
      contentEn,
      metaTitleTr,
      metaTitleEn,
      metaDescTr,
      metaDescEn,
      ogImage,
      published = false,
      showInNav = true,
      navOrder = 0,
      layout = 'default',
      customCss,
      customJs
    } = body

    // Validate required fields
    if (!slug || !titleTr || !titleEn) {
      return NextResponse.json(
        { error: 'Missing required fields: slug, titleTr, titleEn' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const existingPage = await prisma.page.findUnique({
      where: { slug }
    })

    if (existingPage) {
      return NextResponse.json(
        { error: 'A page with this slug already exists' },
        { status: 400 }
      )
    }

    const page = await prisma.page.create({
      data: {
        slug,
        titleTr,
        titleEn,
        contentTr: contentTr || '',
        contentEn: contentEn || '',
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
        customJs,
        authorId: (session.user as any).id
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
      'create',
      'page',
      page.id,
      `Created page: ${titleTr}`
    )

    return NextResponse.json(page, { status: 201 })
  } catch (error: any) {
    console.error('Error creating page:', error)
    return NextResponse.json(
      { error: 'Failed to create page', message: error.message },
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
