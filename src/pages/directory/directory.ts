import { getRepositoryDetails } from "../../utils";

export interface Project {
  icon: string;
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    icon: 'https://scumsuck.com/images/scumsuck88x31.png',
    name: 'SCUMSUCK',
    description: 'Comics and cartoons',
    demoLink: 'https://scumsuck.com',
    favs: 'chocolate, vanilla, frog',
    tags: ['Heavy Metal', 'Boomer Rock', 'Hair Metal']
  },
  {
    icon: 'https://scumsuck.com/images/deflectric.png',
    name: 'Deflectric',
    description: 'Nurse Joy',
    demoLink: 'https://deflectric.neocities.org',
    tags: ['Boomer Rock']
  },
  {
    icon: 'https://scumsuck.com/images/spillingdown.png',
    name: 'spillingdown',
    description: 'sonmom lover',
    demoLink: 'https://mappapapa.neocities.org',
    tags: ['Boomer Rock']
  },
  {
    name: 'Lask',
  description: 'Grogu stan',
  demoLink: 'https://target.com',
  tags: ['Star Wars']
}
]
