import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TEXTS } from '../../models/texts';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  protected readonly title = signal(TEXTS.hero.title);
  protected readonly subtitle = signal(TEXTS.hero.subtitle);
}