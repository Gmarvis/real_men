import { Zap, Repeat, Users } from "lucide-react"
import { Card, CardHeader, CardContent } from "~/components/ui/card"
import { CardDecorator } from "~/components/ui/card-decorator"

export const FeaturesSection = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Your Content Scaled. <span className="text-primary">Your Voice Preserved.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three powerful pillars that transform how you create, repurpose, and distribute content—all while keeping your authentic brand voice.
          </p>
        </div>
        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 border-primary/20 *:text-center md:mt-16">
          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6 text-primary" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Clone Your Genius</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Train an AI on your best content to generate posts, articles, and threads that sound authentically you. Zero blank page syndrome.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Repeat className="size-6 text-primary" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Maximize Every Asset</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Upload one video or podcast and get dozens of ready-to-publish posts, articles, and snippets. Your best ideas shouldn't die after one upload.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Users className="size-6 text-primary" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Scale with Your Team</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Multi-workspace management, approval workflows, and unified scheduling. Built for agencies and teams who need control and consistency.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
