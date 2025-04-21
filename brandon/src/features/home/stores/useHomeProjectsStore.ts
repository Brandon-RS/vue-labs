import projects from '@/common/stores/projects'
import { defineStore } from 'pinia'

export const useHomeProjectsStore = defineStore('home-projects', () => {
  const homeProjects = projects.filter((project) => project.home)

  return { projects: homeProjects }
})
