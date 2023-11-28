<script lang="ts" setup>
import type { IResource } from "~/types"

const { item } = defineProps<{
  item: IResource
}>()

const emit = defineEmits<{
  unbookmark: [id: string]
}>()

const { apiFetch } = useApi()
const { $toast } = useNuxtApp()
const loading = ref(false)

const bookmark = async () => {
  loading.value = true
  try {
    const data = await apiFetch(`/bookmarks/bookmark-item/`, {
      method: "PATCH",
      body: {
        uuid: item.uuid,
        type: item.type
      }
    })
    $toast.success({
      title: "Success",
      message: data as string
    })
  } catch (error) {
    console.error(error)
    $toast.error({
      title: "Error",
      message: "Something went wrong. Please try again."
    })
  } finally {
    loading.value = false
  }
}

const unbookmark = async () => {
  loading.value = true
  try {
    const data = await apiFetch(`/bookmarks/unbookmark-item/`, {
      method: "PATCH",
      body: {
        bookmark_uuid: item.bookmarkId
      }
    })
    $toast.success({
      title: "Success",
      message: data as string
    })
    emit("unbookmark", item.bookmarkId!)
  } catch (error) {
    console.error(error)
    $toast.error({
      title: "Error",
      message: "Something went wrong. Please try again."
    })
  } finally {
    loading.value = false
  }
}

const toggleBookmark = async () => {
  if (item.bookmarkId) {
    await unbookmark()
  } else {
    await bookmark()
  }
}

const buttonContent = computed(() => {
  if (item.bookmarkId) {
    return "Unbookmark"
  } else {
    return "Bookmark"
  }
})
</script>

<template>
  <BaseCard
    class="text-center"
    :class="{
      'animate-pulse': loading
    }"
  >
    <template #title> {{ item.title }} </template>
    <template #description>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </template>
    <template #footer>
      <button
        class="group mx-auto mt-4 flex items-center justify-between gap-2 rounded-lg border border-current px-3 py-2 text-blue-600 transition-colors hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500"
        @click="toggleBookmark"
        :disabled="loading"
      >
        <span class="font-medium transition-colors group-hover:text-white">
          {{ buttonContent }}
        </span>

        <span class="shrink-0">
          <Icon
            :name="
              loading
                ? 'eos-icons:bubble-loading'
                : 'material-symbols:bookmarks-outline-sharp'
            "
          />
        </span>
      </button>
    </template>
  </BaseCard>
</template>

<style scoped></style>
