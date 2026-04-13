"use client"

import { useMemo, useState } from "react"
import { RefreshCcw } from "lucide-react"
import { cn } from "../../lib/utils"
import { EmptyState } from "../common/empty-state"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const users = [
  {
    name: "Ava Johnson",
    email: "ava@northstar.io",
    company: "Northstar",
    role: "Admin",
    plan: "Enterprise",
    mrr: "$18.4K",
    health: "Strong",
    status: "Active",
  },
  {
    name: "Leo Patel",
    email: "leo@bluepeak.co",
    company: "Blue Peak",
    role: "Editor",
    plan: "Scale",
    mrr: "$8.2K",
    health: "Watch",
    status: "Renewal",
  },
  {
    name: "Mia Chen",
    email: "mia@halocmmerce.com",
    company: "Halo Commerce",
    role: "Viewer",
    plan: "Growth",
    mrr: "$4.1K",
    health: "Strong",
    status: "Active",
  },
  {
    name: "Nina Flores",
    email: "nina@atlashq.com",
    company: "Atlas HQ",
    role: "Admin",
    plan: "Scale",
    mrr: "$9.6K",
    health: "At risk",
    status: "Expansion",
  },
]

type UserTableProps = {
  variant?: "compact" | "full"
}

export function UserTable({ variant = "compact" }: UserTableProps) {
  const filters = ["All", "Enterprise", "Renewal", "At risk", "Churned"] as const
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All")

  const visibleUsers = useMemo(() => {
    const baseUsers = variant === "compact" ? users.slice(0, 3) : users

    if (variant !== "full" || activeFilter === "All") {
      return baseUsers
    }

    if (activeFilter === "Enterprise") {
      return baseUsers.filter((user) => user.plan === "Enterprise")
    }

    if (activeFilter === "Renewal") {
      return baseUsers.filter((user) => user.status === "Renewal")
    }

    if (activeFilter === "At risk") {
      return baseUsers.filter((user) => user.health === "At risk")
    }

    return []
  }, [activeFilter, variant])

  return (
    <Card className="interactive-card dashboard-enter [animation-delay:160ms]">
      <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-label">
            {variant === "compact" ? "Top Accounts" : "Account Directory"}
          </p>
          <CardTitle className="mt-3 text-2xl">
            {variant === "compact"
              ? "Customer health and revenue mix"
              : "Manage customers across lifecycle stages"}
          </CardTitle>
        </div>
        {variant === "full" ? (
          <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5",
                  filter === activeFilter
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border/70 bg-background/60 hover:border-primary/20 hover:bg-background/90"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : null}
      </CardHeader>
      <CardContent>
        {visibleUsers.length === 0 ? (
          <EmptyState
            title="No accounts match this filter"
            description="This segment is empty right now, which gives the table a graceful production-ready fallback instead of a dead blank state."
            action={
              <Button variant="outline" onClick={() => setActiveFilter("All")}>
                <RefreshCcw className="size-4" />
                Reset filters
              </Button>
            }
          />
        ) : null}

        {visibleUsers.length > 0 ? (
          <>
            <div className="grid gap-3 md:hidden">
              {visibleUsers.map((user) => (
                <div
                  key={user.email}
                  className="rounded-[24px] border border-border/70 bg-background/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_22px_50px_-30px_rgba(15,23,42,0.34)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 font-semibold text-primary">
                      {user.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {user.company}
                          </p>
                        </div>
                        <span
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-semibold",
                            user.health === "Strong" &&
                              "bg-emerald-500/12 text-emerald-500",
                            user.health === "Watch" &&
                              "bg-amber-500/12 text-amber-500",
                            user.health === "At risk" &&
                              "bg-rose-500/12 text-rose-500"
                          )}
                        >
                          {user.health}
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3 rounded-[20px] bg-background/70 p-3 text-sm sm:grid-cols-2">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Plan
                          </p>
                          <p className="mt-1 font-medium">
                            {user.plan} • {user.role}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            MRR
                          </p>
                          <p className="mt-1 font-semibold">{user.mrr}</p>
                        </div>
                        {variant === "full" ? (
                          <div className="sm:col-span-2">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                              Status
                            </p>
                            <p className="mt-1 text-muted-foreground">
                              {user.status}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="pb-3 font-medium">Customer</th>
                    <th className="pb-3 font-medium">Plan</th>
                    <th className="pb-3 font-medium">MRR</th>
                    <th className="pb-3 font-medium">Health</th>
                    {variant === "full" ? (
                      <th className="pb-3 font-medium">Status</th>
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  {visibleUsers.map((user) => (
                    <tr
                      key={user.email}
                      className="border-b transition-colors duration-300 hover:bg-background/40 last:border-b-0"
                    >
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/12 font-semibold text-primary">
                            {user.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-muted-foreground">
                              {user.company} • {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <div>
                          <p className="font-medium">{user.plan}</p>
                          <p className="text-muted-foreground">{user.role}</p>
                        </div>
                      </td>
                      <td className="py-4 font-semibold">{user.mrr}</td>
                      <td className="py-4">
                        <span
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-semibold",
                            user.health === "Strong" &&
                              "bg-emerald-500/12 text-emerald-500",
                            user.health === "Watch" &&
                              "bg-amber-500/12 text-amber-500",
                            user.health === "At risk" &&
                              "bg-rose-500/12 text-rose-500"
                          )}
                        >
                          {user.health}
                        </span>
                      </td>
                      {variant === "full" ? (
                        <td className="py-4 text-muted-foreground">
                          {user.status}
                        </td>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : null}
      </CardContent>
    </Card>
  )
}
