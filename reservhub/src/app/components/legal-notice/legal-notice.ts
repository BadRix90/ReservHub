import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  protected readonly pageTitle = signal('Impressum');
  protected readonly lastUpdated = signal('Stand: Januar 2025');
}