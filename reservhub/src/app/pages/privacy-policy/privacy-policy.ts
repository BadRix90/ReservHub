import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatListModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  protected readonly pageTitle = signal('Datenschutzerklärung');
  protected readonly lastUpdated = signal('Stand: Januar 2025');
}