import type { MetadataRoute } from 'next'

const siteUrl = 'https://cindenalsat.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // AI crawlers — explicitly allowed
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'AnthropicAI', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Omgilibot', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      // General — allow all
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
