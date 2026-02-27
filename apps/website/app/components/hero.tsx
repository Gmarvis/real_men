import { Button } from "~/components/ui/button"
import { Play } from "lucide-react"
import { useState, useEffect } from "react"

const guidingVerses = [
  { text: "Take courage and be a man. Observe the requirements of the Lord your God.", ref: "1 Kings 2:2-3" },
  { text: "Most men will proclaim each his own goodness, but who can find a faithful man?", ref: "Proverbs 20:6" },
  { text: "Iron sharpens iron, and one man sharpens another.", ref: "Proverbs 27:17" },
  { text: "Be watchful, stand firm in the faith, act like men, be strong.", ref: "1 Corinthians 16:13" },
]

export function Hero() {
  const [currentVerse, setCurrentVerse] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % guidingVerses.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center bg-white text-primary overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/IMG-20251223-WA0020.jpg" 
          alt="Real Men Gathering" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slogan Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Real Men</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-79xl lg:text-8xl font-bold mb-6 leading-tight text-balance">
            The World Needs Godly Men
          </h1>

          {/* Animated Guiding Verses */}
          <div className="h-24 md:h-20 mb-6 flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
              {guidingVerses.map((verse, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentVerse 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-base md:text-lg italic text-primary/80 mb-1">
                    "{verse.text}"
                  </p>
                  <p className="text-sm font-mono text-primary/60">— {verse.ref}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-semibold text-primary mb-12">
            God's Way, Every Day
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/get-involved">
              <Button size="lg" className="text-base px-8 w-full sm:w-auto">
                Join Us
              </Button>
            </a>
            <a href="/who-we-are">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 w-full sm:w-auto border-primary/30 hover:text-primary hover:bg-primary/10 text-primary"
              >
                <Play className="mr-2 h-4 w-4" />
                Our Journey
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
