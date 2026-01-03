import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { BookOpen, Hand, Heart, Mail, MapPin, Phone, Users, Calendar, MessageCircle } from "lucide-react"

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
  {
    icon: Users,
    title: "Mentor",
    description: "Walk alongside young men as they grow in faith and character.",
  },
  {
    icon: Calendar,
    title: "Organize",
    description: "Help plan and coordinate gatherings, retreats, and events.",
  },
  {
    icon: MessageCircle,
    title: "Connect",
    description: "Spread the word and invite men to join the brotherhood.",
  },
]

export function GetInvolved() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
              <span className="text-sm font-medium">Answer the Call</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Get Involved
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Are you called to teach? To lead men into prayer? To partner with us? 
              The harvest is plentiful—answer the call to stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Serve */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Ways to Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every man has a gift. Find your place in the brotherhood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ways.map((way) => {
              const Icon = way.icon
              return (
                <div
                  key={way.title}
                  className="group p-8 rounded-lg border-2 border-border hover:border-primary bg-card hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">{way.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{way.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Contact Info Side */}
              <div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Ready to take the next step? Reach out to us. Whether you have questions, 
                  want to join a gathering, or feel called to serve—we'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <a href="mailto:contact@realmen.org" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@realmen.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <a href="tel:+237000000000" className="text-muted-foreground hover:text-primary transition-colors">
                        +237 XXX XXX XXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <span className="text-muted-foreground">Yaoundé, Cameroon</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-10 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                  <p className="text-lg italic text-foreground/80 mb-2">
                    "For where two or three gather in my name, there am I with them."
                  </p>
                  <cite className="text-sm font-mono text-muted-foreground">— Matthew 18:20</cite>
                </blockquote>
              </div>

              {/* Contact Form Side */}
              <div>
                <Card className="border-2 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-bold mb-2">Send a Message</h3>
                    <p className="text-muted-foreground mb-8">We'll get back to you as soon as possible.</p>

                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <Input id="name" placeholder="John Doe" className="h-12" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" placeholder="+237 XXX XXX XXX" className="h-12" />
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium mb-2">
                          How would you like to serve?
                        </label>
                        <select 
                          id="interest" 
                          className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select an option...</option>
                          <option value="teach">Teach - Share biblical knowledge</option>
                          <option value="lead">Lead - Guide men in prayer</option>
                          <option value="partner">Partner - Support with resources</option>
                          <option value="mentor">Mentor - Walk alongside young men</option>
                          <option value="organize">Organize - Help with events</option>
                          <option value="connect">Connect - Spread the word</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about yourself and how you'd like to get involved..." 
                          rows={5} 
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full h-12 text-base">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
