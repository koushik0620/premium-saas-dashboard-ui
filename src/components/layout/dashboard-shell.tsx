"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { Navbar } from "./navbar"
import { PageContainer } from "./page-container"
import { Sidebar } from "./sidebar"
import { useMediaQuery } from "../../hooks/use-media-query"

type DashboardShellProps = {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const isDesktop = useMediaQuery("(min-width: 1280px)")
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMobileSidebarOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileSidebarOpen])

  return (
    <div className="dashboard-shell flex h-screen overflow-hidden bg-background">
      <div
        className={`fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMobileSidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileSidebarOpen(false)}
        aria-hidden="true"
      />

      <Sidebar
        isCompact={isDesktop && isSidebarCollapsed}
        isMobileOpen={isDesktop || isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        onToggleCompact={() => setIsSidebarCollapsed((current) => !current)}
      />

      <div className="relative flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
        <div className="dashboard-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <Navbar
            isSidebarCollapsed={isSidebarCollapsed}
            onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
            onToggleSidebarCollapsed={() =>
              setIsSidebarCollapsed((current) => !current)
            }
          />
          <PageContainer>{children}</PageContainer>
        </div>
      </div>
    </div>
  )
}
