import { Link } from "react-router"
import { motion } from "motion/react"
import { MapPin, Clock, Calendar, ArrowRight } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem } from "~/components/ui/animated-section"
import { getGoogleMapsUrl, getDayColor } from "~/lib/sanity"

interface Event {
  id: string
  slug: string
  title: string
  description: string
  date: string
  dayOfWeek: string
  day: string
  month: string
  year: string
  time: string
  endTime?: string
  venue: string
  address: string
  image: string
  featured?: boolean
}

interface EventsPageProps {
  events: Event[]
}

export default function EventsPage({ events }: EventsPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeUp className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary/80">Upcoming Events</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">
              Events at a Glance
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us at our upcoming gatherings, workshops, and conferences. Experience community, growth, and transformation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="pb-20 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {events.map((event, index) => (
                <StaggerItem key={event.id}>
                  <motion.div
                    className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 `}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {event.featured && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="flex flex-col md:flex-row min-w-0">
                      {/* Date Section */}
                      <div className="md:w-48 lg:w-56 p-6 md:p-8 flex md:flex-col items-center md:items-start gap-4 md:gap-2 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/50 shrink-0">
                        <span className={`${getDayColor(event.dayOfWeek)} text-white text-xs font-bold px-3 py-1 rounded`}>
                          {event.dayOfWeek}
                        </span>
                        <div className="flex items-baseline gap-2 md:block">
                          <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-none">
                            {event.day}
                          </span>
                          <div className="text-muted-foreground text-sm md:mt-1">
                            {event.month}, {event.year}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
                        {/* Event Details */}
                        <div className="flex-1 p-6 md:p-8 min-w-0">
                          <Link to={`/events/${event.slug}`}>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                              {event.title}
                            </h3>
                          </Link>
                          <p className="text-muted-foreground mb-6 line-clamp-2">
                            {event.description}
                          </p>
                          
                          <div className="space-y-3">
                            <a 
                              href={event.address.startsWith('http') ? event.address : getGoogleMapsUrl(event.venue, event.address)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group/location overflow-hidden"
                            >
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/location:bg-primary/20 transition-colors">
                                <MapPin className="w-4 h-4 text-primary" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="font-medium text-foreground group-hover/location:text-primary transition-colors block truncate">{event.venue}</span>
                                <span className="text-muted-foreground text-sm block truncate group-hover/location:underline">
                                  {event.address.startsWith('http') ? 'View on Maps' : event.address}
                                </span>
                              </div>
                            </a>
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Clock className="w-4 h-4 text-primary" />
                              </div>
                              <span className="font-medium text-foreground">{event.time}</span>
                            </div>
                          </div>

                          <Link
                            to={`/events/${event.slug}`}
                            className="mt-6 inline-flex items-center gap-2 text-primary font-medium group/btn hover:gap-3 transition-all"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Event Image */}
                        <Link to={`/events/${event.slug}`} className="lg:w-72 xl:w-80 h-48 lg:h-auto relative overflow-hidden block">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent lg:bg-gradient-to-l" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Don't Miss Out
            </h2>
            <p className="text-muted-foreground mb-8">
              Stay updated on all our events. Follow us on social media or subscribe to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@real-men-org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Follow Our Journey
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
