<script setup lang="ts">
import SimpleCard from '@common/components/SimpleCard.vue';
import { useProjectsStore } from '@projects/stores/projects.store';
import { useRouter } from 'vue-router';

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
        <simple-card
          :title="project.name"
          :description="project.headline"
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
