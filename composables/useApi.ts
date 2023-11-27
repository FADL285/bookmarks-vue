import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "~/constants"
import type { ITokens } from "~/types"

export const useApi = () => {
  const apiFetch = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBaseUrl,
    retryStatusCodes: [401, 408, 409, 425, 429, 500, 502, 503, 504],
    async onRequest({ options }) {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)

      if (accessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`
        }
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401 && localStorage.getItem(REFRESH_TOKEN_KEY)) {
        const { access, refresh } = await $fetch<ITokens>(
          "user/token/refresh",
          {
            baseURL: useRuntimeConfig().public.apiBaseUrl,
            method: "POST",
            body: {
              refresh: localStorage.getItem(REFRESH_TOKEN_KEY)
            }
          }
        )

        localStorage.setItem(ACCESS_TOKEN_KEY, access)
        localStorage.setItem(REFRESH_TOKEN_KEY, refresh)
      }
    }
  })
  return { apiFetch }
}
