import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  protected readonly title = signal('Über ReservHub');
  protected readonly description = signal('Ihre moderne Reservierungsplattform');
}