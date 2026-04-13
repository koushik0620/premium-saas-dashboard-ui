"use client"

import { useState } from "react"
import { authService } from "../services/auth.service"

type LoginPayload = {
  email: string
  password: string
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)

  const login = async (payload: LoginPayload) => {
    setIsLoading(true)

    try {
      return await authService.login(payload)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    login,
  }
}
