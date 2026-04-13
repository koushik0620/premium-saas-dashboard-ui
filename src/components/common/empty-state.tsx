import type { ReactNode } from "react"
import { Inbox } from "lucide-react"

type EmptyStateProps = {
  title: string
  description: string
  action?: ReactNode
}

export function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-dashed border-border/80 bg-background/55 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_44%)]" />
      <div className="relative mx-auto flex max-w-md flex-col items-center">
        <div className="flex size-14 items-center justify-center rounded-3xl border border-primary/15 bg-primary/10 text-primary">
          <Inbox className="size-6" />
        </div>
        <h3 className="mt-5 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
        {action ? <div className="mt-5">{action}</div> : null}
      </div>
    </div>
  )
}
