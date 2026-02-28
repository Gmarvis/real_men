import { useCallback, useEffect, useState, useRef } from "react"
import { Footer } from "~/components/footer"
import { Button } from "~/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { galleryImages as baseImages } from "~/lib/images"

// Extend with event info for gallery page
const galleryImages = baseImages.map((img, i) => ({
  ...img,
  event: ["Monthly Fellowship", "Community Meeting", "Group Session", "Fellowship Event", "Gathering", "Community Event", "Monthly Gathering"][i]
}))

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [isTransitioning])

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }, [currentIndex, goToSlide])

  const handleNext = useCallback(() => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }, [currentIndex, goToSlide])

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50
    
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  // Auto-play
  useEffect(() => {
    autoplayRef.current = setInterval(handleNext, 5000)
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [handleNext])

  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
  }

  const resumeAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(handleNext, 5000)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handlePrev, handleNext])

  return (
    <>
      <main className="min-h-screen pt-16">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
              <p className="text-xl text-primary-foreground/80">
                Moments from our gatherings and fellowship
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Carousel */}
        <section className="py-16 md:py-24 bg-black/95">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Main Carousel */}
            <div 
              className="relative max-w-5xl mx-auto"
              onMouseEnter={pauseAutoplay}
              onMouseLeave={resumeAutoplay}
            >
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Carousel Slides */}
              <div 
                className="overflow-hidden rounded-xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-300 ease-out will-change-transform"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full relative"
                    >
                      <div className="aspect-[16/10] md:aspect-[16/9]">
                        <img
                          src={image.src}
                          srcSet={image.srcset}
                          sizes="(max-width: 1280px) 100vw, 1280px"
                          alt={image.caption}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </div>
                      {/* Caption Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-1">
                          {image.caption}
                        </h3>
                        <p className="text-white/70">{image.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-white/40 hover:bg-white/60 w-2.5"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-8 max-w-5xl mx-auto">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                      index === currentIndex
                        ? "ring-2 ring-white opacity-100"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="text-center mt-6">
              <span className="text-white/60 text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <a href="/">
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
