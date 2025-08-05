import { Component, signal } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [Navbar],
  styleUrl: './hero.scss'
})
export class Hero {
  protected readonly title = signal('ReservHub');
  protected readonly subtitle = signal('Ihre Reservierungsplattform');
}