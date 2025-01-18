export interface ProjectTag {
  id: string
  name: string
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
