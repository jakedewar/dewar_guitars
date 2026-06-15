'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface ImageGalleryProps {
  images: string[]
  guitarName: string
}

const CustomImageGallery: React.FC<ImageGalleryProps> = ({ images, guitarName }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen)
  }, [isFullscreen])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isFullscreen) return

    switch (event.key) {
      case 'Escape':
        setIsFullscreen(false)
        break
      case 'ArrowLeft':
        goToPrevious()
        break
      case 'ArrowRight':
        goToNext()
        break
    }
  }, [isFullscreen, goToPrevious, goToNext])

  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isFullscreen, handleKeyDown])

  if (!isMounted) {
    return (
      <div className="relative w-full">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-ink overflow-hidden">
          <Image
            src={`/images/${images[0]}`}
            alt={`${guitarName} - View 1`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="relative w-full">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-ink overflow-hidden group">
          <Image
            src={`/images/${images[currentIndex]}`}
            alt={`${guitarName} - View ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={currentIndex === 0}
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-ink/70 text-on-dark-primary opacity-90 transition-[background-color,border-color,opacity] duration-300 hover:border-dewar-red/50 hover:bg-ink/85 group-hover:opacity-100 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2 sm:left-4 sm:size-12"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-ink/70 text-on-dark-primary opacity-90 transition-[background-color,border-color,opacity] duration-300 hover:border-dewar-red/50 hover:bg-ink/85 group-hover:opacity-100 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2 sm:right-4 sm:size-12"
                aria-label="Next image"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}

          <button
            type="button"
            onClick={toggleFullscreen}
            className="absolute right-2 top-2 flex size-11 items-center justify-center border border-white/30 bg-ink/70 text-on-dark-primary opacity-90 transition-[background-color,border-color,opacity] duration-300 hover:border-dewar-red/50 hover:bg-ink/85 group-hover:opacity-100 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2 sm:right-4 sm:top-4"
            aria-label="View fullscreen"
          >
            <Maximize2 className="size-5" />
          </button>

          {images.length > 1 && (
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-ink/80 text-on-dark-primary px-2 py-1 type-caption border border-white/10">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
            {images.map((image, index) => (
              <button
                type="button"
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-16 overflow-hidden transition-[box-shadow,opacity,transform] duration-300 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2 sm:h-20 md:h-24 ${
                  currentIndex === index
                    ? 'ring-2 ring-dewar-red scale-105'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={`/images/${image}`}
                  alt={`${guitarName} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="absolute right-4 top-4 z-10 flex size-12 items-center justify-center border border-white/30 bg-ink/70 text-on-dark-primary transition-[background-color,border-color] duration-300 hover:border-dewar-red/50 hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
              aria-label="Close fullscreen"
            >
              <X className="size-6" />
            </button>

            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={`/images/${images[currentIndex]}`}
                alt={`${guitarName} - Fullscreen view ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-ink/70 text-on-dark-primary transition-[background-color,border-color] duration-300 hover:border-dewar-red/50 hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-ink/70 text-on-dark-primary transition-[background-color,border-color] duration-300 hover:border-dewar-red/50 hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 border border-white/10 bg-ink/70 p-2">
                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative size-12 overflow-hidden transition-[box-shadow,opacity] duration-300 focus-visible:outline-2 focus-visible:outline-dewar-red focus-visible:outline-offset-2 ${
                        currentIndex === index
                          ? 'ring-2 ring-dewar-red'
                          : 'opacity-50 hover:opacity-100'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <Image
                        src={`/images/${image}`}
                        alt={`${guitarName} - Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default CustomImageGallery
