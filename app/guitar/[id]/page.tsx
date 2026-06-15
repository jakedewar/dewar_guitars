import Image from "next/image"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import CustomImageGallery from "@/components/ImageGallery"
import SectionHeader from "@/components/SectionHeader"
import TextureOverlay from "@/components/TextureOverlay"
import KlaviyoProductView from "@/components/KlaviyoProductView"
import InquiryForm from "@/components/InquiryForm"
import type { KlaviyoProduct } from "@/lib/klaviyo"

interface GuitarPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function GuitarPage({ params }: GuitarPageProps) {
  const { id } = await params

  const guitar = {
    name: "The Distiller",
    finish: "Hand-painted (Unique to each guitar)",
    price: "$2,499",
    features: "90% Hand-crafted Components",
    description: "Our flagship model, the Distiller is a combination of skillfully hand-crafted unique design innovations, paired with the creature comforts and familiarities of our favorite player guitars. Built at our build-barn in Holliston, Massachusetts, the Distiller fuses an intricate, custom-designed bridge for granular, tool-less action and intonation, a streamlined 'c-shape' neck for comfort and stability while accessing all 22 frets, and two, hand-wound humbuckers for a truly never-felt-before playing experience. Each guitar features a unique hand-painted finish that will never be exactly replicated.",
    specifications: {
      model: "Distiller",
      finish: "Hand-painted (Unique to each guitar)",
      neck: "Streamlined C-shape",
      frets: "22 Frets",
      bridge: "Custom-designed tool-less bridge",
      pickups: "Two hand-wound humbuckers",
      components: "90% hand-crafted in-house",
      build_location: "Holliston, Massachusetts",
    },
    images: ["DewarGuitars_1.webp", "DewarGuitars_2.webp", "DewarGuitars_3.webp", "DewarGuitars_4.webp", "DewarGuitars_5.webp"],
    shipping: "Free shipping in the continental United States",
    returns: "Returns handled by request",
  }

  const craftFeatures = [
    {
      image: "/images/DewarGuitars_4.webp",
      alt: "Custom bridge detail",
      title: "Custom Bridge",
      description: "Intricate, custom-designed bridge for granular, tool-less action and intonation.",
    },
    {
      image: "/images/DewarGuitars_3.webp",
      alt: "Neck profile detail",
      title: "Streamlined Neck",
      description: "C-shape neck for comfort and stability while accessing all 22 frets.",
    },
    {
      image: "/images/DewarGuitars_5.webp",
      alt: "Hand-wound pickups",
      title: "Hand-wound Pickups",
      description: "Two hand-wound humbuckers for a truly never-felt-before playing experience.",
    },
  ]

  const klaviyoProduct: KlaviyoProduct = {
    ProductName: guitar.name,
    ProductID: id,
    SKU: id,
    Categories: ["Guitars", "2026 Collection"],
    ImageURL: `https://dewarguitars.com/images/${guitar.images[0]}`,
    URL: `https://dewarguitars.com/guitar/${id}`,
    Brand: "Dewar Guitars",
    Price: 2499,
  }

  return (
    <main className="min-h-screen bg-ink text-on-dark-primary">
      <KlaviyoProductView product={klaviyoProduct} />
      <SiteHeader />

      <section className="pt-24 sm:pt-32 pb-8 sm:pb-16 bg-ink relative">
        <TextureOverlay variant="light" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-20">
              <CustomImageGallery images={guitar.images} guitarName={guitar.name} />
            </div>

            <div className="flex flex-col gap-7 sm:gap-8">
              <div>
                <p className="type-eyebrow text-on-dark-muted mb-3 sm:mb-4">The Distiller Collection</p>
                <h1 className="type-display text-on-dark-primary mb-3 sm:mb-4">
                  {guitar.name}
                </h1>
                <div className="w-16 sm:w-24 h-px bg-dewar-red/60 mb-4 sm:mb-6" />

                <div className="mb-6 sm:mb-8">
                  <p className="type-price text-on-dark-primary mb-2">{guitar.price}</p>
                  <p className="type-caption text-on-dark-muted">Handcrafted investment</p>
                </div>

                <p className="type-lead text-on-dark-secondary mb-4 sm:mb-6 max-w-3xl">
                  {guitar.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  `${guitar.finish} Finish`,
                  "Custom Tool-less Bridge",
                  guitar.features,
                  "Hand-wound Humbuckers",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 sm:gap-4">
                    <div className="size-2 bg-dewar-red rounded-full flex-shrink-0" />
                    <span className="type-body text-on-dark-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 sm:pt-12 border-t border-white/20">
                <div className="mb-6 sm:mb-8">
                  <h2 className="type-section-title text-on-dark-primary mb-2">Specifications</h2>
                  <div className="w-12 sm:w-16 h-px bg-dewar-red/60" />
                </div>

                {[
                  { group: "Model Details", rows: [
                    { label: "Model", value: guitar.specifications.model },
                    { label: "Finish", value: guitar.specifications.finish },
                    { label: "Neck Profile", value: guitar.specifications.neck },
                  ]},
                  { group: "Technical", rows: [
                    { label: "Frets", value: guitar.specifications.frets },
                    { label: "Bridge", value: guitar.specifications.bridge },
                    { label: "Pickups", value: guitar.specifications.pickups },
                  ]},
                  { group: "Craftsmanship", rows: [
                    { label: "Components", value: guitar.specifications.components },
                    { label: "Build Location", value: guitar.specifications.build_location },
                  ]},
                ].map((section) => (
                  <div key={section.group} className="mb-7 flex flex-col gap-4">
                    <h3 className="type-eyebrow text-brass">{section.group}</h3>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {section.rows.map((row, i) => (
                        <div
                          key={row.label}
                          className={`flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:items-start ${
                            i < section.rows.length - 1 ? "border-b border-white/10" : ""
                          }`}
                        >
                          <span className="type-body text-on-dark-muted">{row.label}</span>
                          <span className="type-body text-on-dark-primary max-w-sm font-semibold sm:ml-4 sm:text-right">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-5 pt-6 sm:gap-6 sm:pt-8">
                <InquiryForm
                  source="guitar-page"
                  productName={guitar.name}
                  submitLabel="Inquire About This Guitar"
                />

                <div className="flex flex-col gap-3">
                  {[guitar.shipping, guitar.returns].map((note) => (
                    <div key={note} className="flex items-start gap-3">
                      <div className="mt-3 size-1.5 bg-dewar-red rounded-full flex-shrink-0" />
                      <span className="type-body text-on-dark-muted leading-relaxed">{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-parchment text-on-light-primary relative overflow-hidden">
        <TextureOverlay variant="dark" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="Innovation"
            title="Where Tone Meets Power"
            lead="Built at our build-barn in Holliston, Massachusetts, the Distiller fuses unique design innovations with the creature comforts of our favorite player guitars."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {craftFeatures.map((feature) => (
              <div key={feature.title} className="group flex flex-col gap-4">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/5 transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-on-light-primary">{feature.title}</h3>
                <p className="type-body text-on-light-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-ink text-on-dark-primary relative overflow-hidden">
        <TextureOverlay variant="light" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <SectionHeader
            eyebrow="Why Dewar"
            title="Why Buy a Distiller?"
            lead="Artists deserve artistry. Every musician deserves an instrument that matches their passion, dedication, and creative vision."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                image: "/images/DewarGuitars_1.webp",
                alt: "Hand-crafted guitar detail",
                title: "Passion-Driven Craft",
                text: "Each Distiller is born from a decade of uncompromising dedication to the art of guitar making. This isn't just manufacturing—it's artistry.",
              },
              {
                image: "/images/DewarGuitars_2.webp",
                alt: "Custom bridge detail",
                title: "Uncompromising Quality",
                text: "With 90% hand-crafted components and meticulous attention to every detail, the Distiller represents the pinnacle of guitar craftsmanship.",
              },
              {
                image: "/images/DewarGuitars_3.webp",
                alt: "Innovation meets tradition",
                title: "Innovation Meets Tradition",
                text: "Revolutionary features like our tool-less bridge system combined with time-honored techniques create an instrument that's both cutting-edge and timeless.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center flex flex-col gap-4 md:gap-6 sm:col-span-2 lg:col-span-1 last:sm:col-span-2 last:lg:col-span-1">
                <div className="relative w-full h-40 sm:h-48 md:h-56 mb-3 sm:mb-4 md:mb-6 overflow-hidden">
                  <Image src={item.image} alt={item.alt} fill className="object-contain opacity-90" />
                  <div className="absolute inset-0 bg-ink/20" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-on-dark-primary">{item.title}</h3>
                <p className="type-body text-on-dark-secondary max-w-sm mx-auto px-2">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
