import { ArrowUpRight, Users2, WalletCards } from "lucide-react"
import { DashboardHeader } from "../../../components/dashboard/dashboard-header"
import { LazyUsersGrowthChart } from "../../../components/dashboard/lazy-users-growth-chart"
import { UserTable } from "../../../components/dashboard/user-table"
import { Card, CardContent } from "../../../components/ui/card"

export default function UsersPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <DashboardHeader
        label="Customer Operations"
        title="Accounts that matter, surfaced with context."
        description="Showcase onboarding health, expansion opportunity, and renewal risk without making the screen feel like a spreadsheet dump."
        aside={
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="interactive-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Users2 className="size-5 text-primary" />
                  <p className="font-semibold">Customer count</p>
                </div>
                <p className="mt-4 text-3xl font-semibold">412</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  26 new workspaces activated this month.
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-card overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <WalletCards className="size-5 text-emerald-500" />
                  <p className="font-semibold">Expansion ARR</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-3xl font-semibold">
                  $184K
                  <span className="rounded-full bg-emerald-500/12 px-2 py-1 text-xs text-emerald-500">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Highest lift is coming from security and analytics add-ons.
                </p>
              </CardContent>
            </Card>
          </div>
        }
      />

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <LazyUsersGrowthChart />

        <Card className="interactive-card overflow-hidden dashboard-enter [animation-delay:120ms]">
          <CardContent className="p-6">
            <p className="section-label">Retention Signals</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Expansion is strongest when usage and support quality rise together.
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Teams with steady adoption in analytics and governance modules are
              far more likely to expand within the same quarter.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { label: "Onboarding completion", value: "92%" },
                { label: "Feature adoption", value: "81%" },
                { label: "Renewal health", value: "88%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-chart-2),var(--color-chart-1))]"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <UserTable variant="full" />
    </div>
  )
}
