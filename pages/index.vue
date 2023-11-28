<script lang="ts" setup></script>

<template>
  <main class="py-8">
    <div class="container">
      <NuxtImg
        class="h-20 mx-auto"
        src="/logo.svg"
        alt="Cyber Defenders logo"
      />

      <h1 class="text-4xl font-bold mt-8 text-center">
        Welcome to Cyber Defenders!
      </h1>

      <p class="mt-4 max-w-lg mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas quod dolorum
        exercitationem quos voluptatibus quas natus.
      </p>

      <div>
        <h2 class="text-2xl font-bold mt-8 text-center">Challenges and Labs</h2>
        <div class="flex gap-6 flex-wrap justify-center mt-8">
          <NuxtLink to="/challenges">
            <BaseCard>
              <template #title> Discover Challenges </template>
              <template #description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium?
              </template>
              <template #footer>
                <p
                  class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Find out more

                  <span
                    aria-hidden="true"
                    class="block transition-all group-hover:ms-0.5"
                  >
                    &rarr;
                  </span>
                </p>
              </template>
            </BaseCard>
          </NuxtLink>

          <NuxtLink to="/labs">
            <BaseCard>
              <template #title> Discover Labs </template>
              <template #description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium?
              </template>
              <template #footer>
                <p
                  class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Find out more

                  <span
                    aria-hidden="true"
                    class="block transition-all group-hover:ms-0.5"
                  >
                    &rarr;
                  </span>
                </p>
              </template>
            </BaseCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
