<template>
  <div>
    <TheNavbar />
    <NuxtPage />
  </div>
</template>

<style>
:root {
  --cyber-body-bg: #f1f5f9;
  --cyber-body-color: #64748b;
  --cyber-headings-color: #1e293b;
}

body {
  background-color: var(--cyber-body-bg);
  color: var(--cyber-body-color);
  min-height: 100vh;
  min-height: 100lvh;
}

:is(h1, h2, h3, h4, h5, h6) {
  color: var(--cyber-headings-color);
}
</style>
