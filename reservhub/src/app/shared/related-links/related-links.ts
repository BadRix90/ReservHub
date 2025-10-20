import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { RelatedLink } from '../../models/page-content.model';

@Component({
  selector: 'app-related-links',
  standalone: true,
  templateUrl: './related-links.html',
  styleUrl: './related-links.scss'
})
export class RelatedLinksComponent {
  links = input.required<RelatedLink[]>();

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}