<script setup lang="ts">

defineProps<{ name: string }>();
const repos = 'https://github.com/Brandon-RS?tab=repositories'

</script>

<template>
  <div class="flex flex-col md:flex-row items-center gap-4">
    <div class="text-center md:text-left max-w-3xl">
      <div class="flex flex-col gap-3">
        <h1 class="text-4xl font-bold text-green-500 dark:text-amber-400">
          Hey, I'm {{ name }}!
        </h1>

        <h2 class="text-3xl font-semibold text-gray-600 dark:text-slate-100">
          Full-stack developer who loves building things with
          <a href="https://flutter.dev/" target="_blank">Flutter!</a> 🚀
        </h2>
      </div>

      <div class="text-lg mt-4 flex flex-col gap-2">
        <p>
          I've been creating
          <a class="link" :href="repos" target="_blank">mobile</a>,
          <a class="link" :href="repos" target="_blank">web</a>, and
          <a class="link" :href="repos" target="_blank">desktop</a>
          apps since 2023, but I've been dabbling in software development since my university days a
          few years before that.
        </p>

        <p>
          I'm always excited to learn about the latest tech and make sure my
          applications are fast and scalable. I'm happy to work as part of a team or
          independently, and I'm always looking for opportunities to learn and grow.
        </p>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <img class="h-64 md:h-80 max-w-fit"
        src="@/assets/images/pet.webp" alt="Pet image" />
    </div>
  </div>
</template>

<style scoped></style>
