import { ArrowRight, CircleDollarSign, Download, ShieldCheck } from "lucide-react"
import { ActivityFeed } from "../../../components/dashboard/activity-feed"
import { ConversionFunnel } from "../../../components/dashboard/conversion-funnel"
import { DashboardChartsSection } from "../../../components/dashboard/dashboard-charts-section"
import { RecentSales } from "../../../components/dashboard/recent-sales"
import { StatsCard } from "../../../components/dashboard/stats-card"
import { UserTable } from "../../../components/dashboard/user-table"
import { EmptyState } from "../../../components/common/empty-state"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"

const stats = [
  {
    title: "Net Revenue",
    value: "$482K",
    change: "+18.2%",
    caption: "Expansion accounts drove 42% of closed-won revenue this cycle.",
    sparkline: [24, 40, 34, 56, 48, 72, 66, 82],
  },
  {
    title: "Active Workspaces",
    value: "1,284",
    change: "+9.4%",
    caption: "Trial-to-paid conversion improved after the onboarding redesign.",
    sparkline: [32, 36, 38, 46, 54, 58, 62, 70],
  },
  {
    title: "Gross Margin",
    value: "78.6%",
    change: "+4.1%",
    caption: "Infrastructure efficiency offset higher enterprise support costs.",
    sparkline: [20, 30, 42, 50, 54, 62, 70, 76],
  },
  {
    title: "Renewal Confidence",
    value: "91%",
    change: "+6.8%",
    caption: "At-risk accounts were reduced with proactive customer success plays.",
    sparkline: [22, 28, 36, 48, 58, 64, 78, 84],
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <section className="dashboard-panel hero-glow interactive-card relative overflow-hidden border border-white/8 p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(251,146,60,0.18),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-[1px] rounded-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)] opacity-80" />
        <div className="relative grid gap-8 xl:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="section-label">Quarterly Overview</p>
            <h2 className="headline-balance mt-4 max-w-3xl text-4xl font-semibold tracking-tight leading-[0.98] md:text-5xl">
              Build trust with a dashboard that feels like a premium SaaS product.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Aurelius OS blends executive storytelling, clean operational data,
              and sharp visual polish for a portfolio-ready admin experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="shadow-[0_26px_60px_-24px_rgba(34,211,238,0.9)]">
                Export board snapshot
                <Download className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white/10 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.04]"
              >
                View live customer pulse
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            <div className="rounded-[26px] border border-cyan-400/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.72),rgba(17,24,39,0.58))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-cyan-400/22 hover:shadow-[0_24px_50px_-30px_rgba(34,211,238,0.28)]">
              <div className="flex items-center gap-3">
                <CircleDollarSign className="size-5 text-primary" />
                <p className="font-semibold">ARR Momentum</p>
              </div>
              <p className="mt-5 text-4xl font-semibold tracking-tight">$2.84M</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Up 31% year over year with enterprise expansion pacing ahead of target.
              </p>
            </div>

            <div className="rounded-[26px] border border-emerald-400/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(15,23,42,0.6))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-emerald-400/24 hover:shadow-[0_24px_50px_-30px_rgba(52,211,153,0.22)]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-5 text-emerald-500" />
                <p className="font-semibold">Retention Quality</p>
              </div>
              <div className="mt-5 flex items-end gap-3">
                <p className="text-4xl font-semibold tracking-tight">126%</p>
                <span className="mb-1 rounded-full bg-emerald-500/12 px-3 py-1 text-xs font-semibold text-emerald-500">
                  NRR
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Expansion motion and onboarding quality continue to raise customer lifetime value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </section>

      <DashboardChartsSection />

      <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <UserTable variant="compact" />
        <ActivityFeed />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-6">
          <RecentSales />
          <Card className="interactive-card overflow-hidden dashboard-enter [animation-delay:200ms]">
            <CardContent className="p-6">
              <p className="section-label">Workflow Queue</p>
              <div className="mt-4">
                <EmptyState
                  title="No board actions are waiting"
                  description="Approvals, executive follow-ups, and launch tasks will appear here as soon as a workflow needs attention."
                  action={
                    <Button variant="outline">
                      Create first playbook
                    </Button>
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <ConversionFunnel />
      </section>

      <section>
        <Card className="interactive-card dashboard-enter [animation-delay:240ms]">
          <CardContent className="p-6">
            <p className="section-label">Launch Readiness</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Design polish that still feels grounded in product reality
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              This concept is built to showcase product thinking as much as visual taste:
              clear hierarchy, purposeful motion, real operational metrics, and layouts
              that translate well on desktop and mobile.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { label: "Visual language", value: "94%" },
                { label: "Executive readability", value: "88%" },
                { label: "Portfolio impact", value: "96%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-chart-3),var(--color-chart-1))]"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
