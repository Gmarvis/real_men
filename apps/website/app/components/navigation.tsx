import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "~/components/ui/button";

const navItems: { href: string; label: string; external?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/#resources", label: "Resources" },
  { href: "/#strategy", label: "Strategy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
];

function NavLink({ href, label, onClick, external, isActive }: { href: string; label: string; onClick?: () => void; external?: boolean; isActive?: boolean }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`relative text-sm font-medium transition-colors py-1 group inline-flex items-center gap-1 ${
        isActive ? "text-primary" : "text-primary/80 hover:text-primary"
      }`}
    >
      {label}
      {external && <ExternalLink className="w-3 h-3" />}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-secondary transition-transform duration-300 origin-left ${
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`} />
    </a>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if a nav item is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.slice(1);
    }
    return location.pathname.startsWith(href);
  };

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
          <a href="/" className="flex items-center gap-2">
            <img src="/logos/RM_Logo.png" alt="Real Men Logo" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} external={item.external} isActive={isActiveLink(item.href)} />
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
            className="md:hidden p-2 rounded-lg bg-white/90 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-4 border-t border-primary/10 bg-white rounded-b-xl shadow-lg">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  external={item.external}
                  isActive={isActiveLink(item.href)}
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
