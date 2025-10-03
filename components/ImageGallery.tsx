'use client'

import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

interface ImageGalleryProps {
  images: string[]
  guitarName: string
}

// Dynamic import with no SSR to prevent hydration issues
const ImageGalleryClient = dynamic(() => import('./ImageGalleryClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full">
      <Skeleton className="h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg" />
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
        <Skeleton className="h-16 sm:h-20 md:h-24 rounded-lg" />
        <Skeleton className="h-16 sm:h-20 md:h-24 rounded-lg" />
        <Skeleton className="h-16 sm:h-20 md:h-24 rounded-lg" />
      </div>
    </div>
  )
})

const CustomImageGallery: React.FC<ImageGalleryProps> = ({ images, guitarName }) => {
  return <ImageGalleryClient images={images} guitarName={guitarName} />
}

export default CustomImageGallery