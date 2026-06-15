'use client'

import { useEffect } from 'react'
import { trackViewedProduct, type KlaviyoProduct } from '@/lib/klaviyo'

type KlaviyoProductViewProps = {
  product: KlaviyoProduct
}

export default function KlaviyoProductView({ product }: KlaviyoProductViewProps) {
  useEffect(() => {
    trackViewedProduct(product)
  }, [product])

  return null
}
