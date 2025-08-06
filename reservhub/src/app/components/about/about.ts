import { Component, signal, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  protected readonly title = signal('ReservHub - Informationsportal');
  protected readonly subtitle = signal('Gebündelte Informationen für Reservisten der Bundeswehr');
  
  protected readonly infoSections = signal([
    {
      title: 'Dienststellen-Informationen',
      description: 'Hier finden Sie Informationen zur Suche und Kontaktaufnahme mit zuständigen Dienststellen und Truppenteilen.'
    },
    {
      title: 'Anträge & Formulare',
      description: 'Übersicht über wichtige Anträge, Formulare und deren korrekte Ausfüllung für Reservisten.'
    },
    {
      title: 'Unterhaltssicherung (USG)',
      description: 'Detaillierte Informationen zum Unterhaltssicherungsgesetz und Ihren Ansprüchen als Reservist.'
    },
    {
      title: 'Allgemeine Informationen',
      description: 'Umfassende Informationen über den Reservedienst, Rechte, Pflichten und Karrieremöglichkeiten.'
    }
  ]);
  
  protected readonly processSteps = signal([
    {
      title: 'Dienstantritt',
      items: ['Einberufungsbescheid', 'Dokumente checken', 'Anreise planen']
    },
    {
      title: 'Erste Tage',
      items: ['Einkleidung (2-4 Tage)', 'BA 90/5 Untersuchung', 'Beorderung klären']
    },
    {
      title: 'Laufender Dienst',
      items: ['USG beantragen', 'Reservedienstleistung', 'Beförderungen']
    }
  ]);
  
  protected readonly stats = signal([
    { value: '60.000', label: 'Reservisten benötigt' },
    { value: '28.000', label: 'Aktive Reservisten' },
    { value: '15.000', label: 'Ausscheidende pro Jahr' },
    { value: '4.500', label: 'Tägliche Dienstleistung' }
  ]);
  
  // Computed für SEO-optimierte Meta-Daten
  protected readonly metaDescription = computed(() => 
    `${this.title()} - ${this.subtitle()}. Moderne Reservierungsplattform mit über ${this.stats()[0].value} zufriedenen Kunden.`
  );
}