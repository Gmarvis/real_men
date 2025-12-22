import { Button } from "~/components/ui/button"
import { Play } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center bg-white text-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slogan Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium tracking-wide">God's Way, Every Day</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance">
            "Take Courage, and Be a Man."
          </h1>

          {/* Bible Reference */}
          <p className="text-lg md:text-xl text-primary/80 mb-8 font-mono">— 1 Kings 2:2</p>

          {/* Sub-headline */}
          <p className="text-sm md:text-lg mb-12 leading-relaxed text-primary/90 max-w-3xl mx-auto text-pretty">
            We are a brotherhood of young men dedicated to reclaiming our God-given identity and leading lives of
            integrity in every sphere of life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 w-full sm:w-auto">
              Join the Brotherhood
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 w-full sm:w-auto border-primary/30 hover:text-primary hover:bg-primary/10 text-primary"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Our Journey
            </Button>
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
