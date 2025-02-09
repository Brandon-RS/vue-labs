import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '../interfaces/project'

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Project[]>([
    {
      id: '1',
      name: 'Project 1',
      headline: 'Project 1 Headline',
      description: 'Project 1 Description',
      link: 'https://example.com',
      order: 1,
      tags: [{ id: '1', name: 'Tag 1' }],
    },
    {
      id: '2',
      name: 'Project 2',
      headline: 'Project 2 Headline',
      description: 'Project 2 Description',
      link: 'https://example.com',
      order: 2,
      tags: [{ id: '1', name: 'Tag 1' }],
    },
  ])

  return {
    projects,
  }
})
