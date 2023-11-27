<script lang="ts" setup></script>

<template>
  <main class="py-8">
    <div class="container">
      <h1 class="text-4xl font-bold text-center">Cyber Defenders Labs</h1>

      <p class="mt-4 max-w-lg mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas quod dolorum
        exercitationem quos voluptatibus quas natus.
      </p>

      <div
        class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <BaseCard class="text-center" v-for="i in 10" :key="i">
          <template #title> Lab Title #Num </template>
          <template #description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </template>
          <template #footer>
            <button
              class="group mx-auto mt-4 flex items-center justify-between gap-2 rounded-lg border border-current px-3 py-2 text-blue-600 transition-colors hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500"
            >
              <span
                class="font-medium transition-colors group-hover:text-white"
              >
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

      <ThePagination class="mt-8 mx-auto" />
    </div>
  </main>
</template>

<style scoped></style>
