import { defineStore } from 'pinia'
import { ref } from 'vue'

import axiosInstance from '@/common/api/axios.instance'
import { ENDPOINTS } from '@/common/api/endpoints'
import type { Project } from '@projects/interfaces/project'

export const useProjectDetailsStore = defineStore('project-details-store', () => {
  const isLoading = ref(false)
  const project = ref<Project>({} as Project)

  const fetchProject = async (id: string) => {
    isLoading.value = true
    await axiosInstance.get(ENDPOINTS.project(id)).then((response) => {
      project.value = response.data
    })
    isLoading.value = false
  }

  return { project, isLoading, fetchProject }
})
