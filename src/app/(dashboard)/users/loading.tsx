import { ChartCardSkeleton, TableCardSkeleton } from "../../../components/common/loader"

export default function UsersLoading() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="dashboard-panel p-6 md:p-8">
          <div className="h-3 w-28 rounded-full bg-muted" />
          <div className="mt-4 h-10 w-full max-w-2xl rounded-3xl bg-muted" />
          <div className="mt-4 h-5 w-full max-w-xl rounded-full bg-muted" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[1, 2].map((item) => (
            <div key={item} className="dashboard-panel p-6">
              <div className="h-4 w-28 rounded-full bg-muted" />
              <div className="mt-4 h-9 w-24 rounded-full bg-muted" />
              <div className="mt-4 h-4 rounded-full bg-muted" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ChartCardSkeleton />
        <div className="dashboard-panel p-6">
          <div className="h-3 w-28 rounded-full bg-muted" />
          <div className="mt-4 h-8 w-64 rounded-full bg-muted" />
          <div className="mt-6 h-[220px] rounded-[26px] bg-muted" />
        </div>
      </div>

      <TableCardSkeleton />
    </div>
  )
}
