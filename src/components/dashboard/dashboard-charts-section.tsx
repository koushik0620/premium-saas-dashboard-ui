"use client"

import dynamic from "next/dynamic"
import { ChartCardSkeleton } from "../common/loader"
import { ConversionFunnel } from "./conversion-funnel"
import { RecentSales } from "./recent-sales"

const LazyRevenueChart = dynamic(
  () => import("./revenue-chart").then((mod) => mod.RevenueChart),
  {
    loading: () => <ChartCardSkeleton />,
  }
)

const LazyUsersGrowthChart = dynamic(
  () => import("./users-growth-chart").then((mod) => mod.UsersGrowthChart),
  {
    loading: () => <ChartCardSkeleton />,
  }
)

export function DashboardChartsSection() {
  return (
    <>
      <section className="grid gap-6 xl:grid-cols-[1.8fr_0.9fr]">
        <LazyRevenueChart />
        <ConversionFunnel />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <LazyUsersGrowthChart />
        <RecentSales />
      </section>
    </>
  )
}
