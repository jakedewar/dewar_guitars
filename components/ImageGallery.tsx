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
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-ink/80 text-on-dark-primary p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 border border-white/20 hover:border-dewar-red/50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-ink/80 text-on-dark-primary p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 border border-white/20 hover:border-dewar-red/50"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <button
            onClick={toggleFullscreen}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-ink/60 hover:bg-ink/80 text-on-dark-primary p-2 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 border border-white/20 hover:border-dewar-red/50"
            aria-label="View fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
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
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-16 sm:h-20 md:h-24 overflow-hidden transition-all duration-300 ${
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
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-10 bg-ink/60 hover:bg-ink/80 text-on-dark-primary p-2 transition-all duration-300 border border-white/20 hover:border-dewar-red/50"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
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
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-ink/80 text-on-dark-primary p-3 transition-all duration-300 border border-white/20 hover:border-dewar-red/50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-ink/80 text-on-dark-primary p-3 transition-all duration-300 border border-white/20 hover:border-dewar-red/50"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-ink/60 p-2 border border-white/10">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative w-12 h-12 overflow-hidden transition-all duration-300 ${
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
