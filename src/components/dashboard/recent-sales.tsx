import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const deals = [
  {
    company: "Northstar Labs",
    stage: "Negotiation",
    amount: "$84K ARR",
    owner: "Maya",
  },
  {
    company: "Blue Peak",
    stage: "Legal review",
    amount: "$52K ARR",
    owner: "Jordan",
  },
  {
    company: "Halo Commerce",
    stage: "Proposal sent",
    amount: "$31K ARR",
    owner: "Anika",
  },
]

export function RecentSales() {
  return (
    <Card className="interactive-card dashboard-enter [animation-delay:220ms]">
      <CardHeader>
        <p className="section-label">Enterprise Pipeline</p>
        <CardTitle className="mt-3 text-2xl">Priority deals this week</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {deals.map((deal) => (
          <div
            key={deal.company}
            className="rounded-[22px] border border-border/70 bg-background/55 p-4 transition-all duration-300 hover:border-primary/25 hover:bg-background/72"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold">{deal.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Owner: {deal.owner}
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {deal.stage}
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Potential value</p>
              <p className="text-lg font-semibold">{deal.amount}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
