import { useLoaderData, Link, type LoaderFunctionArgs } from "react-router"
import { motion } from "motion/react"
import { MapPin, Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle, Users, CalendarPlus } from "lucide-react"
import { FadeUp } from "~/components/ui/animated-section"
import { Button } from "~/components/ui/button"
import { getEventBySlug as fetchEventBySlug, getGoogleMapsUrl, getDayColor, formatEventDate, urlFor, getResponsiveImage, type SanityEvent } from "~/lib/sanity"
import { defaultEventImage } from "~/lib/images"
import { createMeta, getEventSchema, getBreadcrumbSchema, SITE_URL } from "~/lib/meta"
import { Footer } from "~/components/footer"

interface TransformedEvent {
  id: string
  slug: string
  title: string
  description: string
  fullDescription?: string
  date: string
  endDate?: string
  dayOfWeek: string
  day: string
  month: string
  year: string
  time: string
  endTime?: string
  venue: string
  address: string
  image: string
  imageSrcset?: string
  featured?: boolean
  highlights?: string[]
  schedule?: { time: string; activity: string }[]
  speakers?: { name: string; role: string; image?: string }[]
}

export async function loader({ params }: LoaderFunctionArgs) {
  const sanityEvent = await fetchEventBySlug(params.slug!)
  
  if (!sanityEvent) {
    return { event: null }
  }
  
  const dateInfo = formatEventDate(sanityEvent.date)
  const endDateInfo = sanityEvent.endDate ? formatEventDate(sanityEvent.endDate) : null
  const heroImage = sanityEvent.image 
    ? getResponsiveImage(sanityEvent.image, [640, 1024, 1440, 1920])
    : defaultEventImage
  
  const event: TransformedEvent = {
    id: sanityEvent._id,
    slug: sanityEvent.slug.current,
    title: sanityEvent.title,
    description: sanityEvent.description,
    fullDescription: sanityEvent.fullDescription 
      ? sanityEvent.fullDescription.map((block: any) => 
          block.children?.map((child: any) => child.text).join('') || ''
        ).join('\n\n')
      : undefined,
    date: sanityEvent.date,
    endDate: sanityEvent.endDate,
    dayOfWeek: dateInfo.dayOfWeek,
    day: dateInfo.day,
    month: dateInfo.month,
    year: dateInfo.year,
    time: dateInfo.time,
    endTime: endDateInfo?.time,
    venue: sanityEvent.venue,
    address: sanityEvent.address,
    image: heroImage.src,
    imageSrcset: heroImage.srcset,
    featured: sanityEvent.featured,
    highlights: sanityEvent.highlights,
    schedule: sanityEvent.schedule,
    speakers: sanityEvent.speakers?.map((s: any) => ({
      name: s.name,
      role: s.role || '',
      image: s.image ? urlFor(s.image).width(200).url() : undefined
    })),
  }
  
  return { event }
}

// Dynamic SEO meta based on event data
export function meta({ data }: { data: { event: TransformedEvent | null } }) {
  if (!data?.event) {
    return createMeta({
      title: 'Event Not Found',
      description: 'The requested event could not be found.',
      url: '/events',
      noIndex: true,
    })
  }

  const { event } = data
  return createMeta({
    title: event.title,
    description: event.description,
    url: `/events/${event.slug}`,
    image: event.image,
    type: 'event',
    publishedTime: event.date,
    keywords: `${event.title}, mens ministry event, christian event, real men gathering, ${event.venue}`,
  })
}

// Generate Google Calendar URL
function getGoogleCalendarUrl(event: {
  title: string
  description: string
  date: string
  endDate?: string
  venue: string
  address: string
}) {
  const startDate = new Date(event.date)
  const endDate = event.endDate 
    ? new Date(event.endDate)
    : new Date(startDate.getTime() + 2 * 60 * 60 * 1000) // Default 2 hours

  const formatDate = (d: Date) => d.toISOString().replace(/-|:|\.\d{3}/g, '')

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    details: event.description,
    location: `${event.venue}, ${event.address}`,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

// Generate ICS file content
function generateICS(event: {
  title: string
  description: string
  date: string
  endDate?: string
  venue: string
  address: string
}) {
  const startDate = new Date(event.date)
  const endDate = event.endDate 
    ? new Date(event.endDate)
    : new Date(startDate.getTime() + 2 * 60 * 60 * 1000)

  const formatDate = (d: Date) => d.toISOString().replace(/-|:|\.\d{3}/g, '').slice(0, -1) + 'Z'

  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Real Men Ministry//Events//EN
BEGIN:VEVENT
UID:${Date.now()}@realmen.org
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/\n/g, '\\n')}
LOCATION:${event.venue}, ${event.address}
END:VEVENT
END:VCALENDAR`

  return ics
}

// Download ICS file
function downloadICS(event: Parameters<typeof generateICS>[0]) {
  const ics = generateICS(event)
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${event.title.replace(/[^a-zA-Z0-9]/g, '-')}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default function EventDetailPage() {
  const { event } = useLoaderData<typeof loader>()

  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
          <Link to="/events">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
        {/* Hero Section with Event Image */}
        <section className="relative pt-6 pb-0 overflow-hidden">
          {/* Back Button */}
          <div className="container mx-auto px-4 lg:px-8 mb-6">
            <Link 
              to="/events"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Events</span>
            </Link>
          </div>

          {/* Event Image Banner */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src={event.image}
              srcSet={event.imageSrcset}
              sizes="100vw"
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Event Badge */}
            {event.featured && (
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wider">
                  Featured Event
                </span>
              </div>
            )}

            {/* Event Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto">
                <FadeUp>
                  <span className={`${getDayColor(event.dayOfWeek)} text-white text-xs font-bold px-3 py-1 rounded mb-4 inline-block`}>
                    {event.dayOfWeek}, {event.month} {event.day}, {event.year}
                  </span>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {event.title}
                  </h1>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-12 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-10 min-w-0">
                  {/* Description */}
                  <FadeUp>
                    <div className="prose prose-lg max-w-none">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">About This Event</h2>
                      <p className="text-muted-foreground leading-relaxed text-lg break-words">
                        {event.fullDescription || event.description}
                      </p>
                    </div>
                  </FadeUp>

                  {/* Highlights */}
                  {event.highlights && (
                    <FadeUp>
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">What to Expect</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {event.highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </FadeUp>
                  )}

                  {/* Schedule */}
                  {event.schedule && (
                    <FadeUp>
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">Event Schedule</h2>
                        <div className="space-y-4">
                          {event.schedule.map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-24 flex-shrink-0">
                                <span className="text-primary font-bold">{item.time}</span>
                              </div>
                              <div className="w-px h-8 bg-gray-200" />
                              <span className="text-foreground">{item.activity}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </FadeUp>
                  )}

                  {/* Speakers */}
                  {event.speakers && (
                    <FadeUp>
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">Featured Speakers</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {event.speakers.map((speaker, index) => (
                            <motion.div
                              key={index}
                              className="p-6 rounded-xl bg-white shadow-sm border border-gray-100 text-center"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {speaker.image ? (
                                <img 
                                  src={speaker.image} 
                                  alt={speaker.name}
                                  loading="lazy"
                                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                                />
                              ) : (
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                  <Users className="w-8 h-8 text-primary" />
                                </div>
                              )}
                              <h3 className="font-bold text-foreground">{speaker.name}</h3>
                              <p className="text-sm text-muted-foreground">{speaker.role}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </FadeUp>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 min-w-0 w-full max-w-full">
                  <div className="sticky top-24 space-y-6 w-full">
                    {/* Event Info Card */}
                    <FadeUp>
                      <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 w-full">
                        <h3 className="font-serif text-xl font-bold text-primary mb-6">Event Details</h3>
                        
                        <div className="space-y-4 w-full">
                          {/* Date */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-foreground">
                                {event.dayOfWeek}, {event.month} {event.day}, {event.year}
                              </p>
                              <p className="text-sm text-muted-foreground">Date</p>
                            </div>
                          </div>

                          {/* Time */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-foreground">
                                {event.time}{event.endTime ? ` - ${event.endTime}` : ''}
                              </p>
                              <p className="text-sm text-muted-foreground">Time</p>
                            </div>
                          </div>

                          {/* Location */}
                          <a 
                            href={event.address.startsWith('http') ? event.address : getGoogleMapsUrl(event.venue, event.address)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 group overflow-hidden"
                          >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1 overflow-hidden">
                              <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                {event.venue}
                              </p>
                              <p className="text-sm text-primary group-hover:underline truncate">
                                {event.address.startsWith('http') ? 'View on Maps' : event.address}
                              </p>
                            </div>
                          </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-8 space-y-3">
                          <a
                            href={event.address.startsWith('http') ? event.address : getGoogleMapsUrl(event.venue, event.address)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                          >
                            <Button className="w-full" size="lg">
                              Get Directions
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </a>
                          
                          {/* Add to Calendar Dropdown */}
                          <div className="relative group">
                            <Button variant="outline" className="w-full" size="lg">
                              <CalendarPlus className="w-4 h-4 mr-2" />
                              Add to Calendar
                            </Button>
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                              <a
                                href={getGoogleCalendarUrl(event)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-sm text-foreground hover:bg-gray-50 rounded-t-lg"
                              >
                                Google Calendar
                              </a>
                              <button
                                onClick={() => downloadICS(event)}
                                className="block w-full text-left px-4 py-3 text-sm text-foreground hover:bg-gray-50 rounded-b-lg"
                              >
                                Apple Calendar / Outlook (.ics)
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FadeUp>

                    {/* Share Card */}
                    <FadeUp>
                      <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                        <h3 className="font-serif text-lg font-bold mb-2">Invite a Brother</h3>
                        <p className="text-primary-foreground/80 text-sm mb-4">
                          Know someone who would benefit from this event? Share it with them!
                        </p>
                        <Button 
                          variant="secondary" 
                          className="w-full"
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: event.title,
                                text: event.description,
                                url: window.location.href,
                              })
                            }
                          }}
                        >
                          Share Event
                        </Button>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
