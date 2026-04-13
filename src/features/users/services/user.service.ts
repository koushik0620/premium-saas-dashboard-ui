import type { User } from "../../../types/user.types"

export const userService = {
  async getUsers(): Promise<User[]> {
    return Promise.resolve([
      {
        id: "1",
        name: "Ava Johnson",
        email: "ava@example.com",
        role: "admin",
      },
      {
        id: "2",
        name: "Leo Patel",
        email: "leo@example.com",
        role: "editor",
      },
    ])
  },
}
