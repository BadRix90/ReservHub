import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected readonly currentYear = signal(new Date().getFullYear());
  protected readonly companyName = signal('ReservHub');
}