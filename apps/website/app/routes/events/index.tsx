import { useLoaderData } from "react-router"
import { getAllEvents, formatEventDate, urlFor, getResponsiveImage, type SanityEvent } from "~/lib/sanity"
import { defaultEventImage } from "~/lib/images"
import { createMeta, getWebPageSchema } from "~/lib/meta"
import Page from "./page"

const PAGE_TITLE = 'Events'
const PAGE_DESCRIPTION = 'Discover upcoming Real Men events, gatherings, and retreats. Join us for fellowship, worship, and spiritual growth opportunities.'

export function meta() {
  return createMeta({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/events',
    keywords: 'mens ministry events, christian mens retreat, faith community gatherings, mens fellowship events, bible study meetups',
  })
}

export const handle = {
  structuredData: [
    getWebPageSchema({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: '/events',
    }),
  ],
}

export async function loader() {
  const sanityEvents = await getAllEvents()
  
  // Transform Sanity events to match the page's expected format
  const events = sanityEvents.map((event: SanityEvent) => {
    const dateInfo = formatEventDate(event.date)
    const endDateInfo = event.endDate ? formatEventDate(event.endDate) : null
    const imageData = event.image 
      ? getResponsiveImage(event.image, [400, 600, 800]) 
      : defaultEventImage
    
    return {
      id: event._id,
      slug: event.slug.current,
      title: event.title,
      description: event.description,
      date: event.date,
      dayOfWeek: dateInfo.dayOfWeek,
      day: dateInfo.day,
      month: dateInfo.month,
      year: dateInfo.year,
      time: dateInfo.time,
      endTime: endDateInfo?.time,
      venue: event.venue,
      address: event.address,
      image: imageData.src,
      imageSrcset: imageData.srcset,
      featured: event.featured,
    }
  })
  
  return { events }
}

export default function Index() {
  const { events } = useLoaderData<typeof loader>()
  return <Page events={events} />
}
