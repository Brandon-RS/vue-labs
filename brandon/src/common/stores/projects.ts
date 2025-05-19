import type { Project } from '@projects/interfaces/project'
import { getTagByName } from './tags'

const projects: Project[] = [
  {
    id: '67ac1ec95c271513f577988c',
    name: 'Talking App',
    headline: 'Real-time chat application.',
    link: 'https://github.com/Brandon-RS/talking',
    order: 1,
    home: true,
    tags: [getTagByName('flutter'), getTagByName('socket.io'), getTagByName('node')],
  },
  {
    id: '67ac1f0b6d986b53f3790f0e',
    name: 'Locate',
    headline:
      'Geolocation mobile app, built with Mapbox and Google Maps, built with Mapbox and Google Maps, built with Mapbox and Google Maps.',
    link: 'https://github.com/Brandon-RS/News-Flutter',
    order: 2,
    home: true,
    tags: [getTagByName('flutter'), getTagByName('mapbox'), getTagByName('g maps')],
  },
  {
    id: '67ac2223a536b44aae33dc5b',
    name: 'Daily News',
    headline: 'Mobile application to keep up with the latest news.',
    link: 'https://github.com/Brandon-RS/News-Flutter',
    order: 3,
    home: true,
    tags: [getTagByName('flutter')],
  },
]

export default projects
