import { Navigation } from "~/components/navigation"
import { GetInvolved } from "~/components/get-involved"
import { Footer } from "~/components/footer"

export default function GetInvolvedPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}
