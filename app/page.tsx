import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import StoryCarousel from "@/components/StoryCarousel"
import SectionHeader from "@/components/SectionHeader"
import TextureOverlay from "@/components/TextureOverlay"
import WorkshopBlock from "@/components/WorkshopBlock"
import ScarcityBadge from "@/components/ScarcityBadge"

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-on-dark-primary">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ink hero-optimized">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DewarGuitars_1.webp"
            alt="Handcrafted Dewar Guitar"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink/60" />
          <TextureOverlay variant="light" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 md:mb-20 hero-fade-in">
            <div className="mb-6 sm:mb-8">
              <Image
                src="/images/Dewar v1b trans SVG 1.svg"
                alt=""
                width={600}
                height={180}
                className="h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96 w-auto mx-auto opacity-95 drop-shadow-2xl luxury-text-shadow"
                priority
                aria-hidden="true"
              />
            </div>
            <div className="w-16 sm:w-24 h-px bg-dewar-red/70 mx-auto mb-6 sm:mb-8" />
            <h1 className="sr-only">Dewar Guitars — Heirloom Luthiery</h1>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide leading-tight text-on-dark-primary max-w-5xl mx-auto drop-shadow-lg luxury-text-shadow hero-text-reveal">
              Only 12 guitars per year.
            </p>
            <p className="type-lead text-on-dark-secondary max-w-4xl mx-auto mt-4 sm:mt-6 hero-text-reveal">
              Each instrument a unique masterpiece, handcrafted by one artisan from raw wood to final note.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 hero-text-reveal">
            <Button
              asChild
              variant="luxury"
              size="lg"
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 lg:py-6 w-full sm:w-auto hero-button-glow"
            >
              <a href="mailto:info@dewarguitars.com">
                <span className="relative z-10">Inquire About the 2026 Collection</span>
              </a>
            </Button>
            <p className="type-caption text-on-dark-muted">
              Limited edition · Handcrafted in Holliston, Massachusetts
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-dewar-red/40 relative scroll-indicator">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-dewar-red/80 rounded-full" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <div className="pt-20">
        <StoryCarousel />
      </div>

      <WorkshopBlock />

      {/* Collection Section */}
      <section id="collection" className="py-24 md:py-32 bg-ink text-on-dark-primary relative overflow-hidden">
        <TextureOverlay variant="light" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="The Distiller Collection"
            title="The Distiller"
            lead="Only 12 will be built this year. Each guitar is a unique masterpiece with hand-painted finishes that will never be exactly replicated."
            theme="dark"
          />

          <div className="flex justify-center mb-10">
            <ScarcityBadge />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group relative overflow-hidden bg-ink/50 backdrop-blur-sm border border-white/10 hover:border-dewar-red/30 transition-all duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-square lg:aspect-auto lg:h-96 relative overflow-hidden">
                  <Image
                    src="/images/DewarGuitars_1.webp"
                    alt="Dewar Distiller Collection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />

                  <div className="absolute top-6 right-6 bg-ink/40 backdrop-blur-sm text-on-dark-primary px-4 py-2 type-eyebrow border border-dewar-red/50">
                    Limited Edition
                  </div>

                  <div className="absolute bottom-6 left-6 font-display text-4xl sm:text-5xl text-on-dark-subtle group-hover:text-on-dark-muted transition-colors duration-500">
                    2026
                  </div>
                </div>

                <div className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
                  <div>
                    <p className="type-eyebrow text-dewar-red mb-3">2026 Collection</p>
                    <h3 className="type-section-title text-on-dark-primary mb-4">
                      The Distiller
                    </h3>
                    <p className="type-body text-on-dark-secondary mb-6">
                      Each guitar is a unique masterpiece with hand-painted finishes that will never be exactly replicated.
                    </p>

                    <div className="space-y-3 mb-6">
                      {[
                        "Custom Tool-less Bridge",
                        "Hand-wound Humbuckers",
                        "Streamlined C-shape Neck",
                        "90% Hand-crafted Components",
                        "Unique Hand-painted Finish",
                      ].map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-dewar-red rounded-full flex-shrink-0" />
                          <span className="type-body text-on-dark-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="type-price text-on-dark-primary mb-1">$2,499</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link href="/guitar/distiller">
                      <Button
                        variant="luxury"
                        className="w-full py-4 text-sm"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-24 md:py-32 bg-parchment text-on-light-primary relative overflow-hidden">
        <TextureOverlay variant="dark" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="Craftsmanship"
            title={
              <>
                Every Detail
                <br />
                <span className="text-on-light-secondary">Hand-Shaped</span>
              </>
            }
            lead="Most builders buy parts. Master luthier Jim Dewar machines his own. Every fret, every bridge, every curve is hand-shaped in his Holliston workshop."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { src: "/images/DewarGuitars_3.webp", alt: "Detail craftsmanship", label: "Detail Work" },
              { src: "/images/DewarGuitars_4.webp", alt: "Hardware details", label: "Custom Hardware" },
              { src: "/images/DewarGuitars_5.webp", alt: "Finish work", label: "Finish Work" },
            ].map((item) => (
              <div key={item.label} className="group relative h-80 overflow-hidden bg-parchment">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/5 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/70 to-transparent">
                  <p className="font-display text-lg text-on-dark-primary">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 md:py-36 bg-ink text-on-dark-primary relative overflow-hidden">
        <TextureOverlay variant="light" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Get in Touch"
              title={
                <>
                  Interested in the
                  <br />
                  2026 Collection?
                </>
              }
              lead="Only 12 will be built this year. Email us to ask about availability, pricing, or placing an order."
              theme="dark"
              className="mb-8"
            />
          </div>

          <div className="max-w-lg mx-auto space-y-8">
            <Button
              asChild
              variant="luxury"
              size="lg"
              className="w-full text-lg py-6"
            >
              <a href="mailto:info@dewarguitars.com">Email info@dewarguitars.com</a>
            </Button>

            <p className="type-caption text-on-dark-subtle">
              Limited to 12 instruments · Handcrafted in Holliston, Massachusetts
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
