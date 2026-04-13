"use client"

import { useState } from "react"

export function useAppStore() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return {
    isSidebarOpen,
    toggleSidebar: () => setIsSidebarOpen((current) => !current),
    setIsSidebarOpen,
  }
}
