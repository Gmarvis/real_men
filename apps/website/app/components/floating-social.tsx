import { Instagram, Youtube, Facebook, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/realmen", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400" },
  { icon: Youtube, href: "https://youtube.com/@realmen", label: "YouTube", color: "hover:bg-red-600" },
  { icon: Facebook, href: "https://facebook.com/realmen", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "https://twitter.com/realmen", label: "X", color: "hover:bg-black" },
]

export function FloatingSocial() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`group w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
          >
            <Icon className="w-5 h-5 text-white" />
          </a>
        )
      })}
      
      {/* Decorative line */}
      <div className="w-px h-16 bg-primary/30 mx-auto mt-2" />
    </div>
  )
}
