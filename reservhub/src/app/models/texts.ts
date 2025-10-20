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
  },
  usg: {
    categoryId: 'usg',
    hero: {
      title: 'USG Rechner',
      subtitle: 'Berechne deine Unterhaltssicherung schnell und einfach',
      color: 'var(--cat-uebungen)'
    },
    breadcrumbs: [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'USG Rechner', route: '/usg-rechner' }
    ],
    sections: [
      {
        id: 'info',
        title: 'Was ist die Unterhaltssicherung?',
        content: 'Die Unterhaltssicherung nach dem Unterhaltssicherungsgesetz (USG) stellt sicher, dass Reservisten während ihrer Wehrübungen finanziell abgesichert sind. Du erhältst eine Mindestleistung sowie eine Dienstleistungsprämie.',
        icon: '💰'
      },
      {
        id: 'anspruch',
        title: 'Wer hat Anspruch?',
        content: 'Anspruchsberechtigt sind Reservisten, die zu Wehrübungen oder anderen Dienstleistungen herangezogen werden:',
        type: 'list',
        items: [
          'Arbeitnehmer in der freien Wirtschaft',
          'Selbstständige und Freiberufler',
          'Studierende und Auszubildende',
          'Beamte (in bestimmten Fällen)'
        ]
      },
      {
        id: 'berechnung',
        title: 'Wie wird berechnet?',
        content: 'Die Berechnung erfolgt nach Dienstgrad und Anzahl der unterhaltsberechtigten Kinder. Der Rechner oben verwendet die aktuellen Sätze nach der Mindestleistungsanpassungsverordnung vom 19. April 2024.',
        icon: '🧮'
      }
    ],
    relatedLinks: [
      {
        label: 'Wehrübungen & Dienst',
        route: '/wehruebungen',
        icon: '📅',
        description: 'Informationen zu Wehrübungen und Dienstzeiten'
      },
      {
        label: 'Rechtliches & Karriere',
        route: '/rechtliches',
        icon: '⚖️',
        description: 'Rechte und Pflichten als Reservist'
      }
    ]
  }




};

export const USG_CALCULATOR = {
  title: 'USG Rechner',
  subtitle: 'Unterhaltssicherungsgesetz - Berechnung',
  info: {
    text: 'Als Arbeitnehmer oder Arbeitnehmerin in der freien Wirtschaft kann wahlweise die Mindestleistung nach §8 USG oder den Ersatz des Verdienstausfalles beantragt werden.',
    note: 'Dieser Rechner basiert auf der Erhöhung durch die Mindestleistungsanpassungsverordnung vom 19. April 2024.'
  },
  labels: {
    dienstgrad: 'Dienstgrad',
    anzahlKinder: 'Anzahl Kinder',
    kinder: 'Kinder',
    kinderHint: 'Anzahl unterhaltsberechtigter Kinder',
    berechnungsart: 'Berechnungsart',
    tage: 'Tage',
    zeitraum: 'Zeitraum',
    rdTage: 'RD-Tage',
    rdTageHint: 'Wochentage einschließlich Wochenenden',
    beginn: 'Beginn',
    ende: 'Ende',
    reset: 'Zurücksetzen',
    parameter: 'Berechnungsparameter',
    ergebnis: 'Berechnungsergebnis',
    mindestleistung: 'Mindestleistung (§8 USG)',
    praemie: 'Dienstleistungsprämie (§ 10 Abs. 1)',
    summe: 'Summe (steuerfrei)'
  }
};

