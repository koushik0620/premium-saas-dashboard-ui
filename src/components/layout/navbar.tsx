"use client"

import { Bell, Command, PanelLeft, PanelLeftClose, Search, Sparkles, Waves } from "lucide-react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "../common/theme-toggle"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const pageMeta: Record<string, { title: string; subtitle: string }> = {
  "/dashboard": {
    title: "Portfolio Dashboard",
    subtitle: "High-signal metrics, forecasts, and customer momentum.",
  },
  "/users": {
    title: "Customer Base",
    subtitle: "Accounts, health scores, onboarding, and revenue opportunity.",
  },
  "/settings": {
    title: "Workspace Settings",
    subtitle: "Brand control, notifications, security, and integrations.",
  },
}

type NavbarProps = {
  isSidebarCollapsed: boolean
  onOpenMobileSidebar: () => void
  onToggleSidebarCollapsed: () => void
}

export function Navbar({
  isSidebarCollapsed,
  onOpenMobileSidebar,
  onToggleSidebarCollapsed,
}: NavbarProps) {
  const pathname = usePathname()
  const meta = pageMeta[pathname] ?? pageMeta["/dashboard"]

  return (
    <header className="sticky top-0 z-30 shrink-0 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1480px] px-4 py-5 md:px-6 md:py-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="size-10 xl:hidden"
                onClick={onOpenMobileSidebar}
                aria-label="Open sidebar"
              >
                <PanelLeft className="size-4" />
              </Button>
              <div className="section-label">Executive View</div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-400">
                <Waves className="size-3.5" />
                Live Workspace
              </span>
            </div>

            <h1 className="mt-3 text-2xl font-semibold tracking-tight md:text-[2rem]">
              {meta.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground md:text-[15px]">
              {meta.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 xl:min-w-[620px] xl:max-w-[720px] xl:items-end">
            <div className="glass-toolbar flex flex-col gap-2 rounded-[28px] p-2 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="relative min-w-0 flex-1 sm:min-w-[260px]">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="h-11 rounded-full border-border/70 bg-background/70 pl-11 pr-16 shadow-none"
                  placeholder="Search customers, teams, invoices"
                />
                <div className="pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-full border border-border/70 bg-card px-2 py-1 text-[11px] text-muted-foreground">
                  <Command className="size-3" />
                  K
                </div>
              </div>

              <Button variant="secondary" size="sm" className="h-11 px-4 sm:self-auto">
                <Sparkles className="size-4" />
                Generate report
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="size-11"
                aria-label="Notifications"
              >
                <Bell className="size-4" />
              </Button>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
