'use client'

import { createContext, useContext, ReactNode } from 'react'
import { images as staticImages } from '@/lib/images'

interface SiteContentContextType {
  getImage: (key: string) => string
  loaded: boolean
}

const SiteContentContext = createContext<SiteContentContextType>({
  getImage: () => '',
  loaded: true,
})

// Mapping from site content keys to static image keys
const keyToStaticMap: Record<string, string> = {
  hero_image: 'hero',
  team_image: 'team',
  fair_image: 'fair',
  warehouse_image: 'warehouse',
  handshake_image: 'handshake',
}

/**
 * Static build: images live in /public/images and are resolved from
 * lib/images.ts. There is no database and no API to fetch overrides from.
 */
export function SiteContentProvider({ children }: { children: ReactNode }) {
  const getImage = (key: string): string => {
    const staticKey = keyToStaticMap[key] || key
    return (staticImages as any)[staticKey] || ''
  }

  return (
    <SiteContentContext.Provider value={{ getImage, loaded: true }}>
      {children}
    </SiteContentContext.Provider>
  )
}

export function useSiteContent() {
  return useContext(SiteContentContext)
}
