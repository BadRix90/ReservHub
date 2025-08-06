import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected readonly currentYear = signal(new Date().getFullYear());
  protected readonly brandName = signal('Gefechtsstand-Reserve');

  protected readonly quickLinks = signal<FooterLink[]>([
    { label: 'Info', path: '/about' },
    { label: 'Dokumente', path: '/documents' },
    { label: 'Links', path: '/links' },
    { label: 'Kontakt', path: '/contact' }
  ]);

  protected readonly legalLinks = signal<FooterLink[]>([
    { label: 'Datenschutzerklärung', path: '/privacy-policy' },
    { label: 'Impressum', path: '/legal-notice' }
  ]);
}