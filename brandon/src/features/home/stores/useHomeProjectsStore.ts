import { defineStore } from 'pinia'
import { ref } from 'vue'

import axiosInstance from '@/common/api/axios.instance'
import { ENDPOINTS } from '@/common/api/endpoints'
import type { Project } from '@projects/interfaces/project'

export const useHomeProjectsStore = defineStore('home-projects', () => {
  const isLoading = ref(false)
  const projects = ref<Project[]>([])

  const fetchProjects = async () => {
    isLoading.value = true

    await axiosInstance
      .get(ENDPOINTS.projects)
      .then((response) => {
        projects.value = response?.data as Project[]
      })
      .catch((error) => {
        console.error(error)
      })

    isLoading.value = false
  }

  return { projects, isLoading, fetchProjects }
})
