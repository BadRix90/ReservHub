
import { Component, signal } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Documents } from '../documents/documents';
import { Links } from '../links/links';
import { Footer } from '../footer/footer';
import { Contact } from "../contact/contact";
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-home',
  imports: [Hero, About, Documents, Links, Footer, Contact, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly showMainContent = signal(true);
}