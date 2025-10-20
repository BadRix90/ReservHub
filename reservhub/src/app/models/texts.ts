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
  },
  reservistwerden: {
    categoryId: 'reservist',
    hero: {
      title: 'Ich möchte Reservist werden',
      subtitle: 'Einstieg als Zivilist, Voraussetzungen und Bewerbung',
      color: 'var(--cat-reservist)'
    },
    breadcrumbs: [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'Reservist werden', route: '/reservist-werden' }
    ],
    sections: [
      {
        id: 'voraussetzungen',
        title: 'Voraussetzungen',
        content: 'Um Reservist zu werden, müssen bestimmte Voraussetzungen erfüllt sein:',
        icon: '✅',
        type: 'list',
        items: [
          'Deutsche Staatsbürgerschaft',
          'Mindestalter 17 Jahre (mit Einverständnis der Erziehungsberechtigten)',
          'Gesundheitliche und körperliche Eignung',
          'Keine Vorstrafen',
          'Bereitschaft zu regelmäßigen Wehrübungen'
        ]
      },
      {
        id: 'wege',
        title: 'Wege in die Reserve',
        content: 'Es gibt verschiedene Möglichkeiten, Reservist zu werden:',
        type: 'list',
        items: [
          'Als ehemaliger Zeitsoldat oder Berufssoldat',
          'Als Wehrpflichtiger (nach Grundwehrdienst)',
          'Als ungedienter Reservist (Bewerbung ohne vorherige Dienstzeit)',
          'Über die Cyber-Reserve oder Fachreserve mit speziellen Qualifikationen'
        ]
      },
      {
        id: 'bewerbung',
        title: 'Bewerbungsprozess',
        content: 'Der Weg zum Reservisten erfolgt in mehreren Schritten: Online-Bewerbung beim Karrierecenter der Bundeswehr, medizinische Untersuchung, Eignungsfeststellung und abschließende Einplanung in eine Reservisteneinheit.',
        icon: '📋'
      }
    ],
    relatedLinks: [
      {
        label: 'Wehrübungen & Dienst',
        route: '/wehruebungen',
        icon: '📅',
        description: 'Informationen zu Übungen und Dienstzeiten'
      },
      {
        label: 'Rechtliches & Karriere',
        route: '/rechtliches',
        icon: '⚖️',
        description: 'Rechte und Pflichten als Reservist'
      }
    ]
  },

  wehruebungen: {
    categoryId: 'uebungen',
    hero: {
      title: 'Wehrübungen & Dienst',
      subtitle: 'Übungstermine, Beorderung und Freistellung',
      color: 'var(--cat-uebungen)'
    },
    breadcrumbs: [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'Wehrübungen', route: '/wehruebungen' }
    ],
    sections: [
      {
        id: 'arten',
        title: 'Arten von Wehrübungen',
        content: 'Reservisten können an verschiedenen Arten von Übungen teilnehmen:',
        icon: '📅',
        type: 'list',
        items: [
          'Kurzübungen (1-3 Tage)',
          'Wochenendübungen',
          'Blockübungen (bis zu 3 Wochen)',
          'Internationale Übungen',
          'Spezialausbildungen und Lehrgänge'
        ]
      },
      {
        id: 'beorderung',
        title: 'Beorderung und Freistellung',
        content: 'Die Teilnahme an Wehrübungen erfolgt auf freiwilliger Basis. Bei einer Beorderung hat der Reservist Anspruch auf Freistellung vom Arbeitgeber. Der Arbeitgeber erhält eine Entschädigung für den Verdienstausfall des Mitarbeiters.',
        icon: '📨'
      },
      {
        id: 'vergütung',
        title: 'Vergütung',
        content: 'Während der Wehrübung erhalten Reservisten Unterhaltssicherung nach dem USG sowie eine Dienstleistungsprämie. Die Höhe richtet sich nach Dienstgrad und Anzahl der Kinder.',
        icon: '💰'
      },
      {
        id: 'verpflegung',
        title: 'Verpflegung und Unterkunft',
        content: 'Während der Übung werden Unterkunft und Verpflegung von der Bundeswehr gestellt. Fahrtkosten werden nach dem Bundesreisekostengesetz erstattet.',
        icon: '🏨'
      }
    ],
    relatedLinks: [
      {
        label: 'USG Rechner',
        route: '/usg-rechner',
        icon: '🧮',
        description: 'Berechne deine Unterhaltssicherung'
      },
      {
        label: 'Rechtliches & Karriere',
        route: '/rechtliches',
        icon: '⚖️',
        description: 'Kündigungsschutz und Rechte'
      }
    ]
  },

  rechtliches: {
    categoryId: 'rechtliches',
    hero: {
      title: 'Rechtliches & Karriere',
      subtitle: 'Kündigungsschutz, Beförderungen und Rechte',
      color: 'var(--cat-rechtliches)'
    },
    breadcrumbs: [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'Rechtliches', route: '/rechtliches' }
    ],
    sections: [
      {
        id: 'kündigungsschutz',
        title: 'Kündigungsschutz',
        content: 'Reservisten genießen besonderen Kündigungsschutz während und nach Wehrübungen:',
        icon: '🛡️',
        type: 'list',
        items: [
          'Kündigungsverbot während der Wehrübung',
          'Kündigungsschutz bis 2 Wochen nach Ende der Übung',
          'Rückkehrrecht auf den bisherigen oder gleichwertigen Arbeitsplatz',
          'Keine Benachteiligung aufgrund von Reservistentätigkeit',
          'Besonderer Schutz bei Beorderung zu Einsätzen'
        ]
      },
      {
        id: 'beförderungen',
        title: 'Beförderungen und Laufbahn',
        content: 'Auch als Reservist kann man befördert werden. Die Beförderung erfolgt nach Dienstzeit, Leistung und absolvierter Ausbildung. Regelmäßige Teilnahme an Wehrübungen ist Voraussetzung für den Aufstieg in der Reservistenlaufbahn.',
        icon: '⭐'
      },
      {
        id: 'versicherung',
        title: 'Versicherung und Versorgung',
        content: 'Während der Wehrübung sind Reservisten unfallversichert. Bei Wehrdienstbeschädigung besteht Anspruch auf Versorgung nach dem Soldatenversorgungsgesetz.',
        icon: '🏥'
      },
      {
        id: 'sozialversicherung',
        title: 'Sozialversicherung',
        content: 'Die Beiträge zur Sozialversicherung laufen während der Wehrübung weiter. Der Arbeitgeber meldet die Freistellung, die Bundeswehr übernimmt die Erstattung.',
        icon: '📋'
      }
    ],
    relatedLinks: [
      {
        label: 'Wehrübungen & Dienst',
        route: '/wehruebungen',
        icon: '📅',
        description: 'Informationen zu Übungen'
      },
      {
        label: 'USG Rechner',
        route: '/usg-rechner',
        icon: '🧮',
        description: 'Berechne deine Vergütung'
      }
    ]
  },

  cyberreserve: {
    categoryId: 'cyber',
    hero: {
      title: 'Cyber- & Fachreserve',
      subtitle: 'IT-Spezialisierungen und Fachkompetenzen',
      color: 'var(--cat-cyber)'
    },
    breadcrumbs: [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'Cyber-Reserve', route: '/cyber-reserve' }
    ],
    sections: [
      {
        id: 'cyberreserve',
        title: 'Was ist die Cyber-Reserve?',
        content: 'Die Cyber-Reserve ist eine spezialisierte Einheit für IT-Sicherheit und Cyber-Abwehr. Sie besteht aus IT-Experten aus der Wirtschaft, die ihre Fachkenntnisse der Bundeswehr zur Verfügung stellen.',
        icon: '💻'
      },
      {
        id: 'anforderungen',
        title: 'Anforderungen',
        content: 'Für die Cyber-Reserve werden spezielle Qualifikationen benötigt:',
        type: 'list',
        items: [
          'Abgeschlossenes IT-Studium oder vergleichbare Qualifikation',
          'Mehrjährige Berufserfahrung im IT-Bereich',
          'Kenntnisse in IT-Sicherheit, Netzwerktechnik oder Programmierung',
          'Sicherheitsüberprüfung nach SÜG',
          'Bereitschaft zu flexiblen Einsatzzeiten'
        ]
      },
      {
        id: 'einsatzbereiche',
        title: 'Einsatzbereiche',
        content: 'Cyber-Reservisten unterstützen in verschiedenen Bereichen:',
        type: 'list',
        items: [
          'Cyber-Abwehr und IT-Sicherheit',
          'Netzwerkadministration',
          'Softwareentwicklung',
          'Forensik und Incident Response',
          'Ausbildung und Schulung',
          'Beratung bei Digitalisierungsprojekten'
        ]
      },
      {
        id: 'fachreserve',
        title: 'Weitere Fachreserven',
        content: 'Neben der Cyber-Reserve gibt es weitere Fachreserven für Ärzte, Apotheker, Veterinäre und andere Spezialisten, die ihre beruflichen Qualifikationen einbringen.',
        icon: '⚕️'
      }
    ],
    relatedLinks: [
      {
        label: 'Ich möchte Reservist werden',
        route: '/reservist-werden',
        icon: '👤',
        description: 'Bewerbung und Voraussetzungen'
      },
      {
        label: 'Rechtliches & Karriere',
        route: '/rechtliches',
        icon: '⚖️',
        description: 'Rechte und Pflichten'
      }
    ]
  },

  news: {
    categoryId: 'news',
    hero: {
      title: 'Aktuelles & News',
      subtitle: 'Bundeswehr News und politische Entwicklungen',
      color: 'var(--cat-news)'
    },
    breadcrumbs: [
      { label: 'Dashboard', route: '/dashboard' },
      { label: 'News', route: '/news' }
    ],
    sections: [
      {
        id: 'zeitenwende',
        title: 'Zeitenwende und Aufwuchs',
        content: 'Nach der Zeitenwende 2022 baut die Bundeswehr ihre Reservistenkapazitäten massiv aus. Das Ziel: Bis 2030 sollen 200.000 aktive Reservisten zur Verfügung stehen.',
        icon: '📈'
      },
      {
        id: 'heimatschutz',
        title: 'Aufbau Heimatschutz',
        content: 'Seit April 2025 gibt es sechs Heimatschutzregimenter. Diese Regimenter bestehen hauptsächlich aus Reservisten und sind für den Schutz kritischer Infrastruktur und Host Nation Support zuständig.',
        icon: '🛡️'
      },
      {
        id: 'neuerungen',
        title: 'Aktuelle Neuerungen',
        content: 'Wichtige Änderungen für Reservisten:',
        type: 'list',
        items: [
          'Erhöhung der Mindestleistung nach USG (April 2024)',
          'Neue Dienstposten für Reservisten',
          'Ausbau der Cyber-Reserve',
          'Verbesserte Vereinbarkeit mit zivilem Beruf',
          'Modernisierung der Ausrüstung'
        ]
      },
      {
        id: 'info',
        title: 'Bleib informiert',
        content: 'Diese Seite wird regelmäßig aktualisiert mit wichtigen Neuigkeiten für Reservisten. Offizielle Informationen findest du auf bundeswehr.de',
        icon: 'ℹ️'
      }
    ],
    relatedLinks: [
      {
        label: 'Heimatschutz',
        route: '/heimatschutz',
        icon: '🛡️',
        description: 'Informationen zum Heimatschutz'
      },
      {
        label: 'Ich möchte Reservist werden',
        route: '/reservist-werden',
        icon: '👤',
        description: 'Jetzt bewerben'
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

