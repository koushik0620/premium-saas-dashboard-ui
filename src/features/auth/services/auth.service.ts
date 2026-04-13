type LoginPayload = {
  email: string
  password: string
}

export const authService = {
  async login(payload: LoginPayload) {
    return Promise.resolve({
      id: "demo-user",
      email: payload.email,
    })
  },
}
