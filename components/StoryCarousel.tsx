"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import TextureOverlay from "@/components/TextureOverlay"

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
    accent: "Handcrafted by Jim Dewar in Holliston, Massachusetts"
  },
  {
    id: 2,
    title: "The Vision",
    subtitle: "Where Tone Meets Power",
    content: "Built at our build-barn in Holliston, Massachusetts, the Distiller fuses unique design innovations with the creature comforts of our favorite player guitars. An intricate, custom-designed bridge for granular, tool-less action and intonation, a streamlined 'c-shape' neck for comfort and stability while accessing all 22 frets.",
    image: "/images/DewarGuitars_3.webp",
    imageAlt: "Custom bridge detail",
    theme: "dark",
    accent: "Revolutionary Design"
  },
  {
    id: 3,
    title: "The Craft",
    subtitle: "Every Detail Hand-Shaped",
    content: "Most builders buy parts. I machine my own. Every fret, every bridge, every curve is hand-shaped in my Holliston workshop. With 90% hand-crafted components and meticulous attention to every detail, the Distiller represents the pinnacle of guitar craftsmanship.",
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
    accent: "Exclusivity · Artistry · Legacy"
  }
]

export default function StoryCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1)
  const [count, setCount] = useState(storySections.length)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const userInteracted = useRef(false)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1)
      if (userInteracted.current) {
        setIsAutoPlaying(false)
      }
    }

    setCount(api.scrollSnapList().length)
    onSelect()

    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api || !isAutoPlaying) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [api, isAutoPlaying])

  const stopAutoPlay = useCallback(() => {
    userInteracted.current = true
    setIsAutoPlaying(false)
  }, [])

  const goToSlide = useCallback((index: number) => {
    stopAutoPlay()
    api?.scrollTo(index)
  }, [api, stopAutoPlay])

  const goToPrevious = useCallback(() => {
    stopAutoPlay()
    api?.scrollPrev()
  }, [api, stopAutoPlay])

  const goToNext = useCallback(() => {
    stopAutoPlay()
    api?.scrollNext()
  }, [api, stopAutoPlay])

  const currentStory = storySections[current - 1] || storySections[0]
  const isLight = currentStory.theme === "light"
  const progress = count > 0 ? (current / count) * 100 : 0

  return (
    <section id="story" className="relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {storySections.map((story) => {
            const light = story.theme === "light"
            return (
              <CarouselItem key={story.id} className="pl-0">
                <div
                  className={`py-12 sm:py-16 md:py-20 lg:py-24 transition-colors duration-700 relative overflow-hidden ${
                    light ? "bg-parchment text-on-light-primary" : "bg-ink text-on-dark-primary"
                  }`}
                >
                  <TextureOverlay variant={light ? "dark" : "light"} />
                  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
                      <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
                        <div>
                          <p
                            className={`type-eyebrow mb-3 sm:mb-4 ${
                              light ? "text-on-light-muted" : "text-on-dark-muted"
                            }`}
                          >
                            {story.title}
                          </p>
                          <h2
                            className={`type-display ${
                              light ? "text-on-light-primary" : "text-on-dark-primary"
                            }`}
                          >
                            {story.subtitle}
                          </h2>
                        </div>

                        <p
                          className={`type-body max-w-2xl ${
                            light ? "text-on-light-secondary" : "text-on-dark-secondary"
                          }`}
                        >
                          {story.content}
                        </p>

                        <div
                          className={`pt-6 sm:pt-8 border-t ${
                            light ? "border-walnut" : "border-white/20"
                          }`}
                        >
                          <p
                            className={`type-caption ${
                              light ? "text-on-light-muted" : "text-dewar-red"
                            }`}
                          >
                            {story.accent}
                          </p>
                        </div>
                      </div>

                      <div className="relative group order-1 lg:order-2">
                        <div className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[650px] overflow-hidden">
                          <Image
                            src={story.image}
                            alt={story.imageAlt}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                          />
                          <div
                            className={`absolute inset-0 transition-colors duration-500 ${
                              light
                                ? "bg-ink/10 group-hover:bg-ink/5"
                                : "bg-white/10 group-hover:bg-white/5"
                            }`}
                          />
                        </div>
                        <div
                          className={`absolute -inset-2 sm:-inset-4 border opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                            light ? "border-walnut/40" : "border-dewar-red/30"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <div
          className={`flex justify-center items-center py-4 sm:py-8 md:py-12 ${
            isLight ? "bg-parchment" : "bg-ink"
          }`}
        >
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={goToPrevious}
              className={`size-11 sm:size-12 flex items-center justify-center rounded-full border border-current/30 transition-colors duration-300 touch-manipulation focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2 ${
                isLight
                  ? "text-on-light-muted hover:text-on-light-primary hover:border-walnut/50"
                  : "text-on-dark-muted hover:text-on-dark-primary hover:border-dewar-red/50"
              }`}
              aria-label="Previous story"
            >
              <ArrowLeft className="size-5" />
            </button>

            <div className="flex gap-3 sm:gap-4">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`size-3.5 sm:size-4 rounded-full transition-[background-color,box-shadow,transform] duration-300 touch-manipulation focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2 ${
                    index === current - 1
                      ? "scale-125 bg-dewar-red shadow-[0_0_8px_hsl(var(--dewar-red)/0.4)]"
                      : isLight
                        ? "bg-walnut/30 hover:bg-walnut/50"
                        : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to story section ${index + 1}`}
                  aria-current={index === current - 1 ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              className={`size-11 sm:size-12 flex items-center justify-center rounded-full border border-current/30 transition-colors duration-300 touch-manipulation focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2 ${
                isLight
                  ? "text-on-light-muted hover:text-on-light-primary hover:border-walnut/50"
                  : "text-on-dark-muted hover:text-on-dark-primary hover:border-dewar-red/50"
              }`}
              aria-label="Next story"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-1 z-20 pointer-events-none">
          <div
            className="h-full bg-dewar-red transition-[width] duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20 pointer-events-none">
          <p
            className={`type-caption ${
              isLight ? "text-on-light-muted" : "text-on-dark-muted"
            }`}
          >
            {String(current).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
        </div>
      </Carousel>
    </section>
  )
}
