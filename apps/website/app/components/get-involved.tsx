import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { BookOpen, Hand, Heart, Mail, MapPin, Phone } from "lucide-react"

const ways = [
  {
    icon: BookOpen,
    title: "Teach",
    description: "Share your wisdom and biblical knowledge with the brotherhood.",
  },
  {
    icon: Hand,
    title: "Lead",
    description: "Guide men into prayer and deeper relationship with God.",
  },
  {
    icon: Heart,
    title: "Partner",
    description: "Support the vision through resources and stewardship.",
  },
]

export function GetInvolved() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Get Involved</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Are you called to teach? To lead men into prayer? To partner with us? Answer the call to stewardship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {ways.map((way) => {
            const Icon = way.icon
            return (
              <Card key={way.title} className="text-center border-2">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{way.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{way.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">Contact Us</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+237 XXX XXX XXX" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us how you'd like to get involved..." rows={5} />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:contact@realmen.org" className="hover:text-primary transition-colors">
                    contact@realmen.org
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+237000000000" className="hover:text-primary transition-colors">
                    +237 XXX XXX XXX
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Yaoundé, Cameroon</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
