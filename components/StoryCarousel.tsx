"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

interface StorySection {
  id: number
  title: string
  subtitle: string
  content: string
  image: string
  imageAlt: string
  theme: "light" | "dark"
  accent?: string
}

const storySections: StorySection[] = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "A Decade of Perfection",
    content: "For over 10 years, master luthier Jim Dewar has built the guitar he always wanted to play — machining every part, carving every contour, voicing every note. Each Dewar Distiller is his vision, brought to life through uncompromising craftsmanship and attention to detail. This isn't just manufacturing—it's artistry.",
    image: "/images/DewarGuitars_2.webp",
    imageAlt: "Workshop craftsmanship",
    theme: "light",
    accent: "Handcrafted by Jim Dewar in Massachusetts"
  },
  {
    id: 2,
    title: "The Vision",
    subtitle: "Where Tone Meets Power",
    content: "Built at our build-barn in Massachusetts, USA, the Distiller fuses unique design innovations with the creature comforts of our favorite player guitars. An intricate, custom-designed bridge for granular, tool-less action and intonation, a streamlined 'c-shape' neck for comfort and stability while accessing all 22 frets.",
    image: "/images/DewarGuitars_3.webp",
    imageAlt: "Custom bridge detail",
    theme: "dark",
    accent: "Revolutionary Design"
  },
  {
    id: 3,
    title: "The Craft",
    subtitle: "Every Detail Hand-Shaped",
    content: "Most builders buy parts. I machine my own. Every fret, every bridge, every curve is hand-shaped in my Massachusetts workshop. With 90% hand-crafted components and meticulous attention to every detail, the Distiller represents the pinnacle of guitar craftsmanship.",
    image: "/images/DewarGuitars_4.webp",
    imageAlt: "Hardware details",
    theme: "light",
    accent: "90% Hand-crafted Components"
  },
  {
    id: 4,
    title: "The Sound",
    subtitle: "Hand-wound Humbuckers",
    content: "Two hand-wound humbuckers for a truly never-felt-before playing experience. Each pickup is carefully wound to my exact specifications, creating a tone that's both powerful and nuanced. This is where innovation meets tradition, where cutting-edge meets timeless.",
    image: "/images/DewarGuitars_5.webp",
    imageAlt: "Finish work",
    theme: "dark",
    accent: "Never-Felt-Before Experience"
  },
  {
    id: 5,
    title: "The Legacy",
    subtitle: "Only 12 Per Year",
    content: "Each Distiller is a rare masterpiece. When you own one, you're not just buying a guitar—you're joining an exclusive community of artists who demand nothing less than perfection. Limited to 12 guitars per year, each instrument represents a decade of uncompromising dedication to the art of guitar making.",
    image: "/images/DewarGuitars_1.webp",
    imageAlt: "Hand-crafted guitar detail",
    theme: "light",
    accent: "Exclusivity • Artistry • Legacy"
  }
]

export default function StoryCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1) // Start at 1 to match carousel indexing
  const [count, setCount] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
      setIsAutoPlaying(false) // Stop auto-play when user interacts
    })
  }, [api])

  // Auto-advance carousel
  useEffect(() => {
    if (!api || !isAutoPlaying) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [api, isAutoPlaying])

  const goToSlide = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index)
      setIsAutoPlaying(false)
    }
  }, [api])

  const currentStory = storySections[current - 1] || storySections[0]

  return (
    <section id="story" className="relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {storySections.map((story, index) => (
            <CarouselItem key={story.id}>
              <div className={`py-8 sm:py-16 md:py-20 lg:py-24 transition-all duration-1000 ${
                story.theme === "light" ? "bg-white text-black" : "bg-black text-white"
              }`}>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                      <div>
                        <div className={`text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 ${
                          story.theme === "light" ? "text-gray-500" : "text-white/40"
                        }`}>
                          {story.title}
                        </div>
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-wide leading-tight ${
                          story.theme === "light" ? "text-black" : "text-white"
                        }`}>
                          {story.subtitle}
                        </h2>
                      </div>
                      
                      <div className="space-y-4 sm:space-y-6">
                        <p className={`text-base sm:text-lg md:text-xl leading-relaxed font-light ${
                          story.theme === "light" ? "text-gray-700" : "text-white/80"
                        }`}>
                          {story.content}
                        </p>
                      </div>
                      
                      <div className={`pt-6 sm:pt-8 border-t ${
                        story.theme === "light" ? "border-gray-200" : "border-white/10"
                      }`}>
                        <div className={`text-xs tracking-[0.4em] uppercase ${
                          story.theme === "light" ? "text-gray-500" : "text-white/40"
                        }`}>
                          {story.accent}
                        </div>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="relative group order-1 lg:order-2">
                      <div className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[650px] overflow-hidden">
                        <Image
                          src={story.image}
                          alt={story.imageAlt}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 transition-colors duration-500 ${
                          story.theme === "light" 
                            ? "bg-black/10 group-hover:bg-black/5" 
                            : "bg-white/10 group-hover:bg-white/5"
                        }`}></div>
                      </div>
                      {/* Decorative frame */}
                      <div className={`absolute -inset-2 sm:-inset-4 border opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${
                        story.theme === "light" ? "border-gray-200" : "border-white/20"
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Controls */}
        <div className="flex justify-center items-center py-4 sm:py-8 md:py-12">
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Previous Button */}
            <CarouselPrevious 
              className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full border-0 bg-transparent hover:bg-transparent ${
                currentStory.theme === "light" 
                  ? "text-gray-600 hover:text-black" 
                  : "text-white/60 hover:text-white"
              }`}
            />

            {/* Dots Navigation */}
            <div className="flex space-x-3 sm:space-x-4">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                    index === current - 1
                      ? "scale-125 shadow-lg"
                      : currentStory.theme === "light"
                        ? "bg-gray-300 hover:bg-gray-500"
                        : "bg-white/20 hover:bg-white/40"
                  }`}
                  style={{
                    backgroundColor: index === current - 1 ? "#D12A2F" : undefined,
                    boxShadow: index === current - 1 ? "0 0 8px rgba(209, 42, 47, 0.3)" : undefined
                  }}
                  aria-label={`Go to story section ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <CarouselNext 
              className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full border-0 bg-transparent hover:bg-transparent ${
                currentStory.theme === "light" 
                  ? "text-gray-600 hover:text-black" 
                  : "text-white/60 hover:text-white"
              }`}
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 z-20">
          <div className={`h-full transition-all duration-1000 ${
            currentStory.theme === "light" ? "bg-black" : "bg-white"
          }`} style={{
            width: `${(current / count) * 100}%`
          }}></div>
        </div>

        {/* Section Counter */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
          <div className={`text-xs sm:text-sm font-light tracking-[0.2em] ${
            currentStory.theme === "light" ? "text-gray-500" : "text-white/40"
          }`}>
            {String(current).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </div>
        </div>
      </Carousel>
    </section>
  )
}