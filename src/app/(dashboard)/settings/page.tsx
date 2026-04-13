import { BellRing, CreditCard, ShieldCheck, Sparkles, Workflow } from "lucide-react"
import { EmptyState } from "../../../components/common/empty-state"
import { DashboardHeader } from "../../../components/dashboard/dashboard-header"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

const settingCards = [
  {
    title: "Brand Presence",
    description:
      "Control accent palette, typography, and customer-facing workspace elements.",
    icon: Sparkles,
    action: "Customize theme",
  },
  {
    title: "Billing Controls",
    description:
      "Review invoices, pricing experiments, and plan upgrade paths from one place.",
    icon: CreditCard,
    action: "Open billing",
  },
  {
    title: "Security Policy",
    description:
      "SSO enforcement, device trust, and admin session controls for enterprise customers.",
    icon: ShieldCheck,
    action: "Review security",
  },
  {
    title: "Integrations",
    description:
      "Sync CRM, support, and analytics signals to keep operations flowing cleanly.",
    icon: Workflow,
    action: "Manage integrations",
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <DashboardHeader
        label="Workspace Controls"
        title="Settings that feel productized, not thrown in as an afterthought."
        description="Keep the same premium visual language across operational screens so the whole case study feels like one coherent SaaS system."
        aside={
          <Card className="interactive-card overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <BellRing className="size-5 text-primary" />
                <p className="font-semibold">Notification health</p>
              </div>
              <p className="mt-4 text-3xl font-semibold">Realtime</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Board alerts, renewal nudges, and payment events are all active and
                routed to the right channels.
              </p>
            </CardContent>
          </Card>
        }
      />

      <section className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
        {["Workspace", "Billing", "Security", "Integrations"].map((tab, index) => (
          <span
            key={tab}
            className={
              index === 0
                ? "rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary"
                : "rounded-full border border-border/70 bg-background/60 px-3 py-1.5"
            }
          >
            {tab}
          </span>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {settingCards.map((item) => (
          <Card key={item.title} className="interactive-card overflow-hidden">
            <CardHeader>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="size-5" />
              </div>
              <CardTitle className="pt-4">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
              <Button className="mt-6" variant="outline">
                {item.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <Card className="interactive-card overflow-hidden">
          <CardHeader>
            <p className="section-label">Automation Library</p>
            <CardTitle className="mt-3 text-2xl">Ready for your first workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <EmptyState
              title="No custom automations configured yet"
              description="When product ops adds approval chains, renewal alerts, or onboarding nudges, this area will show them with the same polished treatment as the rest of the dashboard."
              action={<Button variant="outline">Create workflow</Button>}
            />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
