<script setup lang="ts">
import HomeBanner from '@/features/home/components/HomeBanner.vue';
import HomeContact from '@/features/home/components/HomeContact.vue';
import HomeProjects from '@/features/home/components/HomeProjects.vue';
</script>

<template>
  <section class="pt-5 md:pt-20">
    <home-banner name="Brandom" />

    <home-contact />

    <home-projects />

    <div class="flex flex-col justify-center items-center mt-10">
      <h4 class="text-lg font-semibold">
        This page was built using
        <a
          class="link"
          href="https://vuejs.org/"
          target="_blank"
          rel="noreferrer">Vue 3.5</a>
      </h4>

      <p class="mt-3 max-w-md text-center">
        You can find more of my work on
        <a
          class="link"
          href="https://github.com/Brandon-RS?tab=repositories"
          target="_blank"
          rel="noreferrer">GitHub</a>
        or check out the projects section.
      </p>

      <button
        class="mt-6 px-5 py-2 rounded-full border-amber-400 border-2 dark:text-amber-400 text-green-500 hover:bg-amber-400 hover:text-slate-200">
        <router-link
          :to="{ name: 'projects' }"
          class="btn mt-5">
          See More Projects
        </router-link>
      </button>
    </div>
  </section>
</template>

<style scoped></style>
