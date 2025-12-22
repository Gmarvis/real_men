import * as React from "react"
import { ArrowRight, Menu, X, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react"
import { GridMotion } from "~/components/ui/grid-motion"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { AnimatedGroup } from "../ui/animated-group"
import { Logo } from "../ui/logo"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Contact", href: "#contact" },
]

const gridItems = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", // Social media on phone
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80", // Instagram grid
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", // Laptop with content
  "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=800&q=80", // Social media marketing
  "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80", // Content writing
  "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80", // Video content
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", // Team collaboration
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", // Content creation
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80", // Social media apps
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Analytics dashboard
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", // Social media on phone
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80", // Instagram grid
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", // Laptop with content
  "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=800&q=80", // Social media marketing
  "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80", // Content writing
  "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80", // Video content
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", // Team collaboration
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", // Content creation
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80", // Social media apps
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Analytics dashboard
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", // Social media on phone
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80", // Instagram grid
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", // Laptop with content
  "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=800&q=80", // Social media marketing
  "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80", // Content writing
  "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80", // Video content
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-20 w-full px-2 group">
        <div
          className={cn(
            "mx-auto mt-1 max-w-6xl px-4 transition-all duration-300 lg:px-8",
            isScrolled && "bg-background/50 backdrop-blur-lg rounded-2xl",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-0">
            <div className="flex w-full justify-between lg:w-auto">
              <a href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button size="sm">
                  <span>Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export const HeroSection = () => {
  return (
    <section>
      <div className="relative pt-24 md:pt-36">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              <a
                href="#services"
                className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span className="text-foreground text-sm">The AI-Powered Content Operations Hub</span>
                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </a>

              <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                Dont just Create{" "}
                <span className="inline-block text-primary text-6xl md:text-7xl xl:text-[5.25rem] font-semibold">
                  Start Scaling Today.
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                Write once, transform everything, and publish everywhere—all in your authentic voice. 
                Get back 80% of your content production time without sacrificing brand quality.
              </p>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <div key={1} className="bg-primary/10 rounded-[14px] border border-primary/20 p-0.5">
                <Button size="lg" className="rounded-xl px-5 text-base">
                  <span className="text-nowrap">Start Your Free Trial</span>
                </Button>
              </div>
              <Button key={2} size="lg" variant="ghost" className="h-10.5 rounded-xl px-5 hover:text-primary">
                <span className="text-nowrap">See How It Works</span>
              </Button>
            </AnimatedGroup>
          </div>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="relative mt-8 overflow-hidden px-6 sm:mt-12 md:mt-20">
            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-primary/20 p-4 shadow-lg shadow-primary/15 ring-1">
              <div className="bg-linear-to-br from-primary/5 to-primary/10 dark:from-primary/20 dark:to-primary/30 aspect-15/8 relative rounded-2xl border border-primary/20 overflow-hidden">
                <GridMotion items={gridItems} gradientColor="hsl(var(--primary) / 0.1)" className="h-full w-full" />
              </div>
            </div>
          </div>

          <section className="bg-background pb-16 pt-16 md:pb-32">
            <div className="group relative m-auto max-w-5xl px-6">
              <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                <a href="#contact" className="block text-sm duration-150 hover:opacity-75 text-primary">
                  <span>Ready to 5x Your Content Output?</span>
                  <ArrowRight className="ml-1 inline-block size-3" />
                </a>
              </div>
              <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-5 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                <div className="flex items-center justify-center">
                  <Linkedin className="h-8 w-8 text-muted-foreground/60" />
                </div>
                <div className="flex items-center justify-center">
                  <Twitter className="h-8 w-8 text-muted-foreground/60" />
                </div>
                <div className="flex items-center justify-center">
                  <Facebook className="h-8 w-8 text-muted-foreground/60" />
                </div>
                <div className="flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-muted-foreground/60" />
                </div>
                <div className="flex items-center justify-center">
                  <Youtube className="h-8 w-8 text-muted-foreground/60" />
                </div>
              </div>
            </div>
          </section>
        </AnimatedGroup>
      </div>
    </section>
  )
}
