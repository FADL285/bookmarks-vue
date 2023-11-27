<template>
  <BaseCard class="text-center animate-pulse">
    <template #title>
      <h3 class="h-4 w-3/4 mx-auto bg-slate-400 rounded"></h3>
    </template>
    <template #description>
      <div class="flex flex-col gap-2 mt-3">
        <div class="h-2 bg-slate-400 rounded"></div>
        <div class="h-2 bg-slate-400 rounded"></div>
        <div class="h-2 w-3/4 mx-auto bg-slate-400 rounded"></div>
      </div>
    </template>
    <template #footer>
      <div
        class="mt-4 w-1/3 mx-auto h-10 rounded-lg px-3 py-2 bg-slate-400"
      ></div>
    </template>
  </BaseCard>
</template>
