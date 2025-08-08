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
  
  protected readonly navItems = signal<NavItem[]>([
    { label: 'Info', icon: 'info', fragment: 'about' },
    { label: 'USG Rechner', icon: 'calculate', fragment: 'usg' },
    { label: 'Links', icon: 'link', fragment: 'links' },
    { label: 'Kontakt', icon: 'contact_mail', fragment: 'contact' },
    { label: 'Dokumente', route: '/documents', icon: 'description' },
    { label: 'Datenschutz', route: '/privacy-policy', icon: 'privacy_tip' },
    { label: 'Impressum', route: '/legal-notice', icon: 'gavel' }
  ]);

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    // Mobile Responsive Detection
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.isMobile.set(result.matches);
      if (result.matches) {
        this.sidebarOpen.set(false);
      } else {
        this.sidebarOpen.set(true);
      }
    });
  }

  protected toggleSidebar(): void {
    if (this.isMobile()) {
      this.sidebarOpen.set(!this.sidebarOpen());
    }
  }

  protected closeSidebar(): void {
    if (this.isMobile()) {
      this.sidebarOpen.set(false);
    }
  }

  protected navigateToHome(): void {
    // Logo-Klick: Immer zur Home-Route
    if (this.isMobile()) {
      this.closeSidebar();
    }
    this.router.navigate(['/']).then(() => {
      // Nach Navigation zum Top scrollen
      setTimeout(() => {
        const drawerContent = document.querySelector('mat-drawer-content');
        if (drawerContent) {
          drawerContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    });
  }

  protected navigateToSection(item: NavItem): void {
    if (this.isMobile()) {
      this.closeSidebar();
    }
    
    if (item.fragment) {
      // Fragment Navigation: Erst zu Home, dann scrollen
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToSection(item.fragment!);
        }, 100);
      });
    } else if (item.route) {
      // Route Navigation: Direkt zur neuen Seite
      this.router.navigate([item.route]);
    }
  }

  private scrollToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    
    if (element) {
      const drawerContent = document.querySelector('mat-drawer-content');
      
      if (drawerContent) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const containerTop = drawerContent.getBoundingClientRect().top;
        const scrollTop = drawerContent.scrollTop;
        const offsetPosition = elementPosition - containerTop + scrollTop - headerOffset;
        
        drawerContent.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }
}