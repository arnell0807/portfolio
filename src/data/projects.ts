export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  liveUrl: string
  repoUrl: string
  accent: string
}

export const profile = {
  name: 'Arnell Daniel',
  role: 'Frontend Developer',
  intro:
    'I build fast, typed React apps with clean state management and real backends. Here are a few things I have shipped.',
  github: 'https://github.com/arnell0807',
  email: 'arnelldaniel8@gmail.com',
}

export const projects: Project[] = [
  {
    slug: 'campuskit',
    name: 'CampusKit',
    tagline: 'Equipment checkout tracker for campuses',
    description:
      'A dashboard for managing campus equipment, students, checkouts and returns, backed by Supabase with a built-in demo mode.',
    highlights: [
      'Dashboard, equipment, student and checkout views',
      'Validated forms with React Hook Form',
      'Server state cached with TanStack Query',
      'Offline status detection with demo data fallback',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Supabase', 'Tailwind'],
    liveUrl: 'https://campuskit-one.vercel.app/',
    repoUrl: 'https://github.com/arnell0807/campuskit',
    accent: '#7c9cff',
  },
  {
    slug: 'carauction',
    name: 'Car Auction',
    tagline: 'Browse, bid on and list cars',
    description:
      'A car auction marketplace with live countdowns, filtering and sorting, a persistent watchlist and a form for creating new listings.',
    highlights: [
      'Live countdown timers on every auction',
      'Filter and sort state in Redux slices',
      'Watchlist persisted to local storage',
      'Supabase backend with a demo-data mode',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Supabase', 'Tailwind'],
    liveUrl: 'https://carauction-ten.vercel.app/',
    repoUrl: 'https://github.com/arnell0807/carauction',
    accent: '#ff8a5c',
  },
  {
    slug: 'catfacts',
    name: 'Cat Facts',
    tagline: 'Random cat facts, one click away',
    description:
      'A small app that fetches random cat facts from a public API, with a history of what you have seen and a list of favorites.',
    highlights: [
      'Data fetching with React Query',
      'History and favorites in a Redux slice',
      'Routed pages with React Router',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'React Query', 'React Router', 'Tailwind'],
    liveUrl: 'https://catfacts-gamma.vercel.app/',
    repoUrl: 'https://github.com/arnell0807/catfacts',
    accent: '#5fd3a3',
  },
]
