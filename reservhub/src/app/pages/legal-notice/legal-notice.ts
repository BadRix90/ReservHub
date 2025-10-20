import { Component, signal } from '@angular/core';
import { ContentSectionComponent } from '../../shared/content-section/content-section';
import { LEGAL_NOTICE_CONTENT } from '../../models/texts';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [ContentSectionComponent],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  protected readonly content = signal(LEGAL_NOTICE_CONTENT);
}