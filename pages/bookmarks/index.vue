<script lang="ts" setup></script>

<template>
  <main class="py-8">
    <div class="container">
      <MainHeading>Bookmarks</MainHeading>

      <p class="mt-4 max-w-lg mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas quod dolorum
        exercitationem quos voluptatibus quas natus.
      </p>
    </div>

    <div>
      <div class="flex gap-6 flex-wrap justify-center mt-8">
        <NuxtLink to="/bookmarks/challenges">
          <BaseCard>
            <template #title>
              <Icon
                name="material-symbols:bookmarks-outline-sharp"
                class="text-xl"
              />
              Challenges Bookmarks
            </template>
            <template #description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium?
            </template>
            <template #footer>
              <p
                class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Check them

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

        <NuxtLink to="/bookmarks/labs">
          <BaseCard>
            <template #title>
              <Icon
                name="material-symbols:bookmarks-outline-sharp"
                class="text-xl"
              />
              Labs Bookmarks
            </template>
            <template #description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium?
            </template>
            <template #footer>
              <p
                class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Check them

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
  </main>
</template>

<style scoped></style>
