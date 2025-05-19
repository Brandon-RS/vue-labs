<script setup lang="ts">
import { useRouter } from 'vue-router';

import ProjectItem from '@projects/components/ProjectItem.vue';
import { useProjectsStore } from '@projects/stores/projects.store';

const router = useRouter();
const { projects } = useProjectsStore();

const goToDetails = (id: string) => {
  router.push({
    name: 'project-details',
    params: { id },
  });
}

</script>

<template>

  <div class="max-w-5xl p-4">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>

    <p class="text-gray-500 mb-4">Here are some of the projects I have worked on.</p>

    <ul class="space-y-2">
      <li v-for="project in projects" :key="project.id">
        <ProjectItem
          :project="project"
          @on-tap="goToDetails(project.id)" />
      </li>
    </ul>
  </div>

  <router-view />
</template>

<style scoped>
.project-card--hover:hover {
  transform: translateY(-1px) translateX(2px);
  @apply border border-gray-500 transition-transform ease-linear;
}
</style>
