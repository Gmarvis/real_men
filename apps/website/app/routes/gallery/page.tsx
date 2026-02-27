import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Navigation } from "~/components/navigation"
import { Footer } from "~/components/footer"
import { Button } from "~/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/gathering-1/DSC03966.jpg",
    caption: "Real Men Gathering",
    event: "Monthly Fellowship",
  },
  {
    src: "/gathering-1/DSC04006.jpg",
    caption: "Fellowship in Action",
    event: "Community Meeting",
  },
  {
    src: "/gathering-1/DSC04013.jpg",
    caption: "United in Purpose",
    event: "Group Session",
  },
  {
    src: "/gathering-1/DSC04020.jpg",
    caption: "Building Bonds",
    event: "Fellowship Event",
  },
  {
    src: "/gathering-1/DSC04025.jpg",
    caption: "Men of Faith",
    event: "Gathering",
  },
  {
    src: "/gathering-1/DSC04026.jpg",
    caption: "Together in Faith",
    event: "Community Event",
  },
  {
    src: "/gathering-1/DSC04057.jpg",
    caption: "Worship & Fellowship",
    event: "Monthly Gathering",
  },
]

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <>
      <Navigation />
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
            <div className="relative max-w-5xl mx-auto">
              {/* Navigation Arrows */}
              <button
                onClick={scrollPrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={scrollNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Embla Carousel */}
              <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0 relative"
                    >
                      <div className="aspect-[16/10] md:aspect-[16/9]">
                        <img
                          src={image.src}
                          alt={image.caption}
                          className="w-full h-full object-cover"
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
                    onClick={() => scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "bg-white w-8"
                        : "bg-white/40 hover:bg-white/60"
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
                    onClick={() => scrollTo(index)}
                    className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === selectedIndex
                        ? "ring-2 ring-white opacity-100"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Image Counter */}
            <div className="text-center mt-6">
              <span className="text-white/60 text-sm">
                {selectedIndex + 1} / {galleryImages.length}
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
