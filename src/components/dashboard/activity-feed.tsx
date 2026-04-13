import { CheckCircle2, Clock3, MessageSquareMore, Waves } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const activity = [
  {
    title: "Renewal call locked in",
    description: "Northstar confirmed executive review for next Thursday.",
    icon: CheckCircle2,
    tone: "text-emerald-500 bg-emerald-500/12",
    time: "12 min ago",
  },
  {
    title: "Support volume spiked",
    description: "EMEA onboarding cohort needs guided setup walkthroughs.",
    icon: Waves,
    tone: "text-amber-500 bg-amber-500/12",
    time: "41 min ago",
  },
  {
    title: "Customer note added",
    description: "Blue Peak requested advanced audit exports before renewal.",
    icon: MessageSquareMore,
    tone: "text-primary bg-primary/12",
    time: "1 hr ago",
  },
]

export function ActivityFeed() {
  return (
    <Card className="interactive-card dashboard-enter [animation-delay:180ms]">
      <CardHeader>
        <p className="section-label">Team Pulse</p>
        <CardTitle className="mt-3 text-2xl">Live activity and next actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activity.map((item) => (
          <div
            key={item.title}
            className="rounded-[22px] border border-border/70 bg-background/55 p-4 transition-all duration-300 hover:border-primary/25 hover:bg-background/70"
          >
            <div className="flex items-start gap-3">
              <div className={`rounded-2xl p-2 ${item.tone}`}>
                <item.icon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold">{item.title}</p>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock3 className="size-3.5" />
                    {item.time}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-[22px] border border-dashed border-border bg-background/45 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-background/65">
          <p className="font-semibold">Next milestone</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Prepare the board-ready narrative for expansion revenue, onboarding
            performance, and support efficiency before Friday.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
