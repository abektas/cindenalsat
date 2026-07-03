'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { images as staticImages } from '@/lib/images'

interface SiteContentContextType {
  getImage: (key: string) => string
  loaded: boolean
}

const SiteContentContext = createContext<SiteContentContextType>({
  getImage: () => '',
  loaded: false,
})

// Mapping from site content keys to static image keys
const keyToStaticMap: Record<string, string> = {
  hero_image: 'hero',
  team_image: 'team',
  fair_image: 'fair',
  warehouse_image: 'warehouse',
  handshake_image: 'handshake',
}

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Record<string, string>>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('/api/public/site-content')
      .then((r) => r.json())
      .then((data) => {
        if (data && typeof data === 'object') setContent(data)
      })
      .catch(() => {})
      .finally(() => setLoaded(true))
  }, [])

  const getImage = (key: string): string => {
    // Check DB content first
    if (content[key]) return content[key]
    // Fallback to static images
    const staticKey = keyToStaticMap[key] || key
    return (staticImages as any)[staticKey] || ''
  }

  return (
    <SiteContentContext.Provider value={{ getImage, loaded }}>
      {children}
    </SiteContentContext.Provider>
  )
}

export function useSiteContent() {
  return useContext(SiteContentContext)
}
