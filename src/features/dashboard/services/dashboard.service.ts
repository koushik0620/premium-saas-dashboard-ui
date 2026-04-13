import type { DashboardOverview } from "../../../types/dashboard.types"

export const dashboardService = {
  async getOverview(): Promise<DashboardOverview> {
    return Promise.resolve({
      stats: [
        { title: "Revenue", value: "$48,200", change: "+12.4%" },
        { title: "Users", value: "1,284", change: "+8.2%" },
      ],
      sales: [
        { customer: "Noah Lee", amount: "$420.00" },
        { customer: "Sophia Kim", amount: "$189.00" },
      ],
    })
  },
}
