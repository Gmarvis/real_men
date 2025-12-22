import { Card, CardContent } from "~/components/ui/card"
import { Users, Wrench, Zap, Globe } from "lucide-react"

const pillars = [
  {
    icon: Users,
    title: "Mentorship",
    description: "Bridging the generational gap by connecting young men with godly mentors.",
  },
  {
    icon: Wrench,
    title: "Skill Hub",
    description: "Equipping men to be productive and excellent in their professional and personal lives.",
  },
  {
    icon: Zap,
    title: "Recharge",
    description: "Spiritual renewal through monthly gatherings and annual conventions.",
  },
  {
    icon: Globe,
    title: "Global Plan",
    description: "A vision to map out and target new regions for Kingdom expansion.",
  },
]

export function Pillars() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">The Four Pillars of Strategy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our approach to building godly men who lead with integrity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Card key={pillar.title} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">{pillar.title}</h3>
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
