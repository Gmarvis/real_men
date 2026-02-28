import { Instagram, Youtube, Facebook, Mail } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/r.e.a.l_m.e.n?igsh=emc0d2sxOWZlOHM0", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@real-men-org", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/share/18KVrA9LSn/?mibextid=wwXIfr", label: "Facebook" },
  { icon: Mail, href: "mailto:contact@realmen.org", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-3xl font-serif font-bold mb-4">REAL MEN</div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                A community of young men dedicated to reclaiming our God-given identity.
              </p>
              <p className="text-accent font-medium mb-6">God's Way, Every Day.</p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5 text-primary-foreground/80" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/who-we-are" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="/#strategy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Strategy
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/get-involved" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>

            {/* Core Values */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Our Core Values</h4>
              <ul className="space-y-1 text-sm text-primary-foreground/80">
                <li>Godliness</li>
                <li>Purity</li>
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Accountability</li>
                <li>Responsibility</li>
                <li>Faithfulness</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Real Men. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {socialLinks.slice(0, 4).map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
