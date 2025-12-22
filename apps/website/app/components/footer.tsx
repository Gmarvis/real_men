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
                A brotherhood of young men dedicated to reclaiming our God-given identity.
              </p>
              <p className="text-accent font-medium">God's Way, Every Day.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#journey" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Our Journey
                  </a>
                </li>
                <li>
                  <a href="#ministry" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Ministry
                  </a>
                </li>
                <li>
                  <a href="#mentorship" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Mentorship
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>

            {/* Core Values */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Our Values</h4>
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
          <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Real Men. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
