import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Documents } from './components/documents/documents';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'documents', component: Documents },
  { path: '**', redirectTo: '' }
];