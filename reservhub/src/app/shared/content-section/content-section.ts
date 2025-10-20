import { Component, input } from '@angular/core';
import { ContentSection } from '../../models/page-content.model';

@Component({
  selector: 'app-content-section',
  standalone: true,
  templateUrl: './content-section.html',
  styleUrl: './content-section.scss'
})
export class ContentSectionComponent {
  section = input.required<ContentSection>();
}