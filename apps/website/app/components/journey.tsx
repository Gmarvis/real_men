import { Calendar } from "lucide-react"

const timeline = [
  {
    period: "2020 – Early 2021",
    title: "The First Few Drops",
    description: "Brief 10-minute conversations after service at EBC. No structure, no name—just a hunger for truth.",
  },
  {
    period: "July 23, 2021",
    title: "The First Gathering",
    description: "Our first all-night meeting at EBS. A conviction was born: Something was forming.",
  },
  {
    period: "2022",
    title: "Finding our Rhythm",
    description: "Monthly meetings began and the fellowship expanded beyond Etoug-Ebe.",
  },
  {
    period: "Mid 2022 – Mid 2023",
    title: "The Silent Season",
    description: "A year of silence where activities paused, but the vision was preserved in prayer.",
  },
  {
    period: "May 2023 – Present",
    title: "Re-ignition",
    description: "A renewed sense of calling. Since our first re-gathering at Jolly Life, it has never been the same.",
  },
]

export function Journey() {
  return (
    <section id="journey" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Our Journey</h2>
            <p className="text-xl text-muted-foreground italic">The Story of Faithfulness</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 md:left-1/2" />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <div className="bg-card border-2 border-border p-6 rounded-lg">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-mono font-medium">{event.period}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
