import { Component, signal, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  route?: string;
  icon: string;
  fragment?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  @ViewChild('drawer') drawer!: MatSidenav;
  
  protected readonly sidebarOpen = signal(true);
  protected readonly isMobile = signal(false);
  protected readonly isDarkTheme = signal(false);
  
  protected readonly navItems = signal<NavItem[]>([
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Home', route: '/home', icon: 'home' },
    { label: 'Über uns', route: '/about', icon: 'info' },
    { label: 'Dokumente', route: '/documents', icon: 'description' },
    { label: 'Datenschutz', route: '/privacy-policy', icon: 'privacy_tip' },
    { label: 'Impressum', route: '/legal-notice', icon: 'gavel' }
  ]);

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.isMobile.set(result.matches);
      if (result.matches) {
        this.sidebarOpen.set(false);
      } else {
        this.sidebarOpen.set(true);
      }
    });
    
    this.loadThemePreference();
  }

  protected toggleSidebar(): void {
    this.sidebarOpen.set(!this.sidebarOpen());
  }

  protected closeSidebar(): void {
    if (this.isMobile()) {
      this.sidebarOpen.set(false);
    }
  }

  protected navigateToHome(): void {
    if (this.isMobile()) {
      this.closeSidebar();
    }
    this.router.navigate(['/dashboard']);
  }

  protected navigateToSection(item: NavItem): void {
    if (this.isMobile()) {
      this.closeSidebar();
    }
    
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  protected toggleTheme(): void {
    this.isDarkTheme.set(!this.isDarkTheme());
    const html = document.documentElement;
    
    if (this.isDarkTheme()) {
      html.classList.add('dark-theme');
      html.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.add('light-theme');
      html.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  private loadThemePreference(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.isDarkTheme.set(true);
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.add('light-theme');
    }
  }
}