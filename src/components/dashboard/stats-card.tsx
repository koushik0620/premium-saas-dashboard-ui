import { Activity, ArrowUpRight, Gauge, Layers3, Wallet2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

type StatsCardProps = {
  title: string
  value: string
  change: string
  caption: string
  sparkline: number[]
}

export function StatsCard({
  title,
  value,
  change,
  caption,
  sparkline,
}: StatsCardProps) {
  const accents = {
    "Net Revenue": {
      icon: Wallet2,
      chip: "bg-cyan-500/12 text-cyan-400",
      bar: "from-cyan-500/18 via-cyan-400/42 to-cyan-300/92",
      glow: "bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_62%)]",
    },
    "Active Workspaces": {
      icon: Layers3,
      chip: "bg-violet-500/12 text-violet-400",
      bar: "from-violet-500/18 via-violet-400/42 to-violet-300/88",
      glow: "bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.18),transparent_62%)]",
    },
    "Gross Margin": {
      icon: Gauge,
      chip: "bg-amber-500/12 text-amber-400",
      bar: "from-amber-500/16 via-amber-400/42 to-amber-300/92",
      glow: "bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_62%)]",
    },
    "Renewal Confidence": {
      icon: Activity,
      chip: "bg-emerald-500/12 text-emerald-400",
      bar: "from-emerald-500/16 via-emerald-400/42 to-emerald-300/88",
      glow: "bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.18),transparent_62%)]",
    },
  } as const
  const accent = accents[title as keyof typeof accents] ?? accents["Net Revenue"]
  const AccentIcon = accent.icon

  return (
    <Card className="interactive-card dashboard-enter overflow-hidden">
      <div className={`pointer-events-none absolute inset-0 opacity-90 ${accent.glow}`} />
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
        <div className="relative">
          <div className="mb-4 flex size-11 items-center justify-center rounded-2xl border border-border/70 bg-background/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <AccentIcon className="size-4.5 text-primary" />
          </div>
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
        </div>
        <div className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${accent.chip}`}>
          <ArrowUpRight className="size-3.5" />
          {change}
        </div>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <div className="flex h-14 items-end gap-2">
          {sparkline.map((value, index) => (
            <div
              key={`${title}-${index}`}
              className={`flex-1 rounded-full bg-gradient-to-t ${accent.bar} transition-transform duration-300 group-hover/card:scale-y-105`}
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
        <p className="text-sm leading-7 text-muted-foreground">
          {caption}
        </p>
      </CardContent>
    </Card>
  )
}
