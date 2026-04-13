import {
  BarChart3,
  type LucideIcon,
  Settings2,
  UsersRound,
} from "lucide-react"

export type NavigationItem = {
  label: string
  href: string
  description: string
  icon: LucideIcon
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    description: "Live metrics and growth",
    icon: BarChart3,
  },
  {
    label: "Users",
    href: "/users",
    description: "Accounts and expansion",
    icon: UsersRound,
  },
  {
    label: "Settings",
    href: "/settings",
    description: "Workspace control center",
    icon: Settings2,
  },
]
