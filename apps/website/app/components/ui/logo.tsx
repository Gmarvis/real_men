import { Rabbit } from "lucide-react"
import { cn } from "~/lib/utils"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="bg-primary rounded-lg p-2">
        <Rabbit className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">Zonner</span>
    </div>
  )
}
