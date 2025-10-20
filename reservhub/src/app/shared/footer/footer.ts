import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule, MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected readonly currentYear = signal(new Date().getFullYear());
  protected readonly brandName = signal('Gefechtsstand-Reserve');

  protected readonly legalLinks = signal<FooterLink[]>([
    { label: 'Datenschutzerklärung', path: '/privacy-policy' },
    { label: 'Impressum', path: '/legal-notice' }
  ]);
}