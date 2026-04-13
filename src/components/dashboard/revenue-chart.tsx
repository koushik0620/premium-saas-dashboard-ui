"use client"

import { useState, useSyncExternalStore } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"
import { ArrowUpRight } from "lucide-react"
import { Skeleton } from "../ui/skeleton"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

type TimeRange = "30D" | "90D" | "12M"

type ChartPoint = {
  label: string
  revenue: number
  forecast: number
}

const chartData: Record<TimeRange, ChartPoint[]> = {
  "30D": [
    { label: "Jan 3", revenue: 44000, forecast: 41000 },
    { label: "Jan 7", revenue: 46200, forecast: 43000 },
    { label: "Jan 11", revenue: 48900, forecast: 44600 },
    { label: "Jan 15", revenue: 52100, forecast: 47000 },
    { label: "Jan 19", revenue: 55400, forecast: 49100 },
    { label: "Jan 23", revenue: 58600, forecast: 52000 },
    { label: "Jan 27", revenue: 61300, forecast: 54800 },
  ],
  "90D": [
    { label: "Nov", revenue: 131000, forecast: 118000 },
    { label: "Dec", revenue: 142000, forecast: 127000 },
    { label: "Jan", revenue: 156000, forecast: 138000 },
    { label: "Feb", revenue: 163000, forecast: 145000 },
    { label: "Mar", revenue: 178000, forecast: 157000 },
    { label: "Apr", revenue: 191000, forecast: 167000 },
  ],
  "12M": [
    { label: "May", revenue: 560000, forecast: 520000 },
    { label: "Jul", revenue: 590000, forecast: 541000 },
    { label: "Sep", revenue: 648000, forecast: 590000 },
    { label: "Nov", revenue: 704000, forecast: 642000 },
    { label: "Jan", revenue: 759000, forecast: 689000 },
    { label: "Mar", revenue: 828000, forecast: 732000 },
  ],
}

const summaries: Record<
  TimeRange,
  { revenue: string; growth: string; note: string }
> = {
  "30D": {
    revenue: "$61.3K",
    growth: "+14.8%",
    note: "Pipeline is pacing 11% ahead of target.",
  },
  "90D": {
    revenue: "$191K",
    growth: "+21.6%",
    note: "Expansion revenue closed strongest in enterprise.",
  },
  "12M": {
    revenue: "$828K",
    growth: "+38.4%",
    note: "Annualized momentum is compounding month over month.",
  },
}

const ranges: TimeRange[] = ["30D", "90D", "12M"]

export function RevenueChart() {
  const [activeRange, setActiveRange] = useState<TimeRange>("30D")
  const isMounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  )
  const activeSummary = summaries[activeRange]

  return (
    <Card className="interactive-card overflow-hidden dashboard-enter [animation-delay:120ms]">
      <CardHeader className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="section-label">Revenue Performance</p>
          <CardTitle className="mt-3 text-2xl">Expansion and forecast quality</CardTitle>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Compare realized growth against forecast confidence and monitor
            where premium plan upgrades are driving margin.
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
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[22px] border border-border/70 bg-background/65 p-4">
            <p className="text-sm text-muted-foreground">Total revenue</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">
              {activeSummary.revenue}
            </p>
          </div>
          <div className="rounded-[22px] border border-border/70 bg-background/65 p-4">
            <p className="text-sm text-muted-foreground">Growth rate</p>
            <div className="mt-2 flex items-center gap-2 text-3xl font-semibold tracking-tight">
              {activeSummary.growth}
              <span className="rounded-full bg-primary/10 p-1 text-primary">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>
          <div className="rounded-[22px] border border-border/70 bg-background/65 p-4">
            <p className="text-sm text-muted-foreground">Insight</p>
            <p className="mt-2 text-sm leading-6 text-foreground/90">
              {activeSummary.note}
            </p>
          </div>
        </div>

        <div className="h-[320px] rounded-[26px] border border-border/70 bg-background/55 p-4">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData[activeRange]}
                margin={{ left: 6, right: 8, top: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-chart-1)"
                      stopOpacity={0.55}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-chart-1)"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                  <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-chart-4)"
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-chart-4)"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  stroke="rgba(148, 163, 184, 0.18)"
                  vertical={false}
                />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ stroke: "rgba(148, 163, 184, 0.25)", strokeWidth: 1 }}
                  contentStyle={{
                    borderRadius: "18px",
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                    background: "rgba(17, 24, 39, 0.92)",
                    color: "white",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="forecast"
                  stroke="var(--color-chart-4)"
                  strokeWidth={2}
                  fill="url(#forecastGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-chart-1)"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="grid h-full grid-cols-7 items-end gap-3 rounded-[22px] bg-muted/15 p-4">
              {[40, 55, 48, 68, 62, 78, 70].map((height, index) => (
                <Skeleton
                  key={index}
                  className="w-full rounded-full"
                  style={{ height: `${height}%` } as never}
                />
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
