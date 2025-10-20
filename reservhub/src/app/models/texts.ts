import { Category } from './category.model';
import { PageContent } from './page-content.model';

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
  },
  {
    id: 'usg',
    title: 'USG Rechner',
    icon: '🧮',
    color: 'var(--cat-uebungen)',
    description: 'Berechne deine Unterhaltssicherung schnell und einfach',
    route: '/usg-rechner'
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

export const PAGE_CONTENTS: { [key: string]: PageContent } = {
  heimatschutz: {
    categoryId: 'heimatschutz',
    hero: {
      title: 'Heimatschutz',
      subtitle: 'Schutz kritischer Infrastruktur und territoriale Reserve',
      color: 'var(--cat-heimatschutz)'
    },
    breadcrumbs: [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'Heimatschutz', route: '/heimatschutz' }
    ],
    sections: [
      {
        id: 'overview',
        title: 'Was ist Heimatschutz?',
        content: 'Der Heimatschutz bildet einen wesentlichen Baustein der Landesverteidigung. Die Heimatschutzkräfte sichern kritische Infrastruktur und unterstützen bei der Drehscheibe Deutschland.',
        icon: '🛡️'
      },
      {
        id: 'regiments',
        title: '6 Heimatschutzregimenter',
        content: 'Seit April 2025 gibt es sechs Heimatschutzregimenter in ganz Deutschland:',
        type: 'list',
        items: [
          'Heimatschutzregiment 1 (Alt-Duvenstedt, Schleswig-Holstein)',
          'Heimatschutzregiment 2 (Münster, NRW)',
          'Heimatschutzregiment 3 (Nienburg, Niedersachsen)',
          'Heimatschutzregiment 4 (Roth, Bayern)',
          'Heimatschutzregiment 5 (Ohrdruf, Thüringen)',
          'Heimatschutzregiment 6 (Altengrabow, Sachsen-Anhalt)'
        ]
      },
      {
        id: 'tasks',
        title: 'Aufgaben',
        content: 'Die Heimatschutzkräfte übernehmen vielfältige Aufgaben:',
        type: 'list',
        items: [
          'Objektschutz kritischer Infrastruktur',
          'Host Nation Support für Verbündete',
          'Unterstützung bei Katastrophenhilfe',
          'Sicherung von Versorgungslinien'
        ]
      }
    ],
    relatedLinks: [
      {
        label: 'Ich möchte Reservist werden',
        route: '/reservist-werden',
        icon: '👤',
        description: 'Erfahre, wie du Teil des Heimatschutzes werden kannst'
      },
      {
        label: 'Wehrübungen & Dienst',
        route: '/wehruebungen',
        icon: '📅',
        description: 'Übungstermine und Dienstleistung im Heimatschutz'
      }
    ]
  }
};