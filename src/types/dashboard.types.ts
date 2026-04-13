export type DashboardStat = {
  title: string
  value: string
  change: string
}

export type SaleRecord = {
  customer: string
  amount: string
}

export type DashboardOverview = {
  stats: DashboardStat[]
  sales: SaleRecord[]
}
