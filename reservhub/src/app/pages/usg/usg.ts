import { Component, signal } from '@angular/core';
import { Breadcrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { ContentSectionComponent } from '../../shared/content-section/content-section';
import { RelatedLinksComponent } from '../../shared/related-links/related-links';
import { UsgCalculator } from './components/usg-calculator/usg-calculator';
import { PAGE_CONTENTS } from '../../models/texts';

@Component({
  selector: 'app-usg',
  standalone: true,
  imports: [
    Breadcrumbs,
    ContentSectionComponent,
    RelatedLinksComponent,
    UsgCalculator
  ],
  templateUrl: './usg.html',
  styleUrl: './usg.scss'
})
export class Usg {
  protected readonly pageContent = signal(PAGE_CONTENTS['usg']);
}