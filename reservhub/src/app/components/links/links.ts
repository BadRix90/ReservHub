import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.html',
  styleUrl: './links.scss'
})
export class Links {
  protected readonly title = signal('Nützliche Links');
  
  protected readonly linkList = signal([
    { name: 'Reservierung', url: '/booking' },
    { name: 'Kontakt', url: '/contact' },
    { name: 'Support', url: '/support' }
  ]);
}