import { Navigation } from "~/components/navigation"
import { Hero } from "~/components/hero"
import { Problem } from "~/components/problem"
import { Pillars } from "~/components/pillars"
import { Mission } from "~/components/mission"
import { Journey } from "~/components/journey"
import { Ministry } from "~/components/ministry"
import { Impact } from "~/components/impact"
import { Vision } from "~/components/vision"
import { Mentorship } from "~/components/mentorship"
import { GetInvolved } from "~/components/get-involved"
import { Footer } from "~/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Pillars />
        <Mission />
        <Journey />
        <Ministry />
        <Impact />
        <Vision />
        <Mentorship />
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}
