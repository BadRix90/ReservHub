import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  protected readonly title = signal('ReservHub');
  protected readonly subtitle = signal('Ihre Reservierungsplattform');
}