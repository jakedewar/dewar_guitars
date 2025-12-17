import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import MobileNavigation from "@/components/MobileNavigation"
import StoryCarousel from "@/components/StoryCarousel"

export default function Home() {
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black hero-optimized">
        {/* Enhanced background with better contrast */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DewarGuitars_1.webp"
            alt="Handcrafted Dewar Guitar"
            fill
            className="object-cover opacity-35"
            priority
          />
          {/* Lighter gradient overlay for better image visibility while maintaining text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
          {/* Subtle luxury pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          {/* Ultra-luxury typography with enhanced mobile optimization */}
          <div className="mb-12 sm:mb-16 md:mb-20 hero-fade-in">
            <div className="mb-6 sm:mb-8">
              <Image
                src="/images/Dewar v1b trans SVG 1.svg"
                alt="Dewar Guitars"
                width={600}
                height={180}
                className="h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96 w-auto mx-auto opacity-95 drop-shadow-2xl luxury-text-shadow"
                priority
              />
            </div>
            <div className="w-16 sm:w-24 h-px bg-white/70 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide leading-relaxed text-white max-w-5xl mx-auto drop-shadow-lg luxury-text-shadow hero-text-reveal">
              Only 12 guitars per year.<br />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90">Each instrument a unique masterpiece, handcrafted by one artisan from raw wood to final note.</span>
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6 hero-text-reveal">
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white/90 text-white hover:bg-white hover:text-black text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 lg:py-6 rounded-none font-light tracking-[0.1em] transition-all duration-700 hover:border-white hover:shadow-2xl hover:shadow-white/20 w-full sm:w-auto group relative overflow-hidden hero-button-glow"
            >
              <span className="relative z-10">Apply for the 2025 Collection</span>
              <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </Button>
            <div className="text-xs sm:text-sm text-white/85 tracking-[0.2em] uppercase">
              Limited Edition • Handcrafted in Massachusetts
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-white/30 relative scroll-indicator">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* The Story Section - Carousel */}
      <div className="pt-20">
        <StoryCarousel />
      </div>

      {/* The Collection Section */}
      <section id="collection" className="py-32 bg-black text-white relative overflow-hidden">
        {/* Subtle luxury pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="text-sm text-white/75 tracking-[0.3em] uppercase mb-6">The Distiller Collection</div>
            <h2 className="text-6xl md:text-7xl font-light tracking-wide mb-6 leading-tight">
              2025
            </h2>
            <div className="w-32 h-px bg-white/50 mx-auto mb-8"></div>
            <p className="text-2xl text-white/90 font-normal tracking-wide mb-4 leading-relaxed">
              Only 12 will be built this year
            </p>
          </div>
          
          {/* Single Distiller Collection Card */}
          <div className="max-w-4xl mx-auto">
            <div className="group relative overflow-hidden bg-gray-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="aspect-square lg:aspect-auto lg:h-96 relative overflow-hidden">
                  <Image
                    src="/images/DewarGuitars_1.webp"
                    alt="Dewar Distiller Collection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  {/* Collection Badge */}
                  <div className="absolute top-6 right-6 bg-white/15 backdrop-blur-sm text-white px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase border border-white/30">
                    Limited Edition
                  </div>
                  
                  {/* Collection Number */}
                  <div className="absolute bottom-6 left-6 text-6xl font-light text-white/30 group-hover:text-white/50 transition-colors duration-500">
                    2025
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 lg:p-12 space-y-6 flex flex-col justify-center">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-normal mb-4 tracking-wide leading-tight">The Distiller</h3>
                    <p className="text-white/90 text-base lg:text-lg font-normal leading-relaxed mb-6">
                      Each guitar is a unique masterpiece with hand-painted finishes that will never be exactly replicated.
                    </p>
                    
                    {/* Key Features */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-white/90 font-normal">Custom Tool-less Bridge</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-white/90 font-normal">Hand-wound Humbuckers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-white/90 font-normal">Streamlined C-shape Neck</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-white/90 font-normal">90% Hand-crafted Components</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-white/80 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-white/90 font-normal">Unique Hand-painted Finish</span>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="text-2xl lg:text-3xl font-normal tracking-wide text-white mb-1 leading-tight">
                        $2,499
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Link href="/guitar/distiller">
                      <button className="w-full border border-white/50 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-700 font-normal tracking-[0.1em] text-sm uppercase py-4 group relative overflow-hidden bg-transparent touch-manipulation active:scale-95 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
                        <span className="relative z-10">View Details</span>
                        <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-32 bg-white text-black relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.01]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-27.6-22.4-50-50-50s-50 22.4-50 50 22.4 50 50 50 50-22.4 50-50z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="text-sm text-gray-600 tracking-[0.3em] uppercase mb-6">Craftsmanship</div>
            <h2 className="text-6xl md:text-7xl font-light tracking-wide mb-8 leading-tight">
              Every Detail<br />
              <span className="text-gray-800">Hand-Shaped</span>
            </h2>
            <div className="w-32 h-px bg-gray-400 mx-auto mb-12"></div>
            <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-gray-800 font-normal">
              Most builders buy parts. Master luthier Jim Dewar machines his own. Every fret, every bridge, every curve is hand-shaped in his Massachusetts workshop.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group relative h-80 overflow-hidden bg-gray-50">
              <Image
                src="/images/DewarGuitars_3.webp"
                alt="Detail craftsmanship"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-normal tracking-[0.1em] uppercase drop-shadow-lg">Detail Work</div>
              </div>
            </div>
            
            <div className="group relative h-80 overflow-hidden bg-gray-50">
              <Image
                src="/images/DewarGuitars_4.webp"
                alt="Hardware details"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-normal tracking-[0.1em] uppercase drop-shadow-lg">Custom Hardware</div>
              </div>
            </div>
            
            <div className="group relative h-80 overflow-hidden bg-gray-50">
              <Image
                src="/images/DewarGuitars_5.webp"
                alt="Finish work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-normal tracking-[0.1em] uppercase drop-shadow-lg">Finish Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="apply" className="py-32 bg-black text-white relative overflow-hidden">
        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.6-13.4-30-30-30s-30 13.4-30 30 13.4 30 30 30 30-13.4 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-white/80 tracking-[0.3em] uppercase mb-6">Reserve Your Position</div>
            <h2 className="text-6xl md:text-7xl font-light tracking-wide mb-8 leading-tight">
              Join the<br />
              <span className="text-white/95">2025 Collection</span>
            </h2>
            <div className="w-32 h-px bg-white/50 mx-auto mb-12"></div>
            <p className="text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
              Only 12 will be built this year. Apply below to reserve your spot in the most exclusive guitar collection.
            </p>
          </div>
          
          <form className="max-w-lg mx-auto space-y-8">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-transparent border border-white/40 text-white placeholder-white/60 focus:border-white focus:outline-2 focus:outline-white focus:outline-offset-2 transition-all duration-500 font-normal tracking-wide text-base sm:text-lg touch-manipulation"
                autoComplete="name"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-transparent border border-white/40 text-white placeholder-white/60 focus:border-white focus:outline-2 focus:outline-white focus:outline-offset-2 transition-all duration-500 font-normal tracking-wide text-base sm:text-lg touch-manipulation"
                autoComplete="email"
                required
              />
              <textarea
                placeholder="Why do you want a Dewar Distiller?"
                rows={4}
                className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-transparent border border-white/40 text-white placeholder-white/60 focus:border-white focus:outline-2 focus:outline-white focus:outline-offset-2 resize-none transition-all duration-500 font-normal tracking-wide text-base sm:text-lg touch-manipulation"
                required
              />
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-black text-xl py-6 rounded-none font-normal tracking-[0.1em] transition-all duration-500 hover:border-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Apply for 2025 Collection
            </Button>
            
            <div className="text-xs text-white/70 tracking-[0.2em] uppercase pt-4">
              Limited to 12 positions • Handcrafted in Massachusetts
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Brand Section */}
            <div className="space-y-6">
              <Image
                src="/images/DEWAR v3 trans AI 1.svg"
                alt="Dewar Guitars"
                width={150}
                height={45}
                className="h-12 w-auto opacity-90"
              />
              <div className="space-y-3">
                <p className="text-white/85 font-normal leading-relaxed max-w-sm">
                  Handcrafted by master luthier Jim Dewar in Massachusetts. Only 12 guitars per year. Each instrument represents a decade of uncompromising craftsmanship.
                </p>
                <div className="text-xs text-white/70 tracking-[0.2em] uppercase">
                  Limited Edition • Artisanal Craftsmanship
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="space-y-6">
              <h3 className="text-white font-normal tracking-[0.1em] text-sm uppercase">Contact</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:info@dewarguitars.com" 
                  className="block text-white/85 hover:text-white transition-colors duration-300 font-normal tracking-wide focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  info@dewarguitars.com
                </a>
                <div className="text-white/85 font-normal tracking-wide">
                  Massachusetts, USA
                </div>
              </div>
            </div>
            
            {/* Social & Links Section */}
            <div className="space-y-6">
              <h3 className="text-white font-normal tracking-[0.1em] text-sm uppercase">Follow</h3>
              <div className="flex space-x-8">
                <a 
                  href="#" 
                  className="text-white/85 hover:text-white transition-colors duration-300 font-normal tracking-wide text-sm focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-white/85 hover:text-white transition-colors duration-300 font-normal tracking-wide text-sm focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  YouTube
                </a>
              </div>
              
              <div className="pt-4">
                <a 
                  href="#apply" 
                  className="inline-block border border-white/40 text-white/90 hover:border-white/60 hover:text-white transition-all duration-500 font-normal tracking-[0.05em] text-sm uppercase px-6 py-3 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  Apply for 2025
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-xs text-white/70 tracking-[0.2em] uppercase">
                © 2025 Dewar Guitars • All Rights Reserved
              </div>
              <div className="text-xs text-white/70 tracking-[0.2em] uppercase">
                Handcrafted in Massachusetts
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
