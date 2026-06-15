interface ScarcityBadgeProps {
  remaining?: number
  total?: number
  className?: string
}

export default function ScarcityBadge({
  remaining = 12,
  total = 12,
  className = "",
}: ScarcityBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 border border-dewar-red/50 bg-dewar-red/5 px-5 py-3 ${className}`}
    >
      <span className="type-caption text-dewar-red font-medium">
        {remaining} of {total} builds remaining
      </span>
      <span className="h-4 w-px bg-dewar-red/40" aria-hidden="true" />
      <span className="type-caption text-on-dark-muted">2026 Collection</span>
    </div>
  )
}
