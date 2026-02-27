import { Card, CardContent } from "~/components/ui/card"
import { Users, Wrench, Zap, Globe } from "lucide-react"
import { motion } from "motion/react"
import { FadeUp, StaggerContainer, StaggerItem } from "~/components/ui/animated-section"

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
    <section id="strategy" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Our Strategy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our approach to building godly men who lead with integrity
          </p>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <StaggerItem key={pillar.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border hover:border-primary transition-colors h-full">
                    <CardContent className="p-6">
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </motion.div>
                      <h3 className="font-serif text-xl font-bold mb-3">{pillar.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
