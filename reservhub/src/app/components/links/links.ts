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
    }
  ]);
}