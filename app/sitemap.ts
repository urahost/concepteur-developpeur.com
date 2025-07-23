import type { MetadataRoute } from 'next'
import { page_routes } from '@/lib/routes-config'
import { locales } from '@/lib/locale'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://concepteur-developpeur.com'
  
  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]

  // Pages de documentation pour chaque locale
  const docPages = locales.flatMap(locale => 
    page_routes.map(route => ({
      url: `${baseUrl}/${locale}/docs${route.href}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  // Pages de blog pour chaque locale
  const blogPages = locales.map(locale => ({
    url: `${baseUrl}/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...docPages, ...blogPages]
}