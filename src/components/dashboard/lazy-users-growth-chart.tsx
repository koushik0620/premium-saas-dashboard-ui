"use client"

import dynamic from "next/dynamic"
import { ChartCardSkeleton } from "../common/loader"

export const LazyUsersGrowthChart = dynamic(
  () => import("./users-growth-chart").then((mod) => mod.UsersGrowthChart),
  {
    loading: () => <ChartCardSkeleton />,
  }
)
