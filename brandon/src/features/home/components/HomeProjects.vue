<script setup lang="ts">
import { useHomeProjectsStore } from '@home/stores/useHomeProjectsStore';
import ProjectCard from '@projects/components/ProjectCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const projectsStore = useHomeProjectsStore();


const goToDetails = (id: string) => {
  router.push({
    name: 'project-details',
    params: { id },
  });
}

</script>

<template>
  <div class="mt-10 md:mt-12">
    <h3 class="text-xl text-center md:text-start">
      Some of the projects I've worked on.
    </h3>


    <div class="pt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <ProjectCard
        v-for="project in projectsStore.projects"
        :key="project.id"
        :project="project"
        @on-tap="goToDetails(project.id)" />

    </div>
  </div>
</template>

<style scoped></style>
