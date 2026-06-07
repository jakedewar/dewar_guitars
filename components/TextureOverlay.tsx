interface TextureOverlayProps {
  variant?: "light" | "dark"
  className?: string
}

export default function TextureOverlay({
  variant = "dark",
  className = "",
}: TextureOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.35] ${
        variant === "dark" ? "texture-overlay" : "texture-overlay-dark"
      } ${className}`}
      aria-hidden="true"
    />
  )
}
