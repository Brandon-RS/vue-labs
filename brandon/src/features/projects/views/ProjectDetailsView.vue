<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import LoadingSpinner from '@/common/components/LoadingSpinner.vue';
import { useProjectDetailsStore } from '@projects/stores/project-details.store';

const route = useRoute();
const store = useProjectDetailsStore();


onMounted(() => store.fetchProject(route.params.id as string));

</script>

<template>
  <div>
    <div class="min-h-96 flex justify-center items-center" v-if="store.isLoading">
      <LoadingSpinner />
    </div>

    <div v-else>
      <h1 class="text-3xl font-bold dark:text-gray-200">
        {{ store.project.name }}
      </h1>
      <hr class="mt-8 border-gray-300 dark:border-gray-700" />
      <h2 class="mt-4 text-2xl font-semibold">
        {{ store.project.headline }}
      </h2>

      <div class="mt-5"
        v-if="store.project.content"
        v-html="store.project.content!.body">
      </div>
    </div>
  </div>
</template>

<style scoped></style>
