import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);
  
  protected readonly navItems = signal([
    { label: 'Info', path: '/about', fragment: undefined },
    { label: 'Dokumente', path: '/documents', fragment: undefined },
    { label: 'Links', path: '/links', fragment: undefined },
    { label: 'Kontakt', path: '/contact', fragment: undefined }
  ]);
  
  protected toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }
  
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}