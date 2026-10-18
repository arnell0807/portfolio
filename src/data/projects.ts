export type Project = {
  slug: string
  name: string
  description: string
  stack: string[]
  liveUrl: string
  repoUrl: string
  accent: string
}

export const profile = {
  name: 'Arnell Daniel',
  role: 'Frontend Developer',
  focus: 'React, TypeScript.',
  github: 'https://github.com/arnell0807',
  email: 'arnelldaniel8@gmail.com',
}

export const projects: Project[] = [
  {
    slug: 'campuskit',
    name: 'CampusKit',
    description: 'Track campus equipment, students, checkouts and returns from one dashboard.',
    stack: ['Redux Toolkit', 'TanStack Query', 'Supabase', 'Tailwind'],
    liveUrl: 'https://campuskit-one.vercel.app/',
    repoUrl: 'https://github.com/arnell0807/campuskit',
    accent: '#7c9cff',
  },
  {
    slug: 'carauction',
    name: 'Car Auction',
    description:
      'Browse auctions with live countdowns, filter listings, keep a watchlist and post your own cars.',
    stack: ['Redux Toolkit', 'TanStack Query', 'Supabase', 'Tailwind'],
    liveUrl: 'https://carauction-ten.vercel.app/',
    repoUrl: 'https://github.com/arnell0807/carauction',
    accent: '#ff8a5c',
  },
  {
    slug: 'catfacts',
    name: 'Cat Facts',
    description: 'Get random cat facts, look back through your history and save your favorites.',
    stack: ['Redux Toolkit', 'React Query', 'React Router', 'Tailwind'],
    liveUrl: 'https://catfacts-gamma.vercel.app/',
    repoUrl: 'https://github.com/arnell0807/catfacts',
    accent: '#5fd3a3',
  },
]
