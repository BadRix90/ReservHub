import { Component, signal, OnInit } from '@angular/core';
import { Breadcrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { ContentSectionComponent } from '../../shared/content-section/content-section';
import { RelatedLinksComponent } from '../../shared/related-links/related-links';
import { PAGE_CONTENTS } from '../../models/texts';
import { NewsService } from '../../services/news';
import { ContentSection } from '../../models/page-content.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    Breadcrumbs,
    ContentSectionComponent,
    RelatedLinksComponent
  ],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class News implements OnInit {
  protected readonly pageContent = signal(PAGE_CONTENTS['news']);

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.fetchBundeswehrNews();
  }

  protected get allSections(): ContentSection[] {
    const staticSections = this.pageContent().sections;
    const newsArticles = this.newsService.articles();
    
    const newsSections: ContentSection[] = newsArticles.map(article => ({
      id: article.url,
      title: article.title,
      content: `${article.description || ''}\n\nQuelle: ${article.source.name} - ${new Date(article.publishedAt).toLocaleDateString('de-DE')}`,
      type: 'text'
    }));

    return [...staticSections, ...newsSections];
  }
}