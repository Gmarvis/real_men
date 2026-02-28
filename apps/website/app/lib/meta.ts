// Site-wide SEO constants
export const SITE_NAME = 'Real Men'
export const SITE_URL = 'https://realmen.org' // Update with actual domain
export const SITE_DESCRIPTION = 'Real Men is a faith-based community empowering men to grow spiritually, build authentic relationships, and become the leaders God created them to be.'
export const SITE_KEYWORDS = 'mens ministry, christian men, faith community, mens fellowship, spiritual growth, mens retreat, bible study for men, christian brotherhood'
export const DEFAULT_IMAGE = '/logos/RM_Logo.png'
export const TWITTER_HANDLE = '@realmenorg' // Update with actual handle

export interface MetaOptions {
  title: string
  description: string
  keywords?: string
  image?: string
  type?: 'website' | 'article' | 'event' | 'profile'
  url?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  noIndex?: boolean
}

/**
 * Creates comprehensive meta tags for SEO optimization
 * Includes Open Graph, Twitter Cards, and standard meta tags
 */
export function createMeta({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  url,
  publishedTime,
  modifiedTime,
  section,
  noIndex = false,
}: MetaOptions) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const canonicalUrl = url ? `${SITE_URL}${url}` : SITE_URL
  
  const metaArray: Array<Record<string, string>> = [
    // Basic meta
    { title: fullTitle },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords || SITE_KEYWORDS },
    { name: 'author', content: SITE_NAME },
    { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' },
    
    // Canonical URL
    { tagName: 'link', rel: 'canonical', href: canonicalUrl },
    
    // Open Graph
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:image', content: fullImage },
    { property: 'og:image:alt', content: title },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: TWITTER_HANDLE },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: fullImage },
    { name: 'twitter:image:alt', content: title },
  ]

  // Add article-specific meta if it's an article/event
  if (type === 'article' || type === 'event') {
    if (publishedTime) {
      metaArray.push({ property: 'article:published_time', content: publishedTime })
    }
    if (modifiedTime) {
      metaArray.push({ property: 'article:modified_time', content: modifiedTime })
    }
    if (section) {
      metaArray.push({ property: 'article:section', content: section })
    }
  }

  return metaArray
}

/**
 * Creates JSON-LD structured data for Organization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/RM_Logo.png`,
    description: SITE_DESCRIPTION,
    sameAs: [
      'https://www.facebook.com/realmenorg',
      'https://www.instagram.com/realmenorg',
      'https://www.youtube.com/@realmenorg',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@realmen.org',
    },
  }
}

/**
 * Creates JSON-LD structured data for an Event
 */
export function getEventSchema(event: {
  title: string
  description: string
  date: string
  endDate?: string
  venue: string
  address: string
  image?: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.date,
    endDate: event.endDate || event.date,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.address,
      },
    },
    image: event.image ? `${SITE_URL}${event.image}` : `${SITE_URL}${DEFAULT_IMAGE}`,
    organizer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/events/${event.slug}`,
  }
}

/**
 * Creates JSON-LD structured data for a WebPage
 */
export function getWebPageSchema(page: {
  title: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logos/RM_Logo.png`,
      },
    },
  }
}

/**
 * Creates JSON-LD BreadcrumbList for navigation
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}
