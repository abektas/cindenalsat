'use client'

import { useState, useRef } from 'react'
import { Upload, X, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  label?: string
}

export function ImageUpload({ value, onChange, label }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (file: File) => {
    setError('')
    setUploading(true)
    try {
      // Get presigned URL
      const presignRes = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: file.name, contentType: file.type }),
      })
      if (!presignRes.ok) throw new Error('Presigned URL oluşturulamadı')
      const { uploadUrl, cloud_storage_path } = await presignRes.json()

      // Check signed headers to determine if Content-Disposition is needed
      const urlObj = new URL(uploadUrl)
      const signedHeaders = urlObj.searchParams.get('X-Amz-SignedHeaders') || ''
      const headers: Record<string, string> = { 'Content-Type': file.type }
      if (signedHeaders.includes('content-disposition')) {
        headers['Content-Disposition'] = 'attachment'
      }

      // Upload to S3
      const uploadRes = await fetch(uploadUrl, {
        method: 'PUT',
        headers,
        body: file,
      })
      if (!uploadRes.ok) throw new Error('Yükleme başarısız')

      // Construct public URL
      const bucketName = urlObj.hostname.split('.')[0]
      const region = urlObj.hostname.split('.')[2]
      const publicUrl = `https://${bucketName}.s3.${region}.amazonaws.com/${cloud_storage_path}`
      onChange(publicUrl)
    } catch (err: any) {
      setError(err.message || 'Yükleme hatası')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}

      {value ? (
        <div className="relative rounded-xl overflow-hidden border bg-muted">
          <div className="aspect-video relative">
            <Image src={value} alt="Yüklenen görsel" fill className="object-cover" sizes="400px" />
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => onChange('')}
              className="h-7 w-7 p-0"
            >
              <X className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => fileRef.current?.click()}
          className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors"
        >
          {uploading ? (
            <Loader2 className="w-8 h-8 mx-auto text-primary animate-spin" />
          ) : (
            <>
              <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Tıklayın veya sürükleyin</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WebP (maks 10MB)</p>
            </>
          )}
        </div>
      )}

      {/* URL ile ekleme */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="veya görsel URL'si yapıştırın..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 text-xs px-3 py-1.5 border rounded-lg bg-background"
        />
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleUpload(file)
          e.target.value = ''
        }}
      />
    </div>
  )
}
