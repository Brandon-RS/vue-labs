<script setup lang="ts">
import { onMounted } from 'vue';

import LoadingSpinner from '@common/components/LoadingSpinner.vue';
import SimpleCard from '@common/components/SimpleCard.vue';
import { useHomeProjectsStore } from '@home/stores/useHomeProjectsStore';

const projectsStore = useHomeProjectsStore();

onMounted(() => projectsStore.fetchProjects());
</script>

<template>
  <div class="mt-10 md:mt-12">
    <h3 class="text-xl text-center md:text-start">
      Some of the projects I've worked on.
    </h3>

    <div class="min-h-44 flex justify-center items-center"
      v-if="projectsStore.isLoading">
      <loading-spinner />
    </div>

    <div
      class="pt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      v-else>

      <simple-card
        v-for="project in projectsStore.projects"
        :key="project.id"
        :title="project.name"
        :description="project.headline" />

    </div>
  </div>
</template>

<style scoped></style>
