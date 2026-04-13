"use client"

import { useSyncExternalStore } from "react"

export type Theme = "light" | "dark"

const storageKey = "saas-dashboard-theme"

function readThemeSnapshot(): Theme {
  if (typeof window === "undefined") {
    return "light"
  }

  const savedTheme = window.localStorage.getItem(storageKey)

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined
  }

  const handleThemeChange = () => onStoreChange()

  window.addEventListener("storage", handleThemeChange)
  window.addEventListener("theme-change", handleThemeChange)

  return () => {
    window.removeEventListener("storage", handleThemeChange)
    window.removeEventListener("theme-change", handleThemeChange)
  }
}

function applyTheme(nextTheme: Theme) {
  window.localStorage.setItem(storageKey, nextTheme)
  document.documentElement.classList.toggle("dark", nextTheme === "dark")
  window.dispatchEvent(new Event("theme-change"))
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    readThemeSnapshot,
    () => "light"
  )

  const updateTheme = (nextTheme: Theme) => {
    applyTheme(nextTheme)
  }

  const toggleTheme = () => {
    updateTheme(theme === "dark" ? "light" : "dark")
  }

  return {
    theme,
    setTheme: updateTheme,
    toggleTheme,
  }
}
