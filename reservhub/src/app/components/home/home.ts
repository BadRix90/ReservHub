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
  template: `
    <mat-drawer-container class="layout-container">
      <mat-drawer #drawer class="sidebar" [mode]="isMobile() ? 'over' : 'side'" [opened]="sidebarOpen()">
        <div class="sidebar-content">
          <!-- X-Button nur auf Mobile -->
          @if (isMobile()) {
            <div class="sidebar-header">
              <mat-icon class="close-icon" (click)="closeSidebar()">close</mat-icon>
            </div>
          }
          
          <div class="logo-container" (click)="scrollToSection('home')">
            <img src="assets/img/logo/reservhub-logo.webp" alt="ReservHub Logo" class="logo">
            <h3 class="brand-text">Gefechtsstand-Reserve</h3>
          </div>
          
          <nav class="nav-menu">
            <mat-nav-list>
              @for (item of navItems(); track item.label) {
                <mat-list-item class="nav-item" (click)="navigateToSection(item)">
                  <mat-icon class="nav-icon">{{ item.icon }}</mat-icon>
                  <span class="nav-label">{{ item.label }}</span>
                </mat-list-item>
              }
            </mat-nav-list>
          </nav>
        </div>
      </mat-drawer>
      
      <div class="main-content-wrapper">
        <!-- Burger Menu nur auf Mobile -->
        @if (isMobile()) {
          <mat-toolbar class="top-toolbar">
            <mat-icon class="menu-toggle" (click)="toggleSidebar()">menu</mat-icon>
            <span class="toolbar-title">Gefechtsstand-Reserve</span>
          </mat-toolbar>
        }
        
        <div class="main-content">
          @if (showMainContent()) {
            <div class="app-wrapper">
              <main>
                <app-hero></app-hero>

                <section id="about">
                  <app-about></app-about>
                </section>

                <section id="usg">
                  <app-usg></app-usg>
                </section>

                <section id="links">
                  <app-links></app-links>
                </section>

                <section id="contact">
                  <app-contact></app-contact>
                </section>

                <app-footer></app-footer>
              </main>
            </div>
          }
        </div>
      </div>
    </mat-drawer-container>
  `,
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
    // Auf Mobile: Sidebar nach Navigation schließen
    if (this.isMobile()) {
      this.closeSidebar();
    }
    
    if (item.fragment) {
      // Fragment Navigation - direkt scrollen
      this.scrollToSection(item.fragment);
    } else if (item.route) {
      // Route Navigation
      this.router.navigate([item.route]);
    }
  }

  protected scrollToSection(fragment: string): void {
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