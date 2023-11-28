<script lang="ts" setup>
import { API_PAGE_SIZE } from "~/constants"
import type { IBookmarkResourceResponse, ItemsType } from "~/types"
import { adjustType } from "~/utils"

type RouteParams = {
  type?: ItemsType
}

definePageMeta({
  key: (route) => route.fullPath,
  validate: ({ params }) => {
    return ["challenges", "labs"].includes(
      (params as RouteParams).type as ItemsType
    )
  }
})

const { params, query } = useRoute()

const type = computed(
  () => ((params as RouteParams).type as ItemsType) || "challenges"
)

const { apiFetch } = useApi()

const { data, pending, status, error, refresh } = useLazyAsyncData(
  "challenges",
  async () => {
    const data = await apiFetch<IBookmarkResourceResponse>(
      `/bookmarks/${type.value.slice(0, -1)}-bookmarks/`, //-> /bookmarks/challenge-bookmarks/
      {
        params: {
          page: page.value
        }
      }
    )
    return data
  }
)

const totalPages = computed(() => {
  if (data.value?.results) {
    return Math.ceil(data.value.count / API_PAGE_SIZE)
  }
  return 0
})

const page = computed(() => Number(query.page) || 1)

watch(
  () => page.value,
  () => {
    refresh()
  }
)
</script>

<template>
  <main class="py-8">
    <div class="container">
      <MainHeading class="capitalize">{{ type }} Bookmarks</MainHeading>

      <p class="mt-4 mb-8 max-w-lg mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas quod dolorum
        exercitationem quos voluptatibus quas natus.
      </p>

      <!-- <div v-if="pending && !data?.results"> -->
      <div v-if="pending">
        <SkeletonList />
      </div>
      <div v-else-if="data?.results">
        <ItemsList
          class="grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          :items="data?.results"
          @refetch="refresh"
        />
      </div>
      <div v-else-if="status === 'error'">
        <div class="text-center">
          <p>Something went wrong</p>
          <p>{{ error }}</p>
        </div>
      </div>
      <div v-else>
        <p class="text-center">No data</p>
      </div>

      <template v-if="data?.results">
        <ThePagination
          class="mt-8 justify-center"
          :total-pages="totalPages"
          :page="page"
          :next="data?.next"
          :previous="data?.previous"
        />
      </template>
    </div>
  </main>
</template>

<style scoped></style>
