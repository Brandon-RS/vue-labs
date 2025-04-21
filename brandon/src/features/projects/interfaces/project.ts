export interface ProjectTag {
  id: string
  tag: string
  link: string
}

export interface ProjectContent {
  id: string
  body: string
}

export interface Project {
  id: string
  name: string
  headline: string
  content?: ProjectContent
  link: string
  order: number
  home: boolean
  tags: ProjectTag[]
}
