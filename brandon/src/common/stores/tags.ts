import type { ProjectTag } from '@/features/projects/interfaces/project'

const tags: ProjectTag[] = [
  { id: '67ac1b3d6c5986dd50340d2b', tag: 'Flutter', link: 'https://flutter.dev' },
  { id: '67ac1b6338fe019bac51b473', tag: 'Vue', link: 'https://vuejs.org' },
  { id: '67ac1bbb38fe019bac51b474', tag: 'Nest', link: 'https://nestjs.com' },
  { id: '67ac1bf66d986b53f3790f0e', tag: 'Node', link: 'https://nodejs.org/en' },
  { id: '67ac1c2b38fe019bac51b475', tag: 'Express', link: 'https://expressjs.com' },
  { id: '67ac1c5838fe019bac51b476', tag: 'socket.io', link: 'https://socket.io' },
  { id: '67ac1c9c6d986b53f3790f0f', tag: 'Mongodb', link: 'https://www.mongodb.com' },
  { id: '67ac1cc26d986b53f3790f10', tag: 'Mapbox', link: 'https://www.mapbox.com' },
  { id: '67ac1d0401aded1b7f1ba043', tag: 'G Maps', link: 'https://developers.google.com/maps' },
  { id: '67ac1d2001aded1b7f1ba044', tag: 'Pinia', link: 'https://pinia.vuejs.org' },
  { id: '67ac1d3ff7a959a51be871d6', tag: 'Tailwind CSS', link: 'https://tailwindcss.com' },
]

export const getTagByName = (name: string) => {
  const tag = tags.find((tag) => tag.tag.toLowerCase() === name.toLowerCase())
  if (!tag) {
    throw new Error(`Tag ${name} not found`)
  }

  return tag
}

export default tags
