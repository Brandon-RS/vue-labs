import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '../interfaces/project'

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Project[]>([
    {
      id: '1',
      name: 'Project 1',
      headline: 'Project 1 Headline',
      content: { id: '1', body: 'Project 1 Description' },
      link: 'https://example.com',
      order: 1,
      tags: [{ id: '1', tag: 'Tag 1', link: 'https://example.com' }],
    },
    {
      id: '2',
      name: 'Project 2',
      headline: 'Project 2 Headline',
      content: { id: '1', body: 'Project 2 Description' },
      link: 'https://example.com',
      order: 2,
      tags: [{ id: '1', tag: 'Tag 1', link: 'https://example.com' }],
    },
  ])

  return {
    projects,
  }
})
