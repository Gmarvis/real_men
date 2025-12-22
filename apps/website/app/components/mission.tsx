import { Card, CardContent } from "~/components/ui/card"
import { Shield, Heart, Lock, Star, UserCheck, Home, Award } from "lucide-react"

const values = [
  { icon: Shield, title: "Godliness", description: "We represent Jesus in all things." },
  { icon: Heart, title: "Purity", description: "We are committed to the battle for holiness." },
  { icon: Lock, title: "Integrity", description: "Our secret lives match our public lives." },
  { icon: Star, title: "Excellence", description: "We serve with the highest standard." },
  { icon: UserCheck, title: "Accountability", description: "We believe iron sharpens iron." },
  { icon: Home, title: "Responsibility", description: "We embrace our role as providers and protectors." },
  { icon: Award, title: "Faithfulness", description: "We are the men God can find." },
]

export function Mission() {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-center text-balance">
            Mission & Conviction
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-primary-foreground/90">
                A community where men embrace and live out their biblical calling fearlessly.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-primary-foreground/90">
                To raise a generation of God-fearing young men who are courageous to lead a life of integrity in every
                sphere of life.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">The Seven Values</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card
                key={value.title}
                className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-serif text-xl font-bold mb-2 text-primary-foreground">{value.title}</h4>
                  <p className="text-primary-foreground/80 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto space-y-6 border-t border-primary-foreground/20 pt-12">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">Guiding Verses</h3>

          <blockquote className="bg-primary-foreground/10 border-l-4 border-accent p-6 md:p-8 rounded-r backdrop-blur-sm">
            <p className="text-lg md:text-xl mb-3 italic leading-relaxed">
              "Most men will proclaim each his own goodness, but who can find a faithful man?"
            </p>
            <cite className="text-sm font-mono text-primary-foreground/70">— Proverbs 20:6</cite>
          </blockquote>

          <blockquote className="bg-primary-foreground/10 border-l-4 border-accent p-6 md:p-8 rounded-r backdrop-blur-sm">
            <p className="text-lg md:text-xl mb-3 italic leading-relaxed">
              "Take courage and be a man. Observe the requirements of the Lord your God and follow all his ways."
            </p>
            <cite className="text-sm font-mono text-primary-foreground/70">— 1 Kings 2:2b-3a</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
