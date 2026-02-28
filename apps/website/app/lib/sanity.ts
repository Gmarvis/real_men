import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client configuration
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'bwmk93u6',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster responses in production
})

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Type definitions for Sanity event
export interface SanityEvent {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  fullDescription?: any[] // Portable text
  image: SanityImageSource
  date: string
  endDate?: string
  venue: string
  address: string
  featured?: boolean
  highlights?: string[]
  schedule?: {
    time: string
    activity: string
  }[]
  speakers?: {
    name: string
    role?: string
    image?: SanityImageSource
  }[]
}

// GROQ Queries
export const queries = {
  // Get all events, ordered by date
  allEvents: `*[_type == "event"] | order(date asc) {
    _id,
    title,
    slug,
    description,
    image,
    date,
    endDate,
    venue,
    address,
    featured
  }`,

  // Get upcoming events only
  upcomingEvents: `*[_type == "event" && date >= now()] | order(date asc) {
    _id,
    title,
    slug,
    description,
    image,
    date,
    endDate,
    venue,
    address,
    featured
  }`,

  // Get single event by slug
  eventBySlug: `*[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    fullDescription,
    image,
    date,
    endDate,
    venue,
    address,
    featured,
    highlights,
    schedule,
    speakers
  }`,
}

// Helper functions
export async function getAllEvents(): Promise<SanityEvent[]> {
  return sanityClient.fetch(queries.allEvents)
}

export async function getUpcomingEvents(): Promise<SanityEvent[]> {
  return sanityClient.fetch(queries.upcomingEvents)
}

export async function getEventBySlug(slug: string): Promise<SanityEvent | null> {
  return sanityClient.fetch(queries.eventBySlug, { slug })
}

// Date formatting helpers (moved from events.ts)
export function formatEventDate(dateString: string) {
  const date = new Date(dateString)
  return {
    dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleDateString('en-US', { month: 'long' }),
    year: date.getFullYear().toString(),
    time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
  }
}

export function getGoogleMapsUrl(venue: string, address: string) {
  const query = encodeURIComponent(`${venue}, ${address}`)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

export function getDayColor(dayOfWeek: string) {
  const colors: Record<string, string> = {
    Mon: 'bg-blue-500',
    Tue: 'bg-green-500',
    Wed: 'bg-amber-500',
    Thu: 'bg-purple-500',
    Fri: 'bg-pink-500',
    Sat: 'bg-indigo-500',
    Sun: 'bg-red-500',
  }
  return colors[dayOfWeek] || 'bg-primary'
}
