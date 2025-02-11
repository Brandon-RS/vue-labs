<script setup lang="ts">
import type { Project } from '@projects/interfaces/project';

defineProps<{ project: Project }>();

const emit = defineEmits<{ (e: 'onTap'): void; }>();

const onClick = () => emit('onTap');

</script>

<template>
  <div
    class="bg-gray-200 dark:bg-slate-800 rounded-xl p-5 cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-700"
    @click.self="onClick">
    <h4 class="text-lg text-zinc-700 dark:text-zinc-200 font-semibold">
      {{ project.name }}
    </h4>

    <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
      {{ project.headline }}
    </p>

    <div class="flex flex-wrap gap-2 mt-2">
      <a
        v-for="tag in project.tags"
        :key="tag.id"
        :href="project.link"
        target="_blank"
        rel="noreferrer">
        <span
          class="px-2 py-1 text-sm rounded bg-gray-300 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-800">
          # {{ tag.name }}
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
