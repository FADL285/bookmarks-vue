<script lang="ts" setup>
import type { IBookmarkResource, IResource } from "~/types"
const { items } = defineProps<{
  items: IResource[] | IBookmarkResource[]
}>()

const emit = defineEmits<{
  refetch: []
}>()

// return item based on type
const getItem = (item: IResource | IBookmarkResource): IResource => {
  if ("challenge" in item) {
    item.challenge!.bookmarkId = item.uuid
    return item.challenge!
  } else if ("lab" in item) {
    item.lab!.bookmarkId = item.uuid
    return item.lab!
  } else {
    return item as IResource
  }
}

const unbookmark = (id: string) => {
  const index = items.findIndex((item) => item.uuid === id)
  if (index !== -1) {
    items.splice(index, 1)
    // emit("refetch")
  }
}
</script>

<template>
  <div class="grid justify-center">
    <ItemCard
      v-for="item in items"
      :key="item.uuid"
      :item="getItem(item)"
      @unbookmark="unbookmark"
    />
  </div>
</template>

<style scoped></style>
