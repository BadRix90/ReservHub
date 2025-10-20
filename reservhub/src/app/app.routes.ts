import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Documents } from './pages/documents/documents';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'documents', component: Documents },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'legal-notice', component: LegalNotice },
  { path: '**', redirectTo: '/dashboard' }
];