
import { Component, signal } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Documents } from '../documents/documents';
import { Links } from '../links/links';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Documents, Links, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly showMainContent = signal(true);
}