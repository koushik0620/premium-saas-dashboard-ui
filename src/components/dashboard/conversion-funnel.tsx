import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const funnelStages = [
  { label: "Qualified pipeline", value: "318", width: "100%" },
  { label: "Demo completed", value: "184", width: "72%" },
  { label: "Proposal sent", value: "92", width: "54%" },
  { label: "Closed won", value: "41", width: "32%" },
]

export function ConversionFunnel() {
  return (
    <Card className="interactive-card dashboard-enter [animation-delay:140ms]">
      <CardHeader>
        <p className="section-label">Funnel Intelligence</p>
        <CardTitle className="mt-3 text-2xl">Conversion quality</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <div
            className="relative flex size-32 items-center justify-center rounded-full"
            style={{
              background:
                "conic-gradient(var(--color-chart-1) 0 72%, rgba(148,163,184,0.15) 72% 100%)",
            }}
          >
            <div className="flex size-24 items-center justify-center rounded-full bg-card text-center">
              <div>
                <p className="text-3xl font-semibold">72%</p>
                <p className="text-xs text-muted-foreground">SQL to demo</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Sales velocity</p>
            <p className="text-3xl font-semibold">$11.8K</p>
            <p className="text-sm leading-6 text-muted-foreground">
              Average contract value increased after packaging analytics and
              governance together.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {funnelStages.map((stage) => (
            <div key={stage.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>{stage.label}</span>
                <span className="font-semibold">{stage.value}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-chart-1),var(--color-chart-3))]"
                  style={{ width: stage.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
