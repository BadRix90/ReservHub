import { Component, signal } from '@angular/core';
import { ContentSectionComponent } from '../../shared/content-section/content-section';
import { PRIVACY_POLICY_CONTENT } from '../../models/texts';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ContentSectionComponent],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  protected readonly content = signal(PRIVACY_POLICY_CONTENT);
}