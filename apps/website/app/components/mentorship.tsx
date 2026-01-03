import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { UserPlus, Users } from "lucide-react"

export function Mentorship() {
  return (
    <section id="mentorship" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">The Mentorship Covenant</h2>
            <p className="text-2xl italic">"Iron Sharpening Iron"</p>
            <p className="text-sm italic mb-8">- Proverbs 27:17 </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 bg-card text-card-foreground">
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-4">The Mentor's Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To pour out wisdom, model integrity, and intercede for the younger generation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-card text-card-foreground">
              <CardContent className="p-8">
                <UserPlus className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-4">The Mentee's Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To walk in humility, maintain consistency, and live accountably.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8">
              Apply to be a Mentor
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              Apply to be a Mentee
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
