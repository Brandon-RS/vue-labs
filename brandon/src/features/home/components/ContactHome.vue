<script setup lang="ts">
</script>

<template>
  <div class="flex gap-5 mt-8 justify-center md:justify-start">
    <button
      class="px-5 py-2 rounded-full bg-amber-300 dark:bg-amber-400 text-primary">
      <router-link :to="{ name: 'contact' }">Let's talk</router-link>
    </button>

    <button
      class="px-5 py-2 rounded-full bg-gray-200 dark:bg-gray-600 border-2 dark:border-gray-600 hover:border-gray-400">
      <router-link :to="{ name: 'projects' }">Check my work</router-link>
    </button>
  </div>
</template>

<style scoped></style>
