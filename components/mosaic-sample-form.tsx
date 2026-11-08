'use client'

import { useState } from 'react'
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '@/lib/form-config'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const volumeOptions = [
  'Sample box only',
  'Under 50 kg per order',
  '50 – 200 kg per order',
  '200 – 500 kg per order',
  'Over 500 kg per order',
]

const initialState = {
  name: '',
  email: '',
  company: '',
  website: '',
  needs: '',
  volume: '',
  shipTo: '',
}

const labelCls = 'mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground'

export function MosaicSampleForm() {
  const [form, setForm] = useState(initialState)
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Please enter your name'
    if (!form.email.trim()) errs.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = 'Enter a valid email'
    if (!form.company.trim()) errs.company = 'Workshop or company name'
    if (!form.needs.trim()) errs.needs = 'Tell us which items you need'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setState('sending')
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Mosaic sample request — ${form.company || form.name}`,
          from_name: "Çin'den Al Sat — Mosaic Lamp Supplies",
          name: form.name,
          email: form.email,
          company: form.company,
          website: form.website,
          order_volume: form.volume,
          ship_to: form.shipTo,
          message: form.needs,
          source_page: '/mosaic-lamp-supplies/',
        }),
      })
      const data = await res.json()
      if (data?.success) {
        setState('success')
        setForm(initialState)
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const errCls = (field: string) => (errors[field] ? 'border-destructive focus-visible:ring-destructive' : '')

  if (state === 'success') {
    return (
      <div className="flex h-full flex-col justify-center rounded-lg border border-border bg-card p-8 sm:p-12">
        <CheckCircle className="h-8 w-8 text-accent" aria-hidden />
        <h3 className="mt-5 font-display text-2xl tracking-tight">Request received.</h3>
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">
          We will reply with the items we can quote from stock, the ones that need a factory run,
          and one landed price per line. Usually within one business day.
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="mt-8 self-start text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 sm:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ms-name" className={labelCls}>
            Name *
          </label>
          <Input id="ms-name" name="name" value={form.name} onChange={handleChange} autoComplete="name" className={errCls('name')} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="ms-email" className={labelCls}>
            Email *
          </label>
          <Input id="ms-email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" className={errCls('email')} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="ms-company" className={labelCls}>
            Workshop / company *
          </label>
          <Input id="ms-company" name="company" value={form.company} onChange={handleChange} autoComplete="organization" className={errCls('company')} />
          {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="ms-website" className={labelCls}>
            Website or Instagram
          </label>
          <Input id="ms-website" name="website" value={form.website} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ms-volume" className={labelCls}>
            Typical order size
          </label>
          <select
            id="ms-volume"
            name="volume"
            value={form.volume}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select one</option>
            {volumeOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ms-ship" className={labelCls}>
            Ship to (state)
          </label>
          <Input id="ms-ship" name="shipTo" value={form.shipTo} onChange={handleChange} />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="ms-needs" className={labelCls}>
          What do you need? *
        </label>
        <Textarea
          id="ms-needs"
          name="needs"
          value={form.needs}
          onChange={handleChange}
          rows={5}
          className={errCls('needs')}
        />
        {errors.needs && <p className="mt-1 text-xs text-destructive">{errors.needs}</p>}
        <p className="mt-1.5 text-xs text-muted-foreground">
          Shapes, colors, piece counts, and how often you reorder. Paste a cut list or an old
          invoice if you have one.
        </p>
      </div>

      {state === 'error' && (
        <div className="mt-6 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
          <span>
            Something went wrong sending the form. Message us on WhatsApp at +90 505 369 74 25 and
            we will pick it up there.
          </span>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={state === 'sending'} className="gap-2 bg-foreground text-background hover:bg-foreground/90">
          <Send className="h-4 w-4" aria-hidden />
          {state === 'sending' ? 'Sending…' : 'Request a sample box'}
        </Button>
        <p className="max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
          No newsletter, no account. Your details are used to answer this request only.
        </p>
      </div>
    </form>
  )
}
