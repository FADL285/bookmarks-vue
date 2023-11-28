<script lang="ts" setup></script>

<template>
  <h1 class="relative flex justify-center mb-4">
    <p
      class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
    ></p>

    <span
      class="relative z-10 bg-white px-6 py-2 text-3xl md:text-4xl xl:text-5xl"
    >
      <slot />
    </span>
  </h1>
</template>

<style scoped></style>
