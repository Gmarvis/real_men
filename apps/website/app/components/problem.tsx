import { AlertTriangle } from "lucide-react"

export function Problem() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">The Breach in our Community</h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Many men have lost touch with their God-given identity and calling. This vacuum has led to a lack of
              leadership and fellowship, resulting in broken homes, communities, and nations.
            </p>

            <div className="bg-card border-l-4 border-primary p-6 md:p-8 rounded-r">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-card-foreground">The Answer</h3>
              <p className="text-card-foreground/80 text-lg leading-relaxed">
                Real Men is a community where men embrace and live out their biblical calling fearlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
