export type UserRole = "admin" | "editor" | "viewer"

export type User = {
  id: string
  name: string
  email: string
  role: UserRole
}
