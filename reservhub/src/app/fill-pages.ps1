cd C:\Users\Dietr\Desktop\developerakademie\ReservHub\reservhub\src\app

$pages = @(
    @{name='reservist-werden'; component='ReservistWerden'},
    @{name='wehruebungen'; component='Wehruebungen'},
    @{name='rechtliches'; component='Rechtliches'},
    @{name='cyber-reserve'; component='CyberReserve'},
    @{name='news'; component='News'}
)

foreach ($page in $pages) {
    $tsFile = "pages/$($page.name)/$($page.name).ts"
    $htmlFile = "pages/$($page.name)/$($page.name).html"
    $scssFile = "pages/$($page.name)/$($page.name).scss"
    
    $tsContent = @"
import { Component, signal } from '@angular/core';
import { Breadcrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { ContentSectionComponent } from '../../shared/content-section/content-section';
import { RelatedLinksComponent } from '../../shared/related-links/related-links';
import { PAGE_CONTENTS } from '../../models/texts';

@Component({
  selector: 'app-$($page.name)',
  standalone: true,
  imports: [
    Breadcrumbs,
    ContentSectionComponent,
    RelatedLinksComponent
  ],
  templateUrl: './$($page.name).html',
  styleUrl: './$($page.name).scss'
})
export class $($page.component) {
  protected readonly pageContent = signal(PAGE_CONTENTS['$($page.name.replace('-',''))']);
}
"@
    
    $htmlContent = @"
<div class="page">
  <div class="page__hero" [style.--hero-color]="pageContent().hero.color">
    <div class="page__hero-content">
      <app-breadcrumbs [items]="pageContent().breadcrumbs" />
      
      <h1 class="page__title">{{ pageContent().hero.title }}</h1>
      <p class="page__subtitle">{{ pageContent().hero.subtitle }}</p>
    </div>
  </div>

  <div class="page__content">
    @for (section of pageContent().sections; track section.id) {
      <app-content-section [section]="section" />
    }

    <app-related-links [links]="pageContent().relatedLinks" />
  </div>
</div>
"@
    
    $scssContent = @"
@use '../../../styles/page-template' as *;

@include category-page-layout;
"@
    
    Set-Content -Path $tsFile -Value $tsContent
    Set-Content -Path $htmlFile -Value $htmlContent
    Set-Content -Path $scssFile -Value $scssContent
    
    Write-Host "Aktualisiert: $($page.name)" -ForegroundColor Green
}

Write-Host "`nAlle Pages aktualisiert!" -ForegroundColor Cyan