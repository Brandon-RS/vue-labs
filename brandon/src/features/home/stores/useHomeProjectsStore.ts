import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { useRequestStatus } from '@/common/stores/useRequestStatus'
import type { Project } from '@projects/interfaces/project'

export const useHomeProjectsStore = defineStore('home-projects', () => {
  const status = useRequestStatus()
  const projects = ref<Project[]>([])
  const isLoading = computed(() => status.loading)

  const fetchProjects = async () => {
    status.start()
    // TODO(BRANDOM): Make a real API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    status.successResponse()

    projects.value = [
      {
        id: '1',
        name: 'Project 1',
        headline: 'Headline 1',
        description: 'Description 1',
        link: 'https://example.com',
        order: 1,
        tags: [
          { id: '1', name: 'Tag 1', link: 'https://example.com' },
          { id: '2', name: 'Tag 2' },
        ],
      },
      {
        id: '2',
        name: 'Project 2',
        headline: 'Headline 2',
        description: 'Description 2',
        link: 'https://example.com',
        order: 2,
        tags: [
          { id: '1', name: 'Tag 1' },
          { id: '3', name: 'Tag 3' },
        ],
      },
      {
        id: '3',
        name: 'Project 3',
        headline: 'Headline 3',
        description: 'Description 3',
        link: 'https://example.com',
        order: 3,
        tags: [
          { id: '2', name: 'Tag 2' },
          { id: '3', name: 'Tag 3' },
        ],
      },
      {
        id: '4',
        name: 'Project 4',
        headline: 'Headline 4',
        description: 'Description 4',
        link: 'https://example.com',
        order: 4,
        tags: [
          { id: '1', name: 'Tag 1' },
          { id: '2', name: 'Tag 2' },
          { id: '3', name: 'Tag 3' },
        ],
      },
      {
        id: '5',
        name: 'Project 5',
        headline: 'Headline 5',
        description: 'Description 5',
        link: 'https://example.com',
        order: 5,
        tags: [
          { id: '1', name: 'Tag 1' },
          { id: '2', name: 'Tag 2' },
          { id: '3', name: 'Tag 3' },
        ],
      },
    ]
  }

  return { projects, isLoading, fetchProjects }
})
