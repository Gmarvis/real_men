import { useState, useEffect } from "react";

import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "~/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/#resources", label: "Resources" },
  { href: "/#strategy", label: "Strategy" },
  { href: "https://realmen.substack.com", label: "Blog", external: true },
  { href: "/gallery", label: "Gallery" },
];

function NavLink({ href, label, onClick, external }: { href: string; label: string; onClick?: () => void; external?: boolean }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative text-sm font-medium text-primary/80 hover:text-primary transition-colors py-1 group inline-flex items-center gap-1"
    >
      {label}
      {external && <ExternalLink className="w-3 h-3" />}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </a>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 text-primary transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.png" alt="Real Men Logo" className="w-10 h-10" />
            {/* <div className="text-2xl font-bold tracking-tight">
              REAL MEN
            </div> */}
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} external={item.external} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/get-involved">
              <Button className="ml-4">Get Involved</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  external={item.external}
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <a href="/get-involved" className="w-full">
                <Button variant="default" className="w-full">
                  Get Involved
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
