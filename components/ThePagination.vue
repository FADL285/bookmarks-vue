<script lang="ts" setup>
const {
  page,
  queryName = "page",
  totalPages
} = defineProps<{
  next?: string | null
  previous?: string | null
  totalPages: number
  page: number
  queryName?: string
}>()

const { query } = useRoute()
const router = useRouter()

// merge all query params with new page
const getQuery = (page: number) => {
  return {
    ...query,
    [queryName]: page
  }
}
const getQueryString = (page: number) => {
  return Object.entries(getQuery(page))
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
}

// prev query computed
const prevQuery = computed(() => {
  if (page <= 1) {
    return null
  }
  return getQueryString(page - 1)
})
// next query computed
const nextQuery = computed(() => {
  if (page >= totalPages) {
    return null
  }
  return getQueryString(page + 1)
})
</script>

<template>
  <div class="flex items-center gap-3">
    <NuxtLink
      :disabled="page <= 1"
      :to="`?${prevQuery}`"
      class="flex h-10 w-10 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Prev Page</span>
      <Icon name="material-symbols:chevron-left" class="text-lg" />
    </NuxtLink>

    <p class="text-base text-gray-900">
      {{ page }}
      <span class="mx-0.25">/</span>
      {{ totalPages }}
    </p>

    <NuxtLink
      :disabled="page >= totalPages"
      :to="`?${nextQuery}`"
      class="inline-flex h-10 w-10 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Next Page</span>
      <Icon name="material-symbols:chevron-right" class="text-lg" />
    </NuxtLink>
  </div>
</template>

<style scoped>
a[disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}
</style>
