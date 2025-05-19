import projects from '@/common/stores/projects'
import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects-store', () => {
  const all = projects.filter((project) => project.home)

  return { projects: all }
})
