import izitoast from "izitoast"

import "izitoast/dist/css/iziToast.min.css"

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      toast: izitoast
    }
  }
})
