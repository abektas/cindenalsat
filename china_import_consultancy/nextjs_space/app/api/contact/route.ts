import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const { name, email, phone, company, subject, message, locale } = data ?? {}

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: String(name),
        email: String(email),
        phone: phone ? String(phone) : null,
        company: company ? String(company) : null,
        subject: String(subject),
        message: String(message),
        locale: locale ? String(locale) : 'tr',
        status: 'new',
      },
    })

    // Send notification email
    try {
      const appUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
      let appName = 'CindenAlSat'
      try {
        appName = new URL(appUrl)?.hostname?.split?.('.')?.[0] || 'CindenAlSat'
      } catch {}

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #e0f2fe 0%, #fce7f3 50%, #f0fdf4 100%); padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #1e3a5f; margin: 0;">📩 Yeni İletişim Formu / New Contact Form</h2>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Ad Soyad / Name:</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">E-posta / Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Telefon / Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>` : ''}
              ${company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Şirket / Company:</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
              <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Konu / Subject:</td><td style="padding: 8px 0;">${subject}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <strong style="color: #374151;">Mesaj / Message:</strong><br/><br/>
              ${String(message)?.replace?.(/\n/g, '<br/>') ?? message}
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 16px;">Dil / Language: ${locale === 'en' ? 'English' : 'Türkçe'}</p>
          </div>
        </div>
      `

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION,
          subject: `Yeni İletişim: ${subject} - ${name}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'china.import.consultancy@gmail.com',
          reply_to: email,
          sender_email: `noreply@${(() => { try { return new URL(appUrl)?.hostname } catch { return 'app.abacusai.app' } })()}`,
          sender_alias: appName,
        }),
      })
    } catch (emailError: any) {
      console.error('Email notification error:', emailError)
    }

    return NextResponse.json({ success: true, id: submission?.id })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
