import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import MobileNavigation from "@/components/MobileNavigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/dewar_guitars_main_logo.png"
                alt="Dewar Guitars"
                width={200}
                height={60}
                className="h-12 w-auto opacity-95"
                priority
              />
            </div>
            
            <nav className="hidden lg:flex items-center space-x-12">
              <a href="#story" className="text-white/80 hover:text-white transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase relative group">
                Story
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#collection" className="text-white/80 hover:text-white transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase relative group">
                Collection
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#craftsmanship" className="text-white/80 hover:text-white transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase relative group">
                Craftsmanship
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#apply" className="text-white/80 hover:text-white transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase relative group">
                Apply
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
              </a>
            </nav>
            
            <MobileNavigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Simple, elegant background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DewarGuitars_1.webp"
            alt="Handcrafted Dewar Guitar"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          {/* Ultra-luxury typography */}
          <div className="mb-16">
            <div className="mb-8">
              <Image
                src="/images/dewar_guitars_main_logo.png"
                alt="Dewar Guitars"
                width={300}
                height={90}
                className="h-24 md:h-32 w-auto mx-auto opacity-95"
                priority
              />
            </div>
            <div className="w-24 h-px bg-white/60 mx-auto mb-8"></div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide leading-relaxed text-white/90 max-w-4xl mx-auto">
              Only 12 guitars per year.<br />
              <span className="text-xl sm:text-2xl md:text-3xl text-white/70">Handcrafted by one man, from raw wood to final note.</span>
            </p>
          </div>
          
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-black text-base sm:text-lg px-8 sm:px-16 py-4 sm:py-6 rounded-none font-light tracking-[0.1em] transition-all duration-500 hover:border-white w-full sm:w-auto"
            >
              Apply for the 2025 Collection
            </Button>
            <div className="text-sm text-white/50 tracking-[0.2em] uppercase">
              Limited Edition • Handcrafted in Massachusetts
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-px h-16 bg-white/30 relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section id="story" className="pt-40 pb-32 bg-white text-black relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <div className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-4">The Story</div>
                <h2 className="text-6xl md:text-7xl font-thin tracking-wide leading-tight">
                  A Decade of<br />
                  <span className="text-gray-600">Perfection</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-gray-700 font-light">
                  For over 10 years, I&apos;ve built the guitar I always wanted to play — machining every part, 
                  carving every contour, voicing every note.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 font-light">
                  Each Dewar is my vision, brought to life through uncompromising craftsmanship and attention to detail.
                </p>
              </div>
              
              <div className="pt-8 border-t border-gray-200">
                <div className="text-xs text-gray-500 tracking-[0.4em] uppercase">
                  Handcrafted in Massachusetts
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="/images/DewarGuitars_2.webp"
                  alt="Workshop craftsmanship"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gray-200 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="text-sm text-white/40 tracking-[0.3em] uppercase mb-6">The Distiller Collection</div>
            <h2 className="text-6xl md:text-7xl font-thin tracking-wide mb-6">
              2025
            </h2>
            <div className="w-32 h-px bg-white/30 mx-auto mb-8"></div>
            <p className="text-2xl text-white/60 font-light tracking-wide mb-4">
              Only 12 will be built this year
            </p>
            <p className="text-lg text-white/40 font-light tracking-wide">
              Starting at $3,499 • Handcrafted Investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div key={num} className="group relative overflow-hidden bg-gray-950/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={`/images/DewarGuitars_${Math.min(num, 5)}.webp`}
                    alt={`Dewar Guitar #${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    priority={num <= 6}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  {num <= 3 && (
                    <div className="absolute top-6 right-6 bg-red-900/90 backdrop-blur-sm text-white px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase border border-red-800/50">
                      Owned
                    </div>
                  )}
                  
                  {/* Number overlay */}
                  <div className="absolute bottom-6 left-6 text-6xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {num.toString().padStart(2, '0')}
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-light mb-2 tracking-wide">Dewar #{num}</h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      {num === 1 && "Brazilian Rosewood • Natural Finish • Hand-voiced"}
                      {num === 2 && "Quilted Maple • Tobacco Burst • Custom Hardware"}
                      {num === 3 && "Mahogany • Cherry Sunburst • Aged Finish"}
                      {num > 3 && "Specifications to be revealed"}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Link href={`/guitar/${num}`}>
                      <button className="w-full border border-white/30 text-white/90 hover:bg-white hover:text-black hover:border-white transition-all duration-700 font-light tracking-[0.1em] text-sm uppercase py-4 group relative overflow-hidden bg-transparent touch-manipulation active:scale-95">
                        <span className="relative z-10">View Details</span>
                        <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
            <div className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-6">Craftsmanship</div>
            <h2 className="text-6xl md:text-7xl font-thin tracking-wide mb-8 leading-tight">
              Every Detail<br />
              <span className="text-gray-600">Hand-Shaped</span>
            </h2>
            <div className="w-32 h-px bg-gray-300 mx-auto mb-12"></div>
            <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700 font-light">
              Most builders buy parts. I machine my own. Every fret, every bridge, every curve is hand-shaped in my Massachusetts workshop.
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
              <div className="absolute bottom-6 left-6 text-white/90">
                <div className="text-sm font-light tracking-[0.1em] uppercase">Detail Work</div>
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
              <div className="absolute bottom-6 left-6 text-white/90">
                <div className="text-sm font-light tracking-[0.1em] uppercase">Custom Hardware</div>
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
              <div className="absolute bottom-6 left-6 text-white/90">
                <div className="text-sm font-light tracking-[0.1em] uppercase">Finish Work</div>
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
            <div className="text-sm text-white/40 tracking-[0.3em] uppercase mb-6">Reserve Your Position</div>
            <h2 className="text-6xl md:text-7xl font-thin tracking-wide mb-8 leading-tight">
              Join the<br />
              <span className="text-white/80">2025 Collection</span>
            </h2>
            <div className="w-32 h-px bg-white/30 mx-auto mb-12"></div>
            <p className="text-2xl text-white/60 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Only 12 will be built this year. Apply below to reserve your spot in the most exclusive guitar collection.
            </p>
          </div>
          
          <form className="max-w-lg mx-auto space-y-8">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-transparent border border-white/20 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-all duration-500 font-light tracking-wide text-base sm:text-lg touch-manipulation"
                autoComplete="name"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-transparent border border-white/20 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-all duration-500 font-light tracking-wide text-base sm:text-lg touch-manipulation"
                autoComplete="email"
                required
              />
              <textarea
                placeholder="Why do you want a Dewar Distiller?"
                rows={4}
                className="w-full px-6 sm:px-8 py-4 sm:py-6 bg-transparent border border-white/20 text-white placeholder-white/40 focus:border-white/60 focus:outline-none resize-none transition-all duration-500 font-light tracking-wide text-base sm:text-lg touch-manipulation"
                required
              />
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-black text-xl py-6 rounded-none font-light tracking-[0.1em] transition-all duration-500 hover:border-white"
            >
              Apply for 2025 Collection
            </Button>
            
            <div className="text-xs text-white/30 tracking-[0.2em] uppercase pt-4">
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
                src="/images/dewar_guitars_main_logo.png"
                alt="Dewar Guitars"
                width={200}
                height={60}
                className="h-16 w-auto opacity-90"
              />
              <div className="space-y-3">
                <p className="text-white/60 font-light leading-relaxed max-w-sm">
                  Handcrafted in Massachusetts. Only 12 guitars per year. Each instrument represents a decade of uncompromising craftsmanship.
                </p>
                <div className="text-xs text-white/40 tracking-[0.2em] uppercase">
                  Limited Edition • Artisanal Craftsmanship
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="space-y-6">
              <h3 className="text-white font-light tracking-[0.1em] text-sm uppercase">Contact</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:info@dewarguitars.com" 
                  className="block text-white/60 hover:text-white transition-colors duration-300 font-light tracking-wide"
                >
                  info@dewarguitars.com
                </a>
                <div className="text-white/60 font-light tracking-wide">
                  Massachusetts, USA
                </div>
              </div>
            </div>
            
            {/* Social & Links Section */}
            <div className="space-y-6">
              <h3 className="text-white font-light tracking-[0.1em] text-sm uppercase">Follow</h3>
              <div className="flex space-x-8">
                <a 
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm"
                >
                  YouTube
                </a>
              </div>
              
              <div className="pt-4">
                <a 
                  href="#apply" 
                  className="inline-block border border-white/20 text-white/80 hover:border-white/40 hover:text-white transition-all duration-500 font-light tracking-[0.05em] text-sm uppercase px-6 py-3"
                >
                  Apply for 2025
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-xs text-white/30 tracking-[0.2em] uppercase">
                © 2025 Dewar Guitars • All Rights Reserved
              </div>
              <div className="text-xs text-white/30 tracking-[0.2em] uppercase">
                Handcrafted in Massachusetts
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
