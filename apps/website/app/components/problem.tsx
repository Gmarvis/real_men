import { Play } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

export function Problem() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Left */}
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Breach in our Community
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Many men have lost touch with their God-given identity and calling. This vacuum has led to a lack of
                leadership and fellowship, resulting in broken homes, communities, and nations.
              </p>
            </div>
          </div>

          {/* Video Right */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              {!isVideoPlaying ? (
                <>
                  <img 
                    src="/IMG-20251223-WA0020.jpg" 
                    alt="Introduction Video" 
                    className="w-full h-full object-cover"
                  />
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
                  src="https://www.youtube.com/embed/q9MEjHU6AcQ?autoplay=1"
                  title="Real Men Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
