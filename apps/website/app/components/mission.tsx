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
    <>
      {/* Vision & Mission - Separate Section */}
      <section id="about" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Left */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/bg-image2.png" 
                  alt="Real Men Community" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10 hidden lg:block" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-lg -z-10 hidden lg:block" />
            </div>

            {/* Text Right */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-balance">
                Mission & Conviction
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    A community where men embrace and live out their biblical calling fearlessly.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    To raise a generation of God-fearing young men who are courageous to lead a life of integrity in every
                    sphere of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Circular Layout */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">Our Core Values</h3>
            <p className="text-center text-primary-foreground/70 max-w-2xl mx-auto">
              The principles that guide us as we grow together in faith
            </p>
          </div>

          {/* Honeycomb/Balanced Layout - 3 rows: 3-4-3 on desktop, stacked on mobile */}
          <div className="max-w-5xl mx-auto">
            {/* Row 1: 3 values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {values.slice(0, 3).map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="group bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-300"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-serif text-lg font-bold mb-2 text-primary-foreground">{value.title}</h4>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Row 2: 4 values (offset for honeycomb effect) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 md:-mx-8">
              {values.slice(3, 7).map((value) => {
                const Icon = value.icon
                return (
                  <div
                    key={value.title}
                    className="group bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-300"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-serif text-lg font-bold mb-2 text-primary-foreground">{value.title}</h4>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
