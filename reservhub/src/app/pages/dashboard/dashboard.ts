import { Component, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CategoryCard } from '../../shared/category-card/category-card';
import { Category } from '../../models/category.model';
import { CATEGORIES, TEXTS } from '../../models/texts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, CategoryCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private platformId = inject(PLATFORM_ID);
  protected readonly isBrowser = signal(isPlatformBrowser(this.platformId));
  
  protected readonly categories = signal<Category[]>(CATEGORIES);
  protected readonly title = signal(TEXTS.dashboard.title);
  protected readonly subtitle = signal(TEXTS.dashboard.subtitle);

  constructor(private router: Router) {}

  onCategoryClick(category: Category): void {
    if (this.isBrowser()) {
      this.router.navigate([category.route]);
    }
  }
}