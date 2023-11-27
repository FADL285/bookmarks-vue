<template>
  <article
    class="max-w-lg w-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
  >
    <h3 class="mt-0.5 text-lg font-medium text-gray-900">
      <slot name="title" />
    </h3>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      <slot name="description" />
    </p>

    <slot name="footer" />
  </article>
</template>
