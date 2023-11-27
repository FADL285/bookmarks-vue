<script lang="ts" setup>
import type { IResource } from "~/types"
defineProps<{
  items: IResource[]
}>()
</script>

<template>
  <div
    class="grid items-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <BaseCard class="text-center" v-for="item in items" :key="item.uuid">
      <template #title> {{ item.title }} </template>
      <template #description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </template>
      <template #footer>
        <button
          class="group mx-auto mt-4 flex items-center justify-between gap-2 rounded-lg border border-current px-3 py-2 text-blue-600 transition-colors hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500"
        >
          <span class="font-medium transition-colors group-hover:text-white">
            Bookmark it
          </span>

          <span class="shrink-0">
            <Icon name="material-symbols:bookmarks-outline-sharp" />
            <!-- material-symbols:bookmarks-sharp -->
          </span>
        </button>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped></style>
