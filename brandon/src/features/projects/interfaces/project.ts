export interface ProjectTag {
  id: string
  name: string
  link?: string
}

export interface Project {
  id: string
  name: string
  headline: string
  description: string
  link: string
  order: number
  tags: ProjectTag[]
}
