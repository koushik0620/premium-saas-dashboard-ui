import type { ReactNode } from "react"

type PageContainerProps = {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="premium-scroll flex-1 overflow-y-auto overflow-x-hidden px-4 pb-10 pt-6 md:px-6 md:pb-12 md:pt-8">
      <div className="mx-auto w-full max-w-[1480px]">{children}</div>
    </main>
  )
}
