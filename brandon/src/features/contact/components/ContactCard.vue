<script setup lang="ts">

defineProps<{
  title: string;
  text: string;
  contact: string;
  link: string;
  icon: string;
}>();

</script>

<template>
  <div class="bg-gray-200 dark:bg-slate-800 rounded-xl p-5 cursor-pointer">

    <img
      class="w-16 h-16 mx-auto mb-4 icon-grey"
      :src=icon :alt=title>

    <h4 class="text-lg text-zinc-700 dark:text-zinc-200 font-semibold">
      {{ title }}
    </h4>

    <hr class="border-gray-700 border-2 rounded-full my-4" />

    <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
      {{ text }}
    </p>

    <p class="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-4">
      {{ contact }}
    </p>

    <a :href="link" target="_blank" rel="noopener noreferrer">
      <button
        class="w-full mt-6 px-5 py-2 rounded-lg border-gray-700 dark:border-amber-400 border-2 text-zinc-700 dark:text-zinc-200 hover:bg-gray-300 dark:hover:bg-slate-700 hover:text-zinc-900 dark:hover:text-zinc-200 transition duration-200 ease-in-out">
        Let's chat!
      </button>
    </a>
  </div>
</template>

<style scoped>
.dark .icon-grey {
  filter: brightness(0) saturate(100%) invert(90%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%);
}
</style>
