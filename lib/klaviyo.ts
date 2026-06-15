export type KlaviyoProduct = {
  ProductName: string
  ProductID: string
  SKU?: string
  Categories?: string[]
  ImageURL: string
  URL: string
  Brand?: string
  Price: number
  CompareAtPrice?: number
}

type KlaviyoClient = {
  identify: (
    properties: Record<string, unknown>,
    callback?: () => void
  ) => Promise<unknown>
  track: (
    event: string,
    properties?: Record<string, unknown>,
    callback?: () => void
  ) => Promise<boolean>
  trackViewedItem?: (
    item: Record<string, unknown>,
    callback?: () => void
  ) => void
}

declare global {
  interface Window {
    klaviyo?: KlaviyoClient
  }
}

function getKlaviyo() {
  if (typeof window === 'undefined') return null
  return window.klaviyo ?? null
}

export function identifyKlaviyoProfile(properties: Record<string, unknown>) {
  return getKlaviyo()?.identify(properties)
}

export function trackKlaviyoEvent(
  event: string,
  properties?: Record<string, unknown>
) {
  return getKlaviyo()?.track(event, properties)
}

export function trackViewedProduct(product: KlaviyoProduct) {
  const klaviyo = getKlaviyo()
  if (!klaviyo) return

  klaviyo.track('Viewed Product', product)
  klaviyo.trackViewedItem?.({
    Title: product.ProductName,
    ItemId: product.ProductID,
    Categories: product.Categories,
    ImageUrl: product.ImageURL,
    Url: product.URL,
    Brand: product.Brand,
    Price: product.Price,
    Metadata: {
      CompareAtPrice: product.CompareAtPrice,
    },
  })
}

export async function submitInquiry({
  email,
  firstName,
  lastName,
  source,
  productName,
}: {
  email: string
  firstName: string
  lastName: string
  source: string
  productName?: string
}) {
  const klaviyo = getKlaviyo()
  if (!klaviyo) return false

  await klaviyo.identify({
    email,
    first_name: firstName,
    last_name: lastName,
  })

  await klaviyo.track('Submitted Inquiry', {
    source,
    collection: '2026',
    ...(productName ? { product_name: productName } : {}),
  })

  return true
}
