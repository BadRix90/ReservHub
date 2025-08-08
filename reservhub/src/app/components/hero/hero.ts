import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [ MatCardModule],
  styleUrl: './hero.scss'
})
export class Hero {
  protected readonly title = signal('ReservHub');
  protected readonly subtitle = signal('Ihre Reservierungsplattform');
}