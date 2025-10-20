import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.html',
  styleUrl: './documents.scss'
})
export class Documents {
  protected readonly title = signal('Dokumente');
  protected readonly subtitle = signal('Wichtige Informationen');
}