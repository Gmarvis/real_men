import { useLoaderData } from "react-router"
import { getAllEvents, formatEventDate, urlFor, type SanityEvent } from "~/lib/sanity"
import Page from "./page"

export async function loader() {
  const sanityEvents = await getAllEvents()
  
  // Transform Sanity events to match the page's expected format
  const events = sanityEvents.map((event: SanityEvent) => {
    const dateInfo = formatEventDate(event.date)
    const endDateInfo = event.endDate ? formatEventDate(event.endDate) : null
    
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
      image: event.image ? urlFor(event.image).width(800).url() : '/gathering-1/DSC04057.jpg',
      featured: event.featured,
    }
  })
  
  return { events }
}

export default function Index() {
  const { events } = useLoaderData<typeof loader>()
  return <Page events={events} />
}
