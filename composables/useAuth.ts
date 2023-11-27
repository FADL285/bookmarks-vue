import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "~/constants"
import type { ITokens } from "~/types"

interface ILogin {
  username: string
  password: string
}

export const useAuth = () => {
  const login = async ({ username, password }: ILogin) => {
    try {
      const { access, refresh } = await $fetch<ITokens>("/user/login", {
        baseURL: useRuntimeConfig().public.apiBaseUrl,
        method: "POST",
        body: {
          username,
          password
        }
      })

      localStorage.setItem(ACCESS_TOKEN_KEY, access)
      localStorage.setItem(REFRESH_TOKEN_KEY, refresh)

      return {
        access,
        refresh
      }
    } catch (error) {
      console.error(error)
    }
  }

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }

  return {
    login,
    logout
  }
}
