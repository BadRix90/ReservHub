import { Component, signal } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { About } from '../about/about';
import { Links } from '../../shared/links/links';
import { Footer } from '../../shared/footer/footer';
import { Contact } from '../../shared/contact/contact';
import { Usg } from '../../components/usg/usg';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Dashboard,
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
  protected readonly showMainContent = signal(true);
}