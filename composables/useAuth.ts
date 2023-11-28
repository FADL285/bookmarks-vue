import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "~/constants"
import type { ITokens } from "~/types"

interface ILogin {
  username: string
  password: string
}

export const useAuth = () => {
  const router = useRouter()
  const { $toast } = useNuxtApp()
  const login = async ({ username, password }: ILogin) => {
    try {
      const { access, refresh } = await $fetch<ITokens>("/user/login/", {
        baseURL: useRuntimeConfig().public.apiBaseUrl,
        method: "POST",
        body: {
          username,
          password
        }
      })

      localStorage.setItem(ACCESS_TOKEN_KEY, access)
      localStorage.setItem(REFRESH_TOKEN_KEY, refresh)

      router.replace("/")

      $toast.success({
        title: "Success",
        message: "Login successful"
      })
      return {
        access,
        refresh
      }
    } catch (error: any) {
      $toast.error({
        title: "Error",
        message: "Invalid username or password"
      })
      throw createError(error)
    }
  }

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    router.replace("/auth/login")
    $toast.success({
      title: "Success",
      message: "Logout successful"
    })
  }

  const refreshToken = async () => {
    const { access, refresh } = await $fetch<ITokens>("user/token/refresh/", {
      baseURL: useRuntimeConfig().public.apiBaseUrl,
      method: "POST",
      body: {
        refresh: localStorage.getItem(REFRESH_TOKEN_KEY)
      }
    })

    localStorage.setItem(ACCESS_TOKEN_KEY, access)
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh)
  }

  return {
    login,
    logout
  }
}
