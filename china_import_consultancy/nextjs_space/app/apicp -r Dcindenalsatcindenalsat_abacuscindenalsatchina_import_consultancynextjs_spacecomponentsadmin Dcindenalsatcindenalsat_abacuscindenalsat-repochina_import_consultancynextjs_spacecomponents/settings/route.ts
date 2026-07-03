import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/admin/settings - Tüm ayarları getir
export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    let settings = await prisma.siteSetting.findFirst()

    // If no settings exist, create default ones
    if (!settings) {
      settings = await prisma.siteSetting.create({
        data: {
          key: 'default',
          siteNameTr: "Çin'den Al Sat",
          siteNameEn: 'China Import',
          phone: '+90 505 369 74 25',
          email: 'china.import.consultancy@gmail.com',
          whatsapp: '+90 505 369 74 25',
          facebook: 'https://facebook.com/cindenalsat',
          instagram: 'https://instagram.com/cindenalsat',
          youtube: 'https://youtube.com/@cindenalsat',
          twitter: 'https://twitter.com/cindenalsat',
          enableBlog: true,
          enableContactForm: true,
          enableTestimonials: true
        }
      })
    }

    return NextResponse.json(settings)
  } catch (error: any) {
    console.error('Error fetching settings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch settings', message: error.message },
      { status: 500 }
    )
  }
}

// PATCH /api/admin/settings - Ayarları güncelle
export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()

    // Check existing settings or create new one
    let settings = await prisma.siteSetting.findFirst()

    const updateData: any = {}

    // Site Info
    if (body.siteNameTr !== undefined) updateData.siteNameTr = body.siteNameTr
    if (body.siteNameEn !== undefined) updateData.siteNameEn = body.siteNameEn
    if (body.siteTaglineTr !== undefined) updateData.siteTaglineTr = body.siteTaglineTr
    if (body.siteTaglineEn !== undefined) updateData.siteTaglineEn = body.siteTaglineEn
    if (body.siteLogo !== undefined) updateData.siteLogo = body.siteLogo
    if (body.siteFavicon !== undefined) updateData.siteFavicon = body.siteFavicon

    // Contact Info
    if (body.phone !== undefined) updateData.phone = body.phone
    if (body.email !== undefined) updateData.email = body.email
    if (body.whatsapp !== undefined) updateData.whatsapp = body.whatsapp
    if (body.addressTr !== undefined) updateData.addressTr = body.addressTr
    if (body.addressEn !== undefined) updateData.addressEn = body.addressEn

    // Social Media
    if (body.facebook !== undefined) updateData.facebook = body.facebook
    if (body.instagram !== undefined) updateData.instagram = body.instagram
    if (body.twitter !== undefined) updateData.twitter = body.twitter
    if (body.youtube !== undefined) updateData.youtube = body.youtube
    if (body.linkedin !== undefined) updateData.linkedin = body.linkedin

    // SEO
    if (body.defaultMetaTitleTr !== undefined) updateData.defaultMetaTitleTr = body.defaultMetaTitleTr
    if (body.defaultMetaTitleEn !== undefined) updateData.defaultMetaTitleEn = body.defaultMetaTitleEn
    if (body.defaultMetaDescTr !== undefined) updateData.defaultMetaDescTr = body.defaultMetaDescTr
    if (body.defaultMetaDescEn !== undefined) updateData.defaultMetaDescEn = body.defaultMetaDescEn
    if (body.defaultOgImage !== undefined) updateData.defaultOgImage = body.defaultOgImage
    if (body.googleAnalyticsId !== undefined) updateData.googleAnalyticsId = body.googleAnalyticsId
    if (body.googleSiteVerification !== undefined) updateData.googleSiteVerification = body.googleSiteVerification

    // Features
    if (body.enableBlog !== undefined) updateData.enableBlog = body.enableBlog
    if (body.enableContactForm !== undefined) updateData.enableContactForm = body.enableContactForm
    if (body.enableTestimonials !== undefined) updateData.enableTestimonials = body.enableTestimonials

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No valid updates provided', settings })
    }

    if (settings) {
      settings = await prisma.siteSetting.update({
        where: { id: settings.id },
        data: { ...updateData, updatedAt: new Date() }
      })
    } else {
      settings = await prisma.siteSetting.create({
        data: { key: 'default', ...updateData, updatedAt: new Date() }
      })
    }

    // Log activity
    await logActivity((session.user as any).id, 'update', 'settings')

    return NextResponse.json(settings)
  } catch (error: any) {
    console.error('Error updating settings:', error)
    return NextResponse.json(
      { error: 'Failed to update settings', message: error.message },
      { status: 500 }
    )
  }
}

// Helper function to log admin activity
async function logActivity(userId: string, action: string, resource: string, resourceId?: string, details?: string) {
  try {
    await prisma.adminActivityLog.create({
      data: { userId, action, resource, resourceId, details }
    })
  } catch (error) {
    console.error('Failed to log activity:', error)
  }
}
