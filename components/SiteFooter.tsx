import Link from "next/link"
import Image from "next/image"

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <Image
              src="/images/DEWAR v3 trans AI 1.svg"
              alt="Dewar Guitars"
              width={150}
              height={45}
              className="h-12 w-auto opacity-90"
            />
            <div className="space-y-3">
              <p className="type-body text-on-dark-secondary max-w-sm">
                Handcrafted by master luthier Jim Dewar in Holliston, Massachusetts. Only 12 guitars per year. Each instrument represents a decade of uncompromising craftsmanship.
              </p>
              <p className="type-caption text-on-dark-subtle">
                Limited edition · Artisanal craftsmanship
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="type-eyebrow text-on-dark-primary">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@dewarguitars.com"
                className="block type-body text-on-dark-secondary hover:text-dewar-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
              >
                info@dewarguitars.com
              </a>
              <p className="type-body text-on-dark-secondary">
                Holliston, Massachusetts
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="type-eyebrow text-on-dark-primary">Follow</h3>
            <div className="flex space-x-8">
              <a
                href="https://instagram.com/dewarguitars"
                className="type-body text-on-dark-secondary hover:text-dewar-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
              >
                Instagram
              </a>
              <a
                href="#"
                className="type-body text-on-dark-secondary hover:text-dewar-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
              >
                YouTube
              </a>
            </div>

            <div className="pt-4">
              <Link
                href="mailto:info@dewarguitars.com"
                className="inline-block border border-white/40 text-on-dark-secondary hover:border-dewar-red hover:text-dewar-red transition-all duration-500 type-eyebrow px-6 py-3 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="type-caption text-on-dark-subtle">
              © {year} Dewar Guitars · All rights reserved
            </p>
            <p className="type-caption text-on-dark-subtle">
              Handcrafted in Holliston, Massachusetts
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
