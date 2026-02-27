import { Shield, Heart, Lock, Star, UserCheck, Home, Award, Play } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "~/components/ui/animated-section"

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  return (
    <>
      {/* The Bridge - Text Left, Video Right */}
      <section id="about" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Left */}
            <SlideInLeft>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-sm font-medium text-primary">The Bridge</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Building a Community of Godly Men
                </h2>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    In a world where men struggle with identity, purpose, and broken homes, 
                    Real Men exists to be the bridge—connecting men to God's design for their lives.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Our Vision</h4>
                        <p className="text-muted-foreground">
                          A community where men embrace and live out their biblical calling fearlessly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Our Mission</h4>
                        <p className="text-muted-foreground">
                          To raise a generation of God-fearing young men who are courageous to lead a life of integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            {/* Video Right */}
            <SlideInRight>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                  {!isVideoPlaying ? (
                    <>
                      {/* Video Thumbnail */}
                      <img 
                        src="/IMG-20251223-WA0020.jpg" 
                        alt="Introduction Video" 
                        className="w-full h-full object-cover opacity-80"
                      />
                      {/* Play Button Overlay */}
                      <motion.button
                        className="absolute inset-0 flex items-center justify-center group"
                        onClick={() => setIsVideoPlaying(true)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                        </motion.div>
                      </motion.button>
                    </>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                      title="Real Men Introduction"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10 hidden lg:block" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-lg -z-10 hidden lg:block" />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Values Section - Circular Layout */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeUp className="mb-16">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">Our Core Values</h3>
            <p className="text-center text-primary-foreground/70 max-w-2xl mx-auto">
              The principles that guide us as we grow together in faith
            </p>
          </FadeUp>

          {/* Honeycomb/Balanced Layout - 3 rows: 3-4-3 on desktop, stacked on mobile */}
          <div className="max-w-5xl mx-auto">
            {/* Row 1: 3 values */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4" staggerDelay={0.1}>
              {values.slice(0, 3).map((value) => {
                const Icon = value.icon
                return (
                  <StaggerItem key={value.title}>
                    <motion.div
                      className="group bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-300"
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="font-serif text-lg font-bold mb-2 text-primary-foreground">{value.title}</h4>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">{value.description}</p>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>

            {/* Row 2: 4 values (offset for honeycomb effect) */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 md:-mx-8" staggerDelay={0.1}>
              {values.slice(3, 7).map((value) => {
                const Icon = value.icon
                return (
                  <StaggerItem key={value.title}>
                    <motion.div
                      className="group bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-all duration-300"
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="font-serif text-lg font-bold mb-2 text-primary-foreground">{value.title}</h4>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">{value.description}</p>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  )
}
