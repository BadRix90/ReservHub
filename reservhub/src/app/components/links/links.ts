import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface ExternalLink {
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-links',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './links.html',
  styleUrl: './links.scss'
})
export class Links {
  protected readonly title = signal('Wichtige Links');

  protected readonly externalLinks = signal<ExternalLink[]>([
    {
      title: 'Unterhaltssicherung',
      url: 'https://www.bundeswehr.de/de/betreuung-fuersorge/besoldung-versorgung-soldaten/unterhaltssicherung',
      description: 'Informationen zur Unterhaltssicherung für Soldaten'
    },
    {
      title: 'Bundeswehr',
      url: 'https://www.bundeswehr.de/de/',
      description: 'Offizielle Website der Bundeswehr'
    },
    {
      title: 'Reservistenverband',
      url: 'https://www.reservistenverband.de/',
      description: 'Verband der Reservisten der Deutschen Bundeswehr'
    },
    {
      title: 'Reserve der Bundeswehr',
      url: 'https://www.bundeswehr.de/de/menschen-karrieren/die-reserve-der-bundeswehr',
      description: 'Karriere und Informationen zur Reserve'
    },
    {
      title: 'Ansprechpartner für Reservisten',
      url: 'https://www.reservistenverband.de/fuer-reservisten/anlaufstellen-und-ansprechpartner/',
      description: 'Zentrale Ansprechpartner wie Landeskommandos und S1-ResAngel'
    },
    {
      title: 'Karriereportal der Bundeswehr – Reservisten',
      url: 'https://www.bundeswehrkarriere.de/karriere/reservistinnen-und-reservisten/418',
      description: 'Karrierechancen, Vergütung und Weiterbildung für Reservisten'
    },
    {
      title: 'Rechtliche Grundlagen für Reservisten',
      url: 'https://www.bundeswehr.de/de/organisation/streitkraeftebasis/aktuelles/grundlagendokumente-fuer-die-reserve-5409132',
      description: 'Wehrpflichtgesetz, Reservistengesetz, Arbeitsplatzschutz u. v. m.'
    },
    {
      title: 'Territoriale Reserve & Heimatschutz',
      url: 'https://www.bundeswehr.de/de/organisation/streitkraeftebasis/auftrag/territoriale-reserve',
      description: 'Aufgaben der Heimatschutzkräfte und Rolle der Reserve im Inland'
    }
  ]);

openLink(url: string): void {
  window.open(url, '_blank', 'noopener');
}

}