import { useState } from "react"
import { X } from "lucide-react"

const photos = [
  { src: "/gathering-1/DSC03966.jpg", caption: "Monthly Gathering" },
  { src: "/gathering-1/DSC04006.jpg", caption: "Fellowship in Action" },
  { src: "/gathering-1/DSC04013.jpg", caption: "United in Purpose" },
  { src: "/gathering-1/DSC04020.jpg", caption: "Building Bonds" },
  { src: "/gathering-1/DSC04025.jpg", caption: "Men of Faith" },
  { src: "/gathering-1/DSC04026.jpg", caption: "Together in Faith" },
]

export function PhotosSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section id="photos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
            Moments Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses from our gatherings, retreats, and fellowship moments
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(index)}
              className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square bg-muted"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
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
