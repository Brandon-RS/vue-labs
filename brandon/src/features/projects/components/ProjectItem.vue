<script setup lang="ts">
import type { Project } from '@projects/interfaces/project';

defineProps<{ project: Project }>();

const emit = defineEmits<{ (e: 'onTap'): void; }>();

const onClick = () => emit('onTap');

</script>

<template>
  <div
    class="bg-gray-200 dark:bg-slate-800 rounded-xl p-5 cursor-pointer hover:bg-gray-300 dark:hover:bg-slate-700"
    @click="onClick">

    <div class="flex items-center gap-2">
      <span class="text-sm text-gray-600 dark:text-gray-300 mt-2">
        <span class="text-lg text-zinc-700 dark:text-zinc-200 font-semibold">
          {{ project.name }}:
        </span>

        {{ project.headline }}
      </span>

      <div class="ml-auto">
        <a :href="project.link"
          @click.stop
          target="_blank"
          rel="noreferrer">
          <span
            class="text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 min-w-[110px] flex items-center">
            Check it out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 inline-block ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5.293 5.293a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586L10.293 4.707a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </a>

      </div>
    </div>

    <div class="flex flex-wrap gap-2 mt-2">
      <a
        v-for="tag in project.tags"
        :key="tag.id"
        :href="tag.link"
        @click.stop
        target="_blank"
        rel="noreferrer">
        <span
          class="px-2 py-1 text-sm rounded bg-gray-300 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-800">
          # {{ tag.tag }}
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
