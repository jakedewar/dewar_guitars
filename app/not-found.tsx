import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <Image
          src="/images/DEWAR v3 trans AI 1.svg"
          alt="Dewar Guitars"
          width={200}
          height={60}
          className="h-16 w-auto mx-auto mb-8 opacity-90"
        />
        <h1 className="text-4xl font-light mb-4">Page Not Found</h1>
        <p className="text-white/60 mb-8 font-light">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/" 
          className="inline-block border border-white/20 text-white/80 hover:border-white/40 hover:text-white transition-all duration-500 font-light tracking-[0.05em] text-sm uppercase px-6 py-3"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
