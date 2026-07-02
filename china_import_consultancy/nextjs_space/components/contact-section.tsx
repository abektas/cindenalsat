'use client'

import { useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const { locale, t } = useLocale()
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {}
    setForm((prev: any) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    setFormState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...(form ?? {}), locale }),
      })
      const data = await res?.json?.()
      if (data?.success) {
        setFormState('success')
        setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch (err: any) {
      console.error('Contact form error:', err)
      setFormState('error')
    }
  }

  const contactInfo = [
    { icon: Phone, label: t?.contact?.info?.phone ?? 'Phone', value: '+90 505 369 74 25', href: 'tel:+905053697425' },
    { icon: MessageSquare, label: t?.contact?.info?.whatsapp ?? 'WhatsApp', value: '+90 505 369 74 25', href: 'https://wa.me/905053697425' },
    { icon: Mail, label: t?.contact?.info?.email ?? 'Email', value: 'china.import.consultancy@gmail.com', href: 'mailto:china.import.consultancy@gmail.com' },
  ]

  return (
    <section id="contact" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t?.contact?.title ?? 'Contact'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t?.contact?.subtitle ?? ''}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo?.map?.((info: any, idx: number) => {
              const Icon = info?.icon
              return (
                <a
                  key={idx}
                  href={info?.href ?? '#'}
                  target={info?.href?.startsWith?.('http') ? '_blank' : undefined}
                  rel={info?.href?.startsWith?.('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 group"
                >
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-teal-400/10 group-hover:from-blue-500/20 group-hover:to-teal-400/20 transition-colors">
                    {Icon ? <Icon className="w-5 h-5 text-primary" /> : null}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info?.label ?? ''}</p>
                    <p className="font-medium">{info?.value ?? ''}</p>
                  </div>
                </a>
              )
            }) ?? []}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905053697425"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white gap-2 shadow-md">
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 sm:p-8 shadow-lg space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t?.contact?.form?.name ?? 'Name'} *</label>
                  <Input
                    name="name"
                    value={form?.name ?? ''}
                    onChange={handleChange}
                    required
                    placeholder={t?.contact?.form?.name ?? 'Name'}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t?.contact?.form?.email ?? 'Email'} *</label>
                  <Input
                    name="email"
                    type="email"
                    value={form?.email ?? ''}
                    onChange={handleChange}
                    required
                    placeholder={t?.contact?.form?.email ?? 'Email'}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t?.contact?.form?.phone ?? 'Phone'}</label>
                  <Input
                    name="phone"
                    value={form?.phone ?? ''}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t?.contact?.form?.company ?? 'Company'}</label>
                  <Input
                    name="company"
                    value={form?.company ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.form?.company ?? 'Company'}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t?.contact?.form?.subject ?? 'Subject'} *</label>
                <Input
                  name="subject"
                  value={form?.subject ?? ''}
                  onChange={handleChange}
                  required
                  placeholder={t?.contact?.form?.subject ?? 'Subject'}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t?.contact?.form?.message ?? 'Message'} *</label>
                <Textarea
                  name="message"
                  value={form?.message ?? ''}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t?.contact?.form?.message ?? 'Message'}
                />
              </div>

              {formState === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  {t?.contact?.form?.success ?? 'Success'}
                </div>
              )}
              {formState === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {t?.contact?.form?.error ?? 'Error'}
                </div>
              )}

              <Button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white border-0 shadow-md hover:shadow-lg gap-2"
              >
                <Send className="w-4 h-4" />
                {formState === 'sending'
                  ? (t?.contact?.form?.sending ?? 'Sending...')
                  : (t?.contact?.form?.submit ?? 'Send')}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {locale === 'tr'
                  ? 'Bilgileriniz güvenli bir şekilde saklanır ve üçüncü kişilerle paylaşılmaz.'
                  : 'Your information is securely stored and never shared with third parties.'}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
