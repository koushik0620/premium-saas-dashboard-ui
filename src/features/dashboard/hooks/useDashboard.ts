"use client"

import { useEffect, useState } from "react"
import type { DashboardOverview } from "../../../types/dashboard.types"
import { dashboardService } from "../services/dashboard.service"

export function useDashboard() {
  const [data, setData] = useState<DashboardOverview | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let active = true

    dashboardService.getOverview().then((overview) => {
      if (active) {
        setData(overview)
        setIsLoading(false)
      }
    })

    return () => {
      active = false
    }
  }, [])

  return {
    data,
    isLoading,
  }
}
