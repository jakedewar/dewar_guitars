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
        <h1 className="text-4xl font-normal mb-4 leading-tight">Page Not Found</h1>
        <p className="text-white/90 mb-8 font-normal leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/" 
          className="inline-block border border-white/50 text-white/90 hover:border-white/70 hover:text-white transition-all duration-500 font-normal tracking-[0.05em] text-sm uppercase px-6 py-3 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
