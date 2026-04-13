import type { CSSProperties } from "react"
import { cn } from "../../lib/utils"

type SkeletonProps = {
  className?: string
  style?: CSSProperties
}

export function Skeleton({ className, style }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl bg-[linear-gradient(90deg,rgba(148,163,184,0.10),rgba(148,163,184,0.2),rgba(148,163,184,0.10))] bg-[length:200%_100%]",
        className
      )}
      style={style}
    />
  )
}
