import type { ReactNode } from "react"

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  lead?: string
  theme?: "dark" | "light"
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  theme = "dark",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark"

  return (
    <div className={`text-center mb-14 sm:mb-16 md:mb-20 ${className}`}>
      <div
        className={`type-eyebrow mb-4 md:mb-6 ${
          isDark ? "text-on-dark-muted" : "text-on-light-muted"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`type-display mb-6 md:mb-8 ${
          isDark ? "text-on-dark-primary" : "text-on-light-primary"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-24 md:w-32 h-px mx-auto mb-8 md:mb-10 ${
          isDark ? "bg-dewar-red/60" : "bg-walnut/40"
        }`}
      />
      {lead && (
        <p
          className={`type-lead max-w-4xl mx-auto ${
            isDark ? "text-on-dark-secondary" : "text-on-light-secondary"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
