import { Card, CardContent } from "~/components/ui/card"
import { BookOpen, CalendarIcon, Coffee, Megaphone } from "lucide-react"

const ministryPillars = [
  {
    icon: BookOpen,
    title: "The Altar & The Word",
    subtitle: "Spiritual Growth",
    description:
      "We sustain this organization spiritually through intercession and sound doctrine. We walk intentionally with men to build character, discipline, and Christlike maturity.",
  },
  {
    icon: CalendarIcon,
    title: "The Order of the Gathering",
    subtitle: "Events & Programs",
    description:
      'From "The Spotlight" testimonies to our monthly "Recharge" sessions, we ensure every program is sequenced for spiritual depth and meaningful engagement.',
  },
  {
    icon: Coffee,
    title: "The Table & The Storehouse",
    subtitle: "Fellowship & Stewardship",
    description:
      "Brotherhood is built over the BBQ and the sports court. We manage our resources with absolute integrity, ensuring that the King's storehouse serves the King's men.",
  },
  {
    icon: Megaphone,
    title: "The Trumpet & The Testimony",
    subtitle: "Communications",
    description:
      "We make the vision seen and heard. Through digital storytelling and Kingdom content, we align men with the heart of God.",
  },
]

export function Ministry() {
  return (
    <section id="ministry" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">The Life of the Brotherhood</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ministry Pillars that shape who we are</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ministryPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card key={pillar.title} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{pillar.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
