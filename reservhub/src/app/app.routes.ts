import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Documents } from './pages/documents/documents';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { Dashboard } from './pages/dashboard/dashboard';
import { Contact } from './shared/contact/contact';
import { Heimatschutz } from './pages/heimatschutz/heimatschutz';
import { ReservistWerden } from './pages/reservist-werden/reservist-werden';
import { Wehruebungen } from './pages/wehruebungen/wehruebungen';
import { Rechtliches } from './pages/rechtliches/rechtliches';
import { CyberReserve } from './pages/cyber-reserve/cyber-reserve';
import { News } from './pages/news/news';
import { Usg } from './pages/usg/usg';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'documents', component: Documents },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'legal-notice', component: LegalNotice },
  { path: 'heimatschutz', component: Heimatschutz },
  { path: 'usg-rechner', component: Usg },
  { path: 'reservist-werden', component: ReservistWerden },
  { path: 'wehruebungen', component: Wehruebungen },
  { path: 'rechtliches', component: Rechtliches },
  { path: 'cyber-reserve', component: CyberReserve },
  { path: 'news', component: News },
  { path: '**', redirectTo: '/dashboard' }
];