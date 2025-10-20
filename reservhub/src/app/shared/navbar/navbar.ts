import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  protected readonly navItems = signal([
    { label: 'Info', fragment: 'about' },
    { label: 'USG Rechner', fragment: 'usg' },
    { label: 'Links', fragment: 'links' },
    { label: 'Kontakt', fragment: 'contact' }
  ]);

  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected scrollToSection(fragment: string): void {
    this.closeMenu();
    
    if (fragment === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}