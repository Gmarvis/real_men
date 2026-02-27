import { Navigation } from "~/components/navigation"
import { Footer } from "~/components/footer"
import { Button } from "~/components/ui/button"
import { ArrowLeft } from "lucide-react"

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

        {/* Gallery Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-muted aspect-[4/3]"
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-serif text-lg font-bold">{image.caption}</h3>
                      <p className="text-sm text-white/80">{image.event}</p>
                    </div>
                  </div>
                </div>
              ))}
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
