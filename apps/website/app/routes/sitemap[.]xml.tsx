import { getAllEvents, type SanityEvent } from "~/lib/sanity"
import { SITE_URL } from "~/lib/meta"

// Static pages with their priorities and change frequencies
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/who-we-are', priority: '0.8', changefreq: 'monthly' },
  { url: '/get-involved', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery', priority: '0.6', changefreq: 'weekly' },
  { url: '/events', priority: '0.9', changefreq: 'daily' },
]

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function loader() {
  // Fetch all events from Sanity
  let events: SanityEvent[] = []
  try {
    events = await getAllEvents()
  } catch (error) {
    console.error('Failed to fetch events for sitemap:', error)
  }

  const today = new Date().toISOString().split('T')[0]

  // Build sitemap XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  // Add static pages
  for (const page of staticPages) {
    xml += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  }

  // Add dynamic event pages
  for (const event of events) {
    const eventDate = event.date ? event.date.split('T')[0] : today
    xml += `  <url>
    <loc>${SITE_URL}/events/${escapeXml(event.slug.current)}</loc>
    <lastmod>${eventDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
  }

  xml += `</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  })
}
