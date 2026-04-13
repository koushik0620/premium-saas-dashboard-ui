import type { ReactNode } from "react"
import { cn } from "../../lib/utils"

type DropdownProps = {
  label: string
  children: ReactNode
  className?: string
}

export function Dropdown({ label, children, className }: DropdownProps) {
  return (
    <details className={cn("group relative", className)}>
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm">
        {label}
      </summary>
      <div className="absolute right-0 z-10 mt-2 min-w-40 rounded-xl border bg-popover p-2 shadow-md">
        {children}
      </div>
    </details>
  )
}
