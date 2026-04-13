import { ChartCardSkeleton, TableCardSkeleton } from "../../../components/common/loader"

export default function DashboardLoading() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="dashboard-panel p-6 md:p-8">
        <div className="space-y-4">
          <div className="h-3 w-28 rounded-full bg-muted" />
          <div className="h-12 w-full max-w-3xl rounded-3xl bg-muted" />
          <div className="h-5 w-full max-w-2xl rounded-full bg-muted" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="dashboard-panel p-6">
            <div className="h-4 w-24 rounded-full bg-muted" />
            <div className="mt-4 h-10 w-28 rounded-full bg-muted" />
            <div className="mt-5 h-14 rounded-[22px] bg-muted" />
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.8fr_0.9fr]">
        <ChartCardSkeleton />
        <div className="dashboard-panel p-6">
          <div className="h-3 w-24 rounded-full bg-muted" />
          <div className="mt-4 h-8 w-44 rounded-full bg-muted" />
          <div className="mt-6 h-[320px] rounded-[26px] bg-muted" />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <TableCardSkeleton />
        <div className="dashboard-panel p-6">
          <div className="h-3 w-24 rounded-full bg-muted" />
          <div className="mt-4 h-8 w-52 rounded-full bg-muted" />
          <div className="mt-6 space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-24 rounded-[22px] bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
