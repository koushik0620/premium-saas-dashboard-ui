"use client"

import { useSyncExternalStore } from "react"
import { MoonStar, SunMedium } from "lucide-react"
import { Button } from "../ui/button"
import { useTheme } from "../../hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isMounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  )

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="min-w-[132px]"
    >
      {isMounted ? (
        theme === "dark" ? (
          <SunMedium className="animate-theme-orbit size-4" />
        ) : (
          <MoonStar className="animate-theme-orbit size-4" />
        )
      ) : (
        <span className="size-4" aria-hidden="true" />
      )}
      {isMounted ? (theme === "dark" ? "Light mode" : "Dark mode") : "Theme"}
    </Button>
  )
}
