import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import MobileNavigation from "@/components/MobileNavigation"
import CustomImageGallery from "@/components/ImageGallery"

interface GuitarPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function GuitarPage({ params }: GuitarPageProps) {
  const { id } = await params
  
  // Single Distiller model data - works for any ID since it's the only model
  const guitar = {
    name: "The Distiller",
    status: "Available",
    model: "Distiller",
    finish: "Hand-painted (Unique to each guitar)",
    price: "$2,499",
    features: "90% Hand-crafted Components",
    description: "Our flagship model, the Distiller is a combination of skillfully hand-crafted unique design innovations, paired with the creature comforts and familiarities of our favorite player guitars. Built at our build-barn in Massachusetts, USA, the Distiller fuses an intricate, custom-designed bridge for granular, tool-less action and intonation, a streamlined 'c-shape' neck for comfort and stability while accessing all 22 frets, and two, hand-wound humbuckers for a truly never-felt-before playing experience. Each guitar features a unique hand-painted finish that will never be exactly replicated.",
    specifications: {
      model: "Distiller",
      finish: "Hand-painted (Unique to each guitar)",
      neck: "Streamlined C-shape",
      frets: "22 Frets",
      bridge: "Custom-designed tool-less bridge",
      pickups: "Two hand-wound humbuckers",
      components: "90% hand-crafted in-house",
      build_location: "Massachusetts, USA"
    },
    images: ["DewarGuitars_1.webp", "DewarGuitars_2.webp", "DewarGuitars_3.webp", "DewarGuitars_4.webp", "DewarGuitars_5.webp"],
    shipping: "Free shipping in the continental United States",
    returns: "Contact info@dewarguitars.com for returns inquiries"
  }


  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
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
            
            <nav className="hidden lg:flex items-center space-x-12">
              <Link href="/#story" className="text-white/90 hover:text-white transition-all duration-500 font-normal tracking-[0.1em] text-sm uppercase relative group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
                Story
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link href="/#collection" className="text-white/90 hover:text-white transition-all duration-500 font-normal tracking-[0.1em] text-sm uppercase relative group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
                Collection
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link href="/#craftsmanship" className="text-white/90 hover:text-white transition-all duration-500 font-normal tracking-[0.1em] text-sm uppercase relative group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
                Craftsmanship
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link href="/#apply" className="text-white/90 hover:text-white transition-all duration-500 font-normal tracking-[0.1em] text-sm uppercase relative group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
                Apply
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </nav>
            
            <MobileNavigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Image Gallery - Sticky */}
            <div className="lg:sticky lg:top-20">
              <CustomImageGallery 
                images={guitar.images} 
                guitarName={guitar.name}
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="text-xs sm:text-sm text-white/80 tracking-[0.3em] uppercase mb-3 sm:mb-4">The Distiller Collection</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-3 sm:mb-4 leading-tight">
                  {guitar.name}
                </h1>
                <div className="w-16 sm:w-24 h-px bg-white/70 mb-4 sm:mb-6"></div>
                
                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white mb-2 leading-tight">
                    {guitar.price}
                  </div>
                  <div className="text-xs sm:text-sm text-white/75 tracking-[0.2em] uppercase">
                    Handcrafted Investment
                  </div>
                </div>
                
                <p className="text-lg sm:text-xl text-white/90 font-normal leading-relaxed mb-4 sm:mb-6">
                  {guitar.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/80 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-white/90 font-normal">{guitar.finish} Finish</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/80 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-white/90 font-normal">Custom Tool-less Bridge</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/80 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-white/90 font-normal">{guitar.features}</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/80 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-white/90 font-normal">Hand-wound Humbuckers</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="pt-8 sm:pt-12 border-t border-white/20">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-normal tracking-wide mb-2 uppercase leading-tight">Specifications</h3>
                  <div className="w-12 sm:w-16 h-px bg-white/60"></div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Primary Specifications */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-xs sm:text-sm text-white/75 tracking-[0.2em] uppercase">Model Details</h4>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm sm:text-base text-white/85 font-normal">Model</span>
                        <span className="text-sm sm:text-base text-white font-normal">{guitar.specifications.model}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm sm:text-base text-white/85 font-normal">Finish</span>
                        <span className="text-sm sm:text-base text-white font-normal">{guitar.specifications.finish}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm sm:text-base text-white/85 font-normal">Neck Profile</span>
                        <span className="text-sm sm:text-base text-white font-normal">{guitar.specifications.neck}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-xs sm:text-sm text-white/75 tracking-[0.2em] uppercase">Technical</h4>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm sm:text-base text-white/85 font-normal">Frets</span>
                        <span className="text-sm sm:text-base text-white font-normal">{guitar.specifications.frets}</span>
                      </div>
                      <div className="flex justify-between items-start py-2 border-b border-white/10">
                        <span className="text-sm sm:text-base text-white/85 font-normal">Bridge</span>
                        <span className="text-sm sm:text-base text-white font-normal text-right max-w-xs ml-4">{guitar.specifications.bridge}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-sm sm:text-base text-white/85 font-normal">Pickups</span>
                        <span className="text-sm sm:text-base text-white font-normal">{guitar.specifications.pickups}</span>
                      </div>
                    </div>
                  </div>

                  {/* Craftsmanship Details */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-xs sm:text-sm text-white/75 tracking-[0.2em] uppercase">Craftsmanship</h4>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      <div className="flex justify-between items-start py-2 border-b border-white/10">
                        <span className="text-sm sm:text-base text-white/85 font-normal">Components</span>
                        <span className="text-sm sm:text-base text-white font-normal text-right max-w-xs ml-4">{guitar.specifications.components}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm sm:text-base text-white/85 font-normal">Build Location</span>
                        <span className="text-sm sm:text-base text-white font-normal">{guitar.specifications.build_location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 sm:pt-8 space-y-4 sm:space-y-6">
                <Button 
                  size="lg" 
                  className="w-full bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-black text-base sm:text-lg py-3 sm:py-4 rounded-none font-normal tracking-[0.1em] transition-all duration-500 hover:border-white touch-manipulation active:scale-95 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  Contact Sales
                </Button>
                
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1 h-1 bg-white/80 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/85 font-normal leading-relaxed">{guitar.shipping}</span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1 h-1 bg-white/80 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/85 font-normal leading-relaxed">{guitar.returns}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-6 sm:mb-8 leading-tight">
              Where Tone Meets Power
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 font-normal max-w-3xl mx-auto leading-relaxed">
              Built at our build-barn in Massachusetts, USA, the Distiller fuses unique design innovations with the creature comforts of our favorite player guitars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-normal leading-tight">Custom Bridge</h3>
              <p className="text-sm sm:text-base text-gray-800 font-normal leading-relaxed">Intricate, custom-designed bridge for granular, tool-less action and intonation.</p>
            </div>
            
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-normal leading-tight">Streamlined Neck</h3>
              <p className="text-sm sm:text-base text-gray-800 font-normal leading-relaxed">C-shape neck for comfort and stability while accessing all 22 frets.</p>
            </div>
            
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-normal leading-tight">Hand-wound Pickups</h3>
              <p className="text-sm sm:text-base text-gray-800 font-normal leading-relaxed">Two hand-wound humbuckers for a truly never-felt-before playing experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy a Distiller Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4 sm:mb-6 md:mb-8 leading-tight">
              Why Buy a Distiller?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-3xl mx-auto leading-relaxed px-2">
              Artists deserve artistry. Every musician deserves an instrument that matches their passion, dedication, and creative vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <div className="relative w-full h-40 sm:h-48 md:h-56 mb-3 sm:mb-4 md:mb-6">
                <Image
                  src="/images/DewarGuitars_1.webp"
                  alt="Hand-crafted guitar detail"
                  fill
                  className="object-contain opacity-80"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal leading-tight">Passion-Driven Craft</h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-sm mx-auto px-2">
                Each Distiller is born from a decade of uncompromising dedication to the art of guitar making. This isn&apos;t just manufacturing—it&apos;s artistry.
              </p>
            </div>
            
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <div className="relative w-full h-40 sm:h-48 md:h-56 mb-3 sm:mb-4 md:mb-6">
                <Image
                  src="/images/DewarGuitars_2.webp"
                  alt="Custom bridge detail"
                  fill
                  className="object-contain opacity-80"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal leading-tight">Uncompromising Quality</h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-sm mx-auto px-2">
                With 90% hand-crafted components and meticulous attention to every detail, the Distiller represents the pinnacle of guitar craftsmanship.
              </p>
            </div>
            
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1">
              <div className="relative w-full h-40 sm:h-48 md:h-56 mb-3 sm:mb-4 md:mb-6">
                <Image
                  src="/images/DewarGuitars_3.webp"
                  alt="Innovation meets tradition"
                  fill
                  className="object-contain opacity-80"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal leading-tight">Innovation Meets Tradition</h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-sm mx-auto px-2">
                Revolutionary features like our tool-less bridge system combined with time-honored techniques create an instrument that&apos;s both cutting-edge and timeless.
              </p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <div className="bg-white/10 border border-white/20 p-6 sm:p-8 md:p-12 rounded-none max-w-4xl mx-2 sm:mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-wide mb-3 sm:mb-4 md:mb-6 leading-tight">
                Limited to 12 Guitars Per Year
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-normal leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2">
                Each Distiller is a rare masterpiece. When you own one, you&apos;re not just buying a guitar—you&apos;re joining an exclusive community of artists who demand nothing less than perfection.
              </p>
              <div className="text-xs sm:text-sm text-white/80 tracking-[0.2em] uppercase">
                Exclusivity • Artistry • Legacy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <Image
                src="/images/DEWAR v3 trans AI 1.svg"
                alt="Dewar Guitars"
                width={150}
                height={45}
                className="h-10 sm:h-12 w-auto opacity-90"
              />
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-sm">
                  Handcrafted in Massachusetts. Only 12 guitars per year. Each instrument represents a decade of uncompromising craftsmanship.
                </p>
                <div className="text-xs text-white/70 tracking-[0.2em] uppercase">
                  Limited Edition • Artisanal Craftsmanship
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-white font-normal tracking-[0.1em] text-sm uppercase">Contact</h3>
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="mailto:info@dewarguitars.com" 
                  className="block text-sm sm:text-base text-white/85 hover:text-white transition-colors duration-300 font-normal tracking-wide touch-manipulation focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  info@dewarguitars.com
                </a>
                <div className="text-sm sm:text-base text-white/85 font-normal tracking-wide">
                  Massachusetts, USA
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-white font-normal tracking-[0.1em] text-sm uppercase">Follow</h3>
              <div className="flex space-x-6 sm:space-x-8">
                <a 
                  href="#" 
                  className="text-sm sm:text-base text-white/85 hover:text-white transition-colors duration-300 font-normal tracking-wide touch-manipulation focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-sm sm:text-base text-white/85 hover:text-white transition-colors duration-300 font-normal tracking-wide touch-manipulation focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  YouTube
                </a>
              </div>
              
              <div className="pt-2 sm:pt-4">
                <Link 
                  href="/#apply" 
                  className="inline-block border border-white/40 text-white/90 hover:border-white/60 hover:text-white transition-all duration-500 font-normal tracking-[0.05em] text-xs sm:text-sm uppercase px-4 sm:px-6 py-2 sm:py-3 touch-manipulation active:scale-95 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  Apply for 2025
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
              <div className="text-xs text-white/70 tracking-[0.2em] uppercase text-center md:text-left">
                © 2024 Dewar Guitars • All Rights Reserved
              </div>
              <div className="text-xs text-white/70 tracking-[0.2em] uppercase text-center md:text-right">
                Handcrafted in Massachusetts
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
