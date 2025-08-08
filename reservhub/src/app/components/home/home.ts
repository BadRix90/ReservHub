// src/app/components/home/home.ts - KORRIGIERT
import { Component, signal, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Links } from '../links/links';
import { Footer } from '../footer/footer';
import { Contact } from '../contact/contact';
import { Usg } from '../usg/usg';

interface NavItem {
  label: string;
  route?: string;
  icon: string;
  fragment?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    Hero,
    About,
    Links,
    Footer,
    Contact,
    Usg
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  @ViewChild('drawer') drawer!: MatSidenav;
  
  protected readonly showMainContent = signal(true);
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
        // Mobile: Sidebar geschlossen
        this.sidebarOpen.set(false);
      } else {
        // Desktop: Sidebar immer offen
        this.sidebarOpen.set(true);
      }
    });
  }

  protected toggleSidebar(): void {
    // Nur auf Mobile togglebar
    if (this.isMobile()) {
      this.sidebarOpen.set(!this.sidebarOpen());
    }
  }

  protected closeSidebar(): void {
    // X-Button: Nur auf Mobile
    if (this.isMobile()) {
      this.sidebarOpen.set(false);
    }
  }

  protected navigateToSection(item: NavItem): void {
    console.log('navigateToSection called with:', item);
    
    // Auf Mobile: Sidebar nach Navigation schließen
    if (this.isMobile()) {
      this.closeSidebar();
    }
    
    if (item.fragment) {
      console.log('Fragment navigation to:', item.fragment);
      this.scrollToSection(item.fragment);
    } else if (item.route) {
      console.log('Route navigation to:', item.route);
      this.router.navigate([item.route]);
    }
  }

  protected scrollToSection(fragment: string): void {
    console.log('scrollToSection called with:', fragment);
    
    if (fragment === 'home') {
      // Scroll zum Top des Drawer-Contents
      const drawerContent = document.querySelector('mat-drawer-content');
      if (drawerContent) {
        drawerContent.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    
    const element = document.getElementById(fragment);
    console.log('Found element:', element);
    
    if (element) {
      // KORRIGIERT: Scroll im richtigen Container (mat-drawer-content)
      const drawerContent = document.querySelector('mat-drawer-content');
      
      if (drawerContent) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const containerTop = drawerContent.getBoundingClientRect().top;
        const scrollTop = drawerContent.scrollTop;
        const offsetPosition = elementPosition - containerTop + scrollTop - headerOffset;

        console.log('Scrolling in drawer-content to position:', offsetPosition);
        
        drawerContent.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Fallback: Simple scrollIntoView
        console.log('Using scrollIntoView fallback');
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    } else {
      console.error('Element not found for fragment:', fragment);
    }
  }
}