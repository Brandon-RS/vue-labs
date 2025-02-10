<script setup lang="ts">
import { useRouter } from 'vue-router';

import ProjectCard from '@projects/components/ProjectCard.vue';
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

  <div class="max-w-3xl p-4">
    <ul class="space-y-2">
      <li v-for="project in projects" :key="project.id">
        <ProjectCard
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
