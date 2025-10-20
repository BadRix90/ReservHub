import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ContentSection } from '../../models/page-content.model';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './content-section.html',
  styleUrl: './content-section.scss'
})
export class ContentSectionComponent {
  section = input.required<ContentSection>();
}