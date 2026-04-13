"use client"

import { useEffect, useState } from "react"
import type { User } from "../../../types/user.types"
import { userService } from "../services/user.service"

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let active = true

    userService.getUsers().then((nextUsers) => {
      if (active) {
        setUsers(nextUsers)
        setIsLoading(false)
      }
    })

    return () => {
      active = false
    }
  }, [])

  return {
    users,
    isLoading,
  }
}
