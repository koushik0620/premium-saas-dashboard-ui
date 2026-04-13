import type { ReactNode } from "react"
import { Card, CardContent } from "../ui/card"

type DashboardHeaderProps = {
  label: string
  title: string
  description: string
  aside?: ReactNode
}

export function DashboardHeader({
  label,
  title,
  description,
  aside,
}: DashboardHeaderProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
      <Card className="interactive-card overflow-hidden dashboard-enter">
        <CardContent className="p-6 md:p-8">
          <p className="section-label">{label}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight leading-[1.05] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            {description}
          </p>
        </CardContent>
      </Card>

      {aside ? <div className="dashboard-enter [animation-delay:80ms]">{aside}</div> : null}
    </section>
  )
}
