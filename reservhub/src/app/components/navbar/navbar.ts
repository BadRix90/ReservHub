import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  protected readonly navItems = signal([
    { label: 'Info', path: '/about', fragment: undefined },
    { label: 'Dokumente', path: '/documents', fragment: undefined },
    { label: 'Links', path: '/links', fragment: undefined },
    { label: 'Kontakt', path: '/contact', fragment: undefined }
  ]);

  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}