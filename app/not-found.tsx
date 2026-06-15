import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink text-on-dark-primary flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <Image
          src="/images/DEWAR v3 trans AI 1.svg"
          alt="Dewar Guitars"
          width={200}
          height={60}
          className="h-16 w-auto mx-auto mb-8 opacity-90"
        />
        <h1 className="type-section-title mb-4">Page Not Found</h1>
        <p className="type-body text-on-dark-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild variant="luxury" size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  )
}
