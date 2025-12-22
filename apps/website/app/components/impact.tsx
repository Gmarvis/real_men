import { TrendingUp, Users2, BookText, Target } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "12",
    label: "Monthly Gatherings",
    description: "Successfully moved from 11 meetings (2024) to 12 sustained gatherings in 2025",
  },
  {
    icon: Users2,
    value: "120+",
    label: "Joint Meeting Attendance",
    description: "Landmark Joint Meeting with Tahora brought together brothers across communities",
  },
  {
    icon: BookText,
    value: "3",
    label: "Thematic Deep Dives",
    description: "Building Winning Systems, Financial Fitness, and Emotional Intelligence",
  },
  {
    icon: Target,
    value: "2",
    label: "Leadership Retreats",
    description: "Bi-annual retreats that established clearer departmental roles and maturity",
  },
]

export function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <span className="text-sm font-medium">2025 in Review</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">A Year of Harvest and Growth</h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Demonstrating fruitfulness and credibility through consistent action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="bg-primary-foreground/10 border border-primary-foreground/20 p-8 rounded-lg backdrop-blur-sm"
              >
                <Icon className="h-10 w-10 text-accent mb-4" />
                <div className="font-serif text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-3">{stat.label}</div>
                <p className="text-primary-foreground/80 leading-relaxed">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
