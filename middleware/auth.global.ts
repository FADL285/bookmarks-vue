import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "~/constants"

export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.path.startsWith("/auth")) return
  // Check if tokens is set.
  if (
    !localStorage.getItem(ACCESS_TOKEN_KEY) ||
    !localStorage.getItem(REFRESH_TOKEN_KEY)
  ) {
    return navigateTo("/auth/login")
  }
})
