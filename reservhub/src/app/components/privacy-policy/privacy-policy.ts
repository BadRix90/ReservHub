import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  protected readonly pageTitle = signal('Datenschutzerklärung');
  protected readonly lastUpdated = signal('Stand: Januar 2025');
}