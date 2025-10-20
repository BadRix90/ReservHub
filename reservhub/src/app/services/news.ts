import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NewsArticle, NewsResponse } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly apiUrl = environment.newsApiUrl;
  private readonly apiKey = environment.newsApiKey;
  
  public readonly articles = signal<NewsArticle[]>([]);
  public readonly loading = signal<boolean>(false);
  public readonly error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  public fetchBundeswehrNews(): void {
    this.loading.set(true);
    this.error.set(null);

    const keywords = '(Bundeswehr OR Heimatschutz OR Reservist OR Reservedienst) AND (Deutschland OR German)';
    const url = `${this.apiUrl}/everything?q=${encodeURIComponent(keywords)}&language=de&sortBy=publishedAt&pageSize=20&apiKey=${this.apiKey}`;

    this.http.get<NewsResponse>(url).subscribe({
      next: (response) => {
        const filtered = this.filterRelevantArticles(response.articles);
        this.articles.set(filtered.slice(0, 10));
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Fehler beim Laden der News');
        this.loading.set(false);
        console.error('News API Error:', err);
      }
    });
  }

  private filterRelevantArticles(articles: NewsArticle[]): NewsArticle[] {
    const relevantKeywords = [
      'bundeswehr',
      'heimatschutz',
      'reservist',
      'reservedienst',
      'wehrübung',
      'territorial',
      'landesverteidigung'
    ];

    return articles.filter(article => {
      const text = `${article.title} ${article.description || ''}`.toLowerCase();
      return relevantKeywords.some(keyword => text.includes(keyword));
    });
  }

  public getArticles(): NewsArticle[] {
    return this.articles();
  }
}