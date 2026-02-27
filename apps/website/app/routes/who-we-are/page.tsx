import { Navigation } from "~/components/navigation"
import { Footer } from "~/components/footer"
import { Mission } from "~/components/mission"
import { Journey } from "~/components/journey"
import { Button } from "~/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function WhoWeArePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Who We Are</h1>
              <p className="text-xl text-primary-foreground/80">
                Discover our mission, values, and the journey that shaped Real Men
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <Mission />

        {/* Journey */}
        <Journey />

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
