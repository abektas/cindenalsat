import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/admin/theme - Mevcut tema ayarlarını getir
export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    let themeConfig = await prisma.themeConfig.findFirst()

    // If no config exists, create default one
    if (!themeConfig) {
      themeConfig = await prisma.themeConfig.create({
        data: {
          primaryHue: 221,
          primarySaturation: 83,
          primaryLightness: 53,
          accentHue: 174,
          accentSaturation: 60,
          accentLightness: 51,
          secondaryHue: 340,
          secondarySaturation: 65,
          secondaryLightness: 60,
          bodyFont: 'DM Sans',
          headingFont: 'Plus Jakarta Sans',
          monoFont: 'JetBrains Mono',
          baseFontSize: 16,
          borderRadius: 0.625,
          spacingUnit: 8,
          darkBackgroundHue: 222,
          darkBackgroundSat: 84,
          darkBackgroundLight: 5,
          enableDarkMode: true
        }
      })
    }

    return NextResponse.json(themeConfig)
  } catch (error: any) {
    console.error('Error fetching theme config:', error)
    return NextResponse.json(
      { error: 'Failed to fetch theme config', message: error.message },
      { status: 500 }
    )
  }
}

// PATCH /api/admin/theme - Tema ayarlarını güncelle
export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()

    // Validate color values (HSL ranges)
    const validateColor = (name: string, hue: number, saturation: number, lightness: number) => {
      if (hue < 0 || hue > 360) throw new Error(`${name} hue must be between 0 and 360`)
      if (saturation < 0 || saturation > 100) throw new Error(`${name} saturation must be between 0 and 100`)
      if (lightness < 0 || lightness > 100) throw new Error(`${name} lightness must be between 0 and 100`)
    }

    // Check existing config or create new one
    let themeConfig = await prisma.themeConfig.findFirst()

    const updateData: any = {}

    if (body.primaryHue !== undefined) {
      validateColor('Primary hue', body.primaryHue, body.primarySaturation || 0, body.primaryLightness || 0)
      updateData.primaryHue = body.primaryHue
      updateData.primarySaturation = body.primarySaturation
      updateData.primaryLightness = body.primaryLightness
    }

    if (body.accentHue !== undefined) {
      validateColor('Accent hue', body.accentHue, body.accentSaturation || 0, body.accentLightness || 0)
      updateData.accentHue = body.accentHue
      updateData.accentSaturation = body.accentSaturation
      updateData.accentLightness = body.accentLightness
    }

    if (body.secondaryHue !== undefined) {
      validateColor('Secondary hue', body.secondaryHue, body.secondarySaturation || 0, body.secondaryLightness || 0)
      updateData.secondaryHue = body.secondaryHue
      updateData.secondarySaturation = body.secondarySaturation
      updateData.secondaryLightness = body.secondaryLightness
    }

    if (body.bodyFont !== undefined) updateData.bodyFont = body.bodyFont
    if (body.headingFont !== undefined) updateData.headingFont = body.headingFont
    if (body.monoFont !== undefined) updateData.monoFont = body.monoFont
    if (body.baseFontSize !== undefined) updateData.baseFontSize = body.baseFontSize
    if (body.borderRadius !== undefined) updateData.borderRadius = body.borderRadius
    if (body.spacingUnit !== undefined) updateData.spacingUnit = body.spacingUnit

    if (body.darkBackgroundHue !== undefined) {
      validateColor('Dark background hue', body.darkBackgroundHue, body.darkBackgroundSat || 0, body.darkBackgroundLight || 0)
      updateData.darkBackgroundHue = body.darkBackgroundHue
      updateData.darkBackgroundSat = body.darkBackgroundSat
      updateData.darkBackgroundLight = body.darkBackgroundLight
    }

    if (body.enableDarkMode !== undefined) {
      updateData.enableDarkMode = body.enableDarkMode
    }

    if (body.customCss !== undefined) {
      updateData.customCss = body.customCss
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No valid updates provided', themeConfig })
    }

    if (themeConfig) {
      themeConfig = await prisma.themeConfig.update({
        where: { id: themeConfig.id },
        data: { ...updateData, updatedAt: new Date() }
      })
    } else {
      themeConfig = await prisma.themeConfig.create({ data: { ...updateData, updatedAt: new Date() } })
    }

    // Log activity
    await logActivity((session.user as any).id, 'update', 'theme')

    return NextResponse.json(themeConfig)
  } catch (error: any) {
    console.error('Error updating theme config:', error)
    return NextResponse.json(
      { error: 'Failed to update theme config', message: error.message },
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
