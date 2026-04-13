export default function SettingsLoading() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="dashboard-panel p-6 md:p-8">
          <div className="h-3 w-28 rounded-full bg-muted" />
          <div className="mt-4 h-10 w-full max-w-2xl rounded-3xl bg-muted" />
          <div className="mt-4 h-5 w-full max-w-xl rounded-full bg-muted" />
        </div>
        <div className="dashboard-panel p-6">
          <div className="h-4 w-32 rounded-full bg-muted" />
          <div className="mt-4 h-9 w-24 rounded-full bg-muted" />
          <div className="mt-4 h-4 rounded-full bg-muted" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="dashboard-panel p-6">
            <div className="h-11 w-11 rounded-2xl bg-muted" />
            <div className="mt-5 h-7 w-36 rounded-full bg-muted" />
            <div className="mt-4 h-18 rounded-[22px] bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
