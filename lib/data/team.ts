export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  category: 'Leadership' | 'Strategy & Comms' | 'Media & Digital'
  linkedin?: string
  twitter?: string
  highlights?: string[]
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'fatoumatta-jallow',
    name: 'Fatoumatta Jallow',
    role: 'Founder & Managing Director',
    category: 'Leadership',
    bio: 'Over 16 years leading high-stakes corporate PR, executive reputation, and crisis management across West Africa and international markets.',
    image: '/team/team-fatoumatta.png',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    highlights: ['Ex-Senior Comms Advisor for ECOWAS', 'Led 40+ Corporate Brand Transformations'],
  },
  {
    id: 'ousman-camara',
    name: 'Ousman Camara',
    role: 'Head of Crisis & Strategic Comms',
    category: 'Leadership',
    bio: 'Specialist in high-tempo crisis mitigation, government advocacy, and high-impact media placements in global outlets.',
    image: '/team/team-ousman.png',
    linkedin: 'https://linkedin.com',
    highlights: ['Crisis Advisor to Major Financial Institutions', 'Featured Speaker on West African Media Optics'],
  },
  {
    id: 'isatou-njie',
    name: 'Isatou Njie',
    role: 'Director of Corporate Comms',
    category: 'Leadership',
    bio: 'Drives investor relations, stakeholder alignment, and CSR strategy for multinational corporations and regional institutions.',
    image: '/team/team-isatou.png',
    linkedin: 'https://linkedin.com',
    highlights: ['Architect of GTBoard Tourism Rebrand', '12+ Years Stakeholder Relations Expertise'],
  },
  {
    id: 'lamin-touray',
    name: 'Lamin Touray',
    role: 'Lead Brand Strategist',
    category: 'Strategy & Comms',
    bio: 'Crafts compelling narrative frameworks and market positioning strategies that make complex brands unforgettable.',
    image: '/team/team-lamin.png',
    linkedin: 'https://linkedin.com',
    highlights: ['Master Narrative Strategist', 'Designed Campaigns for 50+ Regional Brands'],
  },
  {
    id: 'mariama-sowe',
    name: 'Mariama Sowe',
    role: 'Digital PR & Social Influence Lead',
    category: 'Media & Digital',
    bio: 'Pioneers digital-first campaign amplification, executive social presence, and online reputation defense.',
    image: '/team/team-mariama.png',
    twitter: 'https://twitter.com',
    highlights: ['Built 15M+ Viral Impression Campaigns', 'Specialist in Executive Personal Branding'],
  },
  {
    id: 'ebrima-ceesay',
    name: 'Ebrima Ceesay',
    role: 'Government Affairs & Public Policy Lead',
    category: 'Strategy & Comms',
    bio: 'Bridge-builder between private enterprise and public policy, managing institutional relations and policy messaging.',
    image: '/team/team-ebrima.png',
    linkedin: 'https://linkedin.com',
    highlights: ['Policy Comms Veteran', 'Managed Public Diplomacy Campaigns'],
  },
  {
    id: 'binta-badjie',
    name: 'Binta Badjie',
    role: 'Content & Narrative Design Lead',
    category: 'Strategy & Comms',
    bio: 'Award-winning storyteller leading speechwriting, thought leadership publishing, and corporate storytelling.',
    image: '/team/team-binta.png',
    linkedin: 'https://linkedin.com',
    highlights: ['Published Op-Ed Ghostwriter', 'Senior Media Narrative Architect'],
  },
  {
    id: 'modou-gaye',
    name: 'Modou Gaye',
    role: 'Media Analytics & Research Lead',
    category: 'Media & Digital',
    bio: 'Turns sentiment analysis and media intelligence data into actionable PR insights and campaign optimizations.',
    image: '/team/team-modou.png',
    linkedin: 'https://linkedin.com',
    highlights: ['Data-Driven PR Specialist', 'Automated Media Sentiment Tracking Systems'],
  },
]
