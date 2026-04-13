import { Card, CardContent, CardHeader } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

export function Loader() {
  return (
    <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
      Loading...
    </div>
  )
}

export function ChartCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-4">
        <Skeleton className="h-3 w-24 rounded-full" />
        <Skeleton className="h-8 w-52 rounded-full" />
        <Skeleton className="h-4 w-full max-w-md rounded-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-[22px] border border-border/70 bg-background/55 p-4"
            >
              <Skeleton className="h-4 w-24 rounded-full" />
              <Skeleton className="mt-4 h-8 w-20 rounded-full" />
              <Skeleton className="mt-4 h-4 w-full rounded-full" />
            </div>
          ))}
        </div>

        <div className="grid h-[320px] grid-cols-7 items-end gap-3 rounded-[26px] border border-border/70 bg-background/55 p-4">
          {[42, 58, 50, 70, 62, 82, 76].map((height, index) => (
            <Skeleton
              key={index}
              className="w-full rounded-full"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function TableCardSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <Skeleton className="h-3 w-28 rounded-full" />
        <Skeleton className="h-8 w-60 rounded-full" />
      </CardHeader>
      <CardContent className="space-y-4">
        {[1, 2, 3, 4].map((row) => (
          <div
            key={row}
            className="grid gap-3 rounded-[22px] border border-border/70 bg-background/50 p-4 md:grid-cols-[1.6fr_0.7fr_0.5fr_0.6fr]"
          >
            <Skeleton className="h-12 w-full rounded-2xl" />
            <Skeleton className="h-12 w-full rounded-2xl" />
            <Skeleton className="h-12 w-full rounded-2xl" />
            <Skeleton className="h-12 w-full rounded-2xl" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
