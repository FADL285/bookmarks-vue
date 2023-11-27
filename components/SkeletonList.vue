<template>
  <div
    class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <SkeletonItem v-for="i in 5" :key="i" />
  </div>
</template>
