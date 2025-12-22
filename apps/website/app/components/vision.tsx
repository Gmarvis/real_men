import { CheckCircle2 } from "lucide-react"

const goals = [
  {
    title: "Intentional Mentorship",
    description: "Launching the formal Mentorship Covenant.",
  },
  {
    title: "Identity & Merch",
    description: "Introducing Real Men identity symbols and merchandise.",
  },
  {
    title: "Outreach Expansion",
    description: "The inaugural Real Men Conference.",
  },
  {
    title: "Digital Reach",
    description: "Launching this web platform and a broader social media ecosystem.",
  },
  {
    title: "Legal Foundation",
    description: "Completing the formal Real Men registration.",
  },
]

export function Vision() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Looking Ahead</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">The 2026 Vision</h2>
            <p className="text-xl text-muted-foreground italic">Where God is Leading Us</p>
          </div>

          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-card border-2 border-border p-6 rounded-lg hover:border-primary transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
