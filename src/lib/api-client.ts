type RequestOptions = RequestInit & {
  baseUrl?: string
}

export async function apiClient<T>(
  path: string,
  { baseUrl = "", headers, ...options }: RequestOptions = {}
): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json() as Promise<T>
}
