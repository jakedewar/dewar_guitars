import Link from "next/link"
import Image from "next/image"
import MobileNavigation from "@/components/MobileNavigation"

const navLinks = [
  { href: "/#story", label: "Story" },
  { href: "/guitar/distiller", label: "Collection" },
  { href: "/#craftsmanship", label: "Craftsmanship" },
  { href: "mailto:info@dewarguitars.com", label: "Contact" },
]

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/DEWAR v3 trans AI 1.svg"
              alt="Dewar Guitars"
              width={150}
              height={45}
              className="h-8 sm:h-10 w-auto opacity-95"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-dark-secondary hover:text-on-dark-primary transition-colors duration-300 font-body text-[0.9375rem] uppercase tracking-[0.08em] relative nav-link-underline focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
