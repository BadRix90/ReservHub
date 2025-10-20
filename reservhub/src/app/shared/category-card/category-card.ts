import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss'
})
export class CategoryCard {
  category = input.required<Category>();
  cardClicked = output<Category>();

  onClick(): void {
    this.cardClicked.emit(this.category());
  }
}