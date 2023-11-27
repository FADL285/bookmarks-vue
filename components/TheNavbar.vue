<script lang="ts" setup></script>

<template>
  <nav class="bg-white text-center p-4">
    <div class="container">
      <div class="flex items-center justify-between flex-wrap">
        <NuxtLink to="/" class="text-2xl font-bold">
          <NuxtImg class="h-9" src="/logo.svg" alt="Cyber Defenders logo" />
        </NuxtLink>

        <div class="flex justify-center gap-6 mt-4">
          <NuxtLink to="/" class="text-gray-900 hover:text-gray-800 text-lg">
            Home
          </NuxtLink>
          <NuxtLink
            to="/challenges"
            class="text-gray-900 hover:text-gray-800 text-lg"
          >
            Challenges
          </NuxtLink>
          <NuxtLink
            to="/labs"
            class="text-gray-900 hover:text-gray-800 text-lg"
          >
            Labs
          </NuxtLink>
          <NuxtLink
            to="/bookmarks"
            class="text-gray-900 hover:text-gray-800 text-lg relative"
          >
            Bookmarks
            <span
              class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700 absolute -top-3 -right-4"
            >
              15
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-blue-800;
}
</style>
