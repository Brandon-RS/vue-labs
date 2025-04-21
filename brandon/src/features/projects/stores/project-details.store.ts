import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Project } from '@projects/interfaces/project'

export const useProjectDetailsStore = defineStore('project-details-store', () => {
  const isLoading = ref(false)
  const project = ref<Project>({} as Project)

  // TODO(BRANDOM): Fix this

  const fetchProject = async (id: string) => {
    isLoading.value = true
    isLoading.value = false
  }

  return { project, isLoading, fetchProject }
})
