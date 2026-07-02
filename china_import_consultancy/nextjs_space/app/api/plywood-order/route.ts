export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, city, productType, thickness, size, quantity, adhesive, surface, usage, dirInterest, notes, locale } = body

    if (!name || !email || !phone || !quantity) {
      return NextResponse.json({ error: 'Zorunlu alanları doldurun' }, { status: 400 })
    }

    // Save to DB as ContactSubmission with subject indicating it's a plywood order
    try {
      await prisma.contactSubmission.create({
        data: {
          name,
          email,
          phone: phone || '',
          company: company || '',
          subject: 'Kavak Kontraplak Sipariş Talebi',
          message: `Ürün: ${productType || 'Kavak Kontraplak'}\nKalınlık: ${thickness || '-'}\nÖlçü: ${size || '-'}\nMiktar: ${quantity}\nYapıştırıcı: ${adhesive || '-'}\nYüzey: ${surface || '-'}\nKullanım: ${usage || '-'}\nDİR İlgi: ${dirInterest || '-'}\nŞehir: ${city || '-'}\nNotlar: ${notes || '-'}`,
          locale: locale || 'tr',
          status: 'new',
        },
      })
    } catch (dbErr) {
      console.error('DB save error:', dbErr)
    }

    // Send email notification
    const htmlBody = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%); padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">🪵 Yeni Kavak Kontraplak Sipariş Talebi</h1>
        </div>
        <div style="padding: 24px 32px;">
          <h3 style="color: #374151; margin-top: 0;">Müşteri Bilgileri</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Ad Soyad</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">E-posta</td><td style="padding: 8px 0; color: #111827;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Telefon</td><td style="padding: 8px 0; color: #111827;">${phone}</td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #6b7280;">Firma</td><td style="padding: 8px 0; color: #111827;">${company}</td></tr>` : ''}
            ${city ? `<tr><td style="padding: 8px 0; color: #6b7280;">Şehir</td><td style="padding: 8px 0; color: #111827;">${city}</td></tr>` : ''}
          </table>

          <h3 style="color: #374151; margin-top: 24px;">Ürün Detayları</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Ürün Tipi</td><td style="padding: 8px 0; color: #111827; font-weight: 600;">${productType || 'Kavak Kontraplak'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Kalınlık</td><td style="padding: 8px 0; color: #111827;">${thickness || 'Belirtilmedi'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Ölçü</td><td style="padding: 8px 0; color: #111827;">${size || 'Belirtilmedi'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Miktar</td><td style="padding: 8px 0; color: #111827; font-weight: 600; color: #0ea5e9;">${quantity}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Yapıştırıcı</td><td style="padding: 8px 0; color: #111827;">${adhesive || 'Belirtilmedi'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Yüzey İşlemi</td><td style="padding: 8px 0; color: #111827;">${surface || 'Belirtilmedi'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Kullanım Alanı</td><td style="padding: 8px 0; color: #111827;">${usage || 'Belirtilmedi'}</td></tr>
          </table>

          <h3 style="color: #374151; margin-top: 24px;">DİR (Dahilde İşleme Rejimi)</h3>
          <p style="color: #111827; background: ${dirInterest === 'evet' ? '#d1fae5' : '#f3f4f6'}; padding: 12px 16px; border-radius: 8px; font-weight: 500;">
            ${dirInterest === 'evet' ? '✅ DİR belgesi ile ithalat yapmak istiyor' : dirInterest === 'bilgi' ? 'ℹ️ DİR hakkında bilgi almak istiyor' : '➖ DİR ile ilgilenmiyor / belirtmedi'}
          </p>

          ${notes ? `
          <h3 style="color: #374151; margin-top: 24px;">Ek Notlar</h3>
          <p style="color: #374151; background: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 3px solid #0ea5e9;">${notes}</p>
          ` : ''}
        </div>
      </div>
    `

    try {
      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_KAVAK_KONTRAPLAK_SIPARI_FORMU,
          subject: `🪵 Yeni Sipariş Talebi: ${name} - ${quantity}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'china.import.consultancy@gmail.com',
          reply_to: email,
        }),
      })
    } catch (emailErr) {
      console.error('Email send error:', emailErr)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Order submission error:', error)
    return NextResponse.json({ error: 'Bir hata oluştu' }, { status: 500 })
  }
}
