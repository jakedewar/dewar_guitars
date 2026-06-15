import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="container mx-auto px-6 py-14 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/" aria-label="Dewar Guitars home">
            <Image
              src="/images/DEWAR v3 trans AI 1.svg"
              alt="Dewar Guitars"
              width={150}
              height={45}
              className="h-12 w-auto opacity-95"
            />
          </Link>

          <p className="type-body max-w-xl text-on-dark-secondary">
            Handcrafted guitars built in Holliston, Massachusetts. Only 12 instruments per year.
          </p>

          <Button asChild variant="luxury" size="lg" className="w-full sm:w-auto">
            <Link href="mailto:info@dewarguitars.com">Get in Touch</Link>
          </Button>

          <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/10 pt-6 sm:flex-row sm:gap-6">
            <p className="type-caption text-on-dark-subtle">
              © {year} Dewar Guitars
            </p>
            <a
              href="https://instagram.com/dewarguitars"
              className="type-caption text-on-dark-subtle transition-colors duration-300 hover:text-dewar-red focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
