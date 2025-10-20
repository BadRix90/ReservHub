import { Component, signal } from '@angular/core';
import { Breadcrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { ContentSectionComponent } from '../../shared/content-section/content-section';
import { RelatedLinksComponent } from '../../shared/related-links/related-links';
import { PAGE_CONTENTS } from '../../models/texts';

@Component({
  selector: 'app-rechtliches',
  standalone: true,
  imports: [
    Breadcrumbs,
    ContentSectionComponent,
    RelatedLinksComponent
  ],
  templateUrl: './rechtliches.html',
  styleUrl: './rechtliches.scss'
})
export class Rechtliches {
  protected readonly pageContent = signal(PAGE_CONTENTS['rechtliches']);
}
