import { useState, useRef } from "react"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import { FadeUp } from "~/components/ui/animated-section"

// Placeholder YouTube Shorts - replace with actual video IDs
const videos = [
  {
    id: "jNQXAC9IVRw", // Sample video placeholder
    title: "What It Means to Be a Real Man",
    thumbnail: "/gathering-1/DSC04057.jpg",
  },
  {
    id: "9bZkp7q19f0", // Sample video placeholder
    title: "Monthly Gathering Highlights",
    thumbnail: "/gathering-1/DSC04020.jpg",
  },
  {
    id: "kJQP7kiw5Fk", // Sample video placeholder
    title: "Testimonies of Transformation",
    thumbnail: "/gathering-1/DSC04013.jpg",
  },
  {
    id: "JGwWNGJdvx8", // Sample video placeholder
    title: "Fellowship Moments",
    thumbnail: "/gathering-1/DSC04006.jpg",
  },
  {
    id: "dQw4w9WgXcQ", // Sample video placeholder
    title: "Brotherhood in Action",
    thumbnail: "/gathering-1/DSC04008.jpg",
  },
  {
    id: "L_jWHffIx5E", // Sample video placeholder
    title: "Faith & Community",
    thumbnail: "/gathering-1/DSC04023.jpg",
  },
]

export function VideosSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return
    const scrollAmount = 280 // Width of one card + gap
    const newScrollLeft = sliderRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
    sliderRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
  }

  return (
    <section id="videos" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
            Watch & Be Inspired
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Short clips from our journey, testimonies, and moments of impact
          </p>
        </FadeUp>

        {/* YouTube Shorts Slider */}
        <div className="relative max-w-6xl mx-auto px-16 md:px-20">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Previous videos"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Next videos"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(index)}
                className="group relative flex-shrink-0 w-[200px] md:w-[260px] overflow-hidden rounded-xl bg-muted aspect-[9/16] cursor-pointer snap-center"
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {video.title}
                  </p>
                </div>

                {/* YouTube Shorts Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Shorts
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint - Mobile */}
          <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
            ← Swipe to see more →
          </p>
        </div>

        {/* Subscribe CTA */}
        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@realmen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors z-10"
            onClick={() => setActiveVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* YouTube Embed - Shorts format */}
          <div 
            className="relative w-full max-w-[350px] aspect-[9/16] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videos[activeVideo].id}?autoplay=1&rel=0`}
              title={videos[activeVideo].title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg text-center max-w-md">
            {videos[activeVideo].title}
          </p>
        </div>
      )}
    </section>
  )
}
