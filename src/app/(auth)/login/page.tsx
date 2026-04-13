import { LoginForm } from "../../../features/auth/components/login-form"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
        <div className="mb-6 space-y-2">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to access your dashboard.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
