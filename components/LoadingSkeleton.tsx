import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <Skeleton className="h-12 w-32" />
            <div className="hidden lg:flex items-center space-x-12">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="lg:hidden h-6 w-6" />
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="mb-16">
            <div className="mb-8">
              <Skeleton className="h-24 md:h-32 w-80 mx-auto" />
            </div>
            <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
            <div className="space-y-4">
              <Skeleton className="h-8 w-full max-w-2xl mx-auto" />
              <Skeleton className="h-6 w-full max-w-xl mx-auto" />
            </div>
          </div>
          
          <div className="space-y-6">
            <Skeleton className="h-16 w-80 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
        </div>
      </section>

      {/* Story Section Skeleton */}
      <section className="pt-40 pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <Skeleton className="h-4 w-20 mb-4" />
                <Skeleton className="h-16 w-full mb-6" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-full" />
              </div>
            </div>
            <Skeleton className="h-[600px] w-full" />
          </div>
        </div>
      </section>

      {/* Collection Section Skeleton */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-20">
            <Skeleton className="h-4 w-32 mx-auto mb-6" />
            <Skeleton className="h-16 w-24 mx-auto mb-6" />
            <Skeleton className="h-px w-32 mx-auto mb-8" />
            <Skeleton className="h-6 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group relative overflow-hidden bg-gray-950/50 backdrop-blur-sm border border-white/10">
                <Skeleton className="aspect-square w-full" />
                <div className="p-8 space-y-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-12 w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
