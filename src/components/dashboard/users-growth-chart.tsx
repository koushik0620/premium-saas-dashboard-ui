"use client"

import { useState, useSyncExternalStore } from "react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import { ArrowUpRight, UsersRound } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

type GrowthRange = "6M" | "12M"

type GrowthPoint = {
  label: string
  users: number
  teams: number
}

const growthData: Record<GrowthRange, GrowthPoint[]> = {
  "6M": [
    { label: "Jan", users: 840, teams: 92 },
    { label: "Feb", users: 930, teams: 106 },
    { label: "Mar", users: 1010, teams: 115 },
    { label: "Apr", users: 1098, teams: 129 },
    { label: "May", users: 1186, teams: 138 },
    { label: "Jun", users: 1284, teams: 146 },
  ],
  "12M": [
    { label: "Jul", users: 412, teams: 48 },
    { label: "Sep", users: 584, teams: 63 },
    { label: "Nov", users: 742, teams: 79 },
    { label: "Jan", users: 930, teams: 106 },
    { label: "Mar", users: 1098, teams: 129 },
    { label: "Jun", users: 1284, teams: 146 },
  ],
}

const ranges: GrowthRange[] = ["6M", "12M"]

export function UsersGrowthChart() {
  const [activeRange, setActiveRange] = useState<GrowthRange>("6M")
  const isMounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  )

  return (
    <Card className="interactive-card overflow-hidden dashboard-enter [animation-delay:160ms]">
      <CardHeader className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="section-label">User Growth</p>
          <CardTitle className="mt-3 text-2xl">Adoption and team expansion</CardTitle>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Track workspace growth with a cleaner split between seats and company-level adoption.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {ranges.map((range) => (
            <Button
              key={range}
              variant={activeRange === range ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[22px] border border-border/70 bg-background/55 p-4">
            <div className="flex items-center gap-2">
              <UsersRound className="size-4 text-primary" />
              <p className="text-sm text-muted-foreground">Active users</p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <p className="text-3xl font-semibold tracking-tight">1,284</p>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                +18%
              </span>
            </div>
          </div>
          <div className="rounded-[22px] border border-border/70 bg-background/55 p-4">
            <p className="text-sm text-muted-foreground">Monthly insight</p>
            <div className="mt-3 flex items-center gap-2">
              <ArrowUpRight className="size-4 text-emerald-500" />
              <p className="text-sm leading-6 text-foreground/90">
                User growth is strongest in analytics-heavy customer segments.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[320px] rounded-[26px] border border-border/70 bg-background/55 p-4">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData[activeRange]} margin={{ left: 6, right: 8, top: 10, bottom: 0 }}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.03)" }}
                  contentStyle={{
                    borderRadius: "18px",
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(17, 24, 39, 0.92)",
                    color: "white",
                  }}
                />
                <Bar dataKey="teams" fill="var(--color-chart-3)" radius={[999, 999, 0, 0]} maxBarSize={18} />
                <Bar dataKey="users" fill="var(--color-chart-1)" radius={[999, 999, 0, 0]} maxBarSize={18} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="grid h-full grid-cols-6 items-end gap-3">
              {[46, 58, 64, 72, 80, 86].map((height, index) => (
                <div key={index} className="flex h-full items-end gap-2">
                  <Skeleton className="h-[48%] w-4 rounded-full" />
                  <Skeleton
                    className="w-4 rounded-full"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
