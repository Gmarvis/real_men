import { useState, useRef, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { FadeUp } from "~/components/ui/animated-section"

const photos = [
  { src: "/gathering-1/DSC03966.jpg", caption: "Monthly Gathering" },
  { src: "/gathering-1/DSC04006.jpg", caption: "Fellowship in Action" },
  { src: "/gathering-1/DSC04013.jpg", caption: "United in Purpose" },
  { src: "/gathering-1/DSC04020.jpg", caption: "Building Bonds" },
  { src: "/gathering-1/DSC04025.jpg", caption: "Men of Faith" },
  { src: "/gathering-1/DSC04026.jpg", caption: "Together in Faith" },
  { src: "/gathering-1/DSC04057.jpg", caption: "Worship & Fellowship" },
]

export function PhotosSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Get visible slides count based on viewport
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }, [])

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const slideWidth = container.scrollWidth / photos.length
    container.scrollTo({ left: slideWidth * index, behavior: "smooth" })
  }, [])

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? photos.length - getVisibleCount() : currentIndex - 1
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }, [currentIndex, getVisibleCount, scrollToIndex])

  const handleNext = useCallback(() => {
    const maxIndex = photos.length - getVisibleCount()
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }, [currentIndex, getVisibleCount, scrollToIndex])

  // Handle scroll events to update current index
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const slideWidth = container.scrollWidth / photos.length
    const newIndex = Math.round(container.scrollLeft / slideWidth)
    setCurrentIndex(newIndex)
  }, [])

  // Auto-play
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        handleNext()
      }, 4000)
    }

    startAutoplay()

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [handleNext])

  // Pause autoplay on hover/touch
  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
  }

  const resumeAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(handleNext, 4000)
  }

  return (
    <section id="photos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeUp className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
            Moments Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses from our gatherings, retreats, and fellowship moments
          </p>
        </FadeUp>

        {/* Photo Carousel */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onTouchStart={pauseAutoplay}
          onTouchEnd={resumeAutoplay}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all border border-gray-200"
            aria-label="Previous photos"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all border border-gray-200"
            aria-label="Next photos"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Native Scroll Carousel */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth mx-4 md:mx-8 pb-2 scrollbar-hide"
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedPhoto(index)}
                className="flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] cursor-pointer group snap-start"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-1.5 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  scrollToIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View More Link */}
        <div className="text-center mt-10">
          <a 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View Full Gallery →
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={photos[selectedPhoto].src}
            alt={photos[selectedPhoto].caption}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg">
            {photos[selectedPhoto].caption}
          </p>
        </div>
      )}
    </section>
  )
}
