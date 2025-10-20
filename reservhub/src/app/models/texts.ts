import { Category } from './category.model';

export const CATEGORIES: Category[] = [
  {
    id: 'reservist',
    title: 'Ich möchte Reservist werden',
    icon: '👤',
    color: 'var(--cat-reservist)',
    description: 'Einstieg als Zivilist, Voraussetzungen und Bewerbung',
    route: '/reservist-werden'
  },
  {
    id: 'heimatschutz',
    title: 'Heimatschutz',
    icon: '🛡️',
    color: 'var(--cat-heimatschutz)',
    description: 'Schutz kritischer Infrastruktur und territoriale Reserve',
    route: '/heimatschutz'
  },
  {
    id: 'uebungen',
    title: 'Wehrübungen & Dienst',
    icon: '📅',
    color: 'var(--cat-uebungen)',
    description: 'Übungstermine, Beorderung und Freistellung',
    route: '/wehruebungen'
  },
  {
    id: 'rechtliches',
    title: 'Rechtliches & Karriere',
    icon: '⚖️',
    color: 'var(--cat-rechtliches)',
    description: 'Kündigungsschutz, Beförderungen und Rechte',
    route: '/rechtliches'
  },
  {
    id: 'cyber',
    title: 'Cyber- & Fachreserve',
    icon: '💻',
    color: 'var(--cat-cyber)',
    description: 'IT-Spezialisierungen und Fachkompetenzen',
    route: '/cyber-reserve'
  },
  {
    id: 'news',
    title: 'Aktuelles & News',
    icon: '📰',
    color: 'var(--cat-news)',
    description: 'Bundeswehr News und politische Entwicklungen',
    route: '/news'
  }
];

export const TEXTS = {
  hero: {
    title: 'Gefechtsstand Reserve',
    subtitle: 'Deine zentrale Informationsplattform für die Reserve'
  },
  dashboard: {
    title: 'Kategorien',
    subtitle: 'Finde schnell die Informationen, die du brauchst'
  },
  stats: {
    targetReservists: '200.000',
    currentReservists: '51.000',
    targetYear: '2030'
  }
};