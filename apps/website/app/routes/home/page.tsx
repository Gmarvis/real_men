import { Hero } from "~/components/hero"
import { Problem } from "~/components/problem"
import { Pillars } from "~/components/pillars"
import { PhotosSection } from "~/components/photos-section"
import { VideosSection } from "~/components/videos-section"
import { Footer } from "~/components/footer"

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Pillars />
        <PhotosSection />
        <VideosSection />
      </main>
      <Footer />
    </>
  )
}
