import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Mail, MapPin, Phone, Users, Heart } from "lucide-react"

export function GetInvolved() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Get Involved
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Join a community of men committed to living out God's purpose. 
              Whether you want to be part of our gatherings or support the vision, there's a place for you.
            </p>
          </div>
        </div>
      </section>

      {/* Two Options Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Join Us */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Join Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Become part of the Real Men community. Attend our monthly gatherings, 
                  connect with like-minded men, and grow in your faith journey together.
                </p>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Monthly gatherings and fellowship
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Biblical teaching and discipleship
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Accountability and mentorship
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Annual retreats and conventions
                  </li>
                </ul>
                <a href="#contact-form">
                  <Button className="w-full" size="lg">Join the Community</Button>
                </a>
              </CardContent>
            </Card>

            {/* Partner With Us */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Partner With Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Support the vision of raising godly men. Partner through donations, 
                  mentorship, or by sharing your expertise and resources with the community.
                </p>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Financial support and donations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Become a mentor to young men
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Share skills and expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Provide resources and venues
                  </li>
                </ul>
                <a href="#contact-form">
                  <Button variant="outline" className="w-full" size="lg">Become a Partner</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Contact Info Side */}
              <div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Ready to take the next step? Reach out to us. Whether you have questions, 
                  want to join a gathering, or feel called to partner—we'd love to hear from you.
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
                          I'm interested in...
                        </label>
                        <select 
                          id="interest" 
                          className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select an option...</option>
                          <option value="join">Joining the community</option>
                          <option value="donate">Making a donation</option>
                          <option value="mentor">Becoming a mentor</option>
                          <option value="partner">Partnering with resources</option>
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
