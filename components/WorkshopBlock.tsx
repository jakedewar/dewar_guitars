import Image from "next/image"
import TextureOverlay from "@/components/TextureOverlay"

export default function WorkshopBlock() {
  return (
    <section className="py-24 md:py-32 bg-ink text-on-dark-primary relative overflow-hidden">
      <TextureOverlay variant="light" />
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative group">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] overflow-hidden">
              <Image
                src="/images/DewarGuitars_2.webp"
                alt="Jim Dewar at work in the Holliston workshop"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />
            </div>
            <div className="absolute -inset-3 border border-dewar-red/30 pointer-events-none" aria-hidden="true" />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="type-eyebrow text-on-dark-muted mb-4">The Workshop</p>
              <h2 className="type-section-title text-on-dark-primary mb-6">
                Meet Jim Dewar
              </h2>
              <div className="w-16 h-px bg-dewar-red/60 mb-8" />
              <p className="type-lead text-on-dark-secondary mb-6 max-w-2xl">
                Master luthier Jim Dewar machines every part, carves every contour, and voices every note from his build-barn in Holliston, Massachusetts.
              </p>
              <p className="type-body text-on-dark-muted max-w-2xl">
                For over a decade, he has built the guitar he always wanted to play — not by assembling parts, but by shaping raw wood into instruments that will outlast their owners.
              </p>
            </div>

            <blockquote className="border-l-2 border-dewar-red pl-6">
              <p className="font-display text-2xl sm:text-3xl text-on-dark-primary leading-snug italic">
                &ldquo;Most builders buy parts. I machine my own.&rdquo;
              </p>
              <footer className="type-caption text-on-dark-muted mt-4">
                Jim Dewar — Holliston, MA
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
