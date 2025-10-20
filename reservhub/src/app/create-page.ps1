# Parameter
param(
    [Parameter(Mandatory=$true)]
    [string]$PageName,
    
    [Parameter(Mandatory=$true)]
    [string]$ComponentName,
    
    [Parameter(Mandatory=$true)]
    [string]$DisplayTitle,
    
    [Parameter(Mandatory=$true)]
    [string]$Subtitle,
    
    [Parameter(Mandatory=$true)]
    [string]$CategoryColor,
    
    [Parameter(Mandatory=$false)]
    [string]$Icon = '📄'
)

Write-Host "Erstelle Page: $PageName" -ForegroundColor Cyan

# 1. Ordner erstellen
$pagePath = "pages/$PageName"
New-Item -Path $pagePath -ItemType Directory -Force | Out-Null

# 2. TypeScript
$tsContent = @"
import { Component, signal } from '@angular/core';
import { Breadcrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { ContentSectionComponent } from '../../shared/content-section/content-section';
import { RelatedLinksComponent } from '../../shared/related-links/related-links';
import { PAGE_CONTENTS } from '../../models/texts';

@Component({
  selector: 'app-$PageName',
  standalone: true,
  imports: [
    Breadcrumbs,
    ContentSectionComponent,
    RelatedLinksComponent
  ],
  templateUrl: './$PageName.html',
  styleUrl: './$PageName.scss'
})
export class $ComponentName {
  protected readonly pageContent = signal(PAGE_CONTENTS['$($PageName.Replace('-',''))']);
}
"@
Set-Content -Path "$pagePath/$PageName.ts" -Value $tsContent

# 3. HTML
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
Set-Content -Path "$pagePath/$PageName.html" -Value $htmlContent

# 4. SCSS
$scssContent = @"
@use '../../../styles/page-template' as *;

@include category-page-layout;
"@
Set-Content -Path "$pagePath/$PageName.scss" -Value $scssContent

# 5. Route in app.routes.ts hinzufügen
Write-Host "Route manuell hinzufügen zu app.routes.ts:" -ForegroundColor Yellow
Write-Host "import { $ComponentName } from './pages/$PageName/$PageName';" -ForegroundColor White
Write-Host "{ path: '$PageName', component: $ComponentName }," -ForegroundColor White

# 6. Content Template für texts.ts
Write-Host "`nContent Template für texts.ts:" -ForegroundColor Yellow
$contentTemplate = @"

$($PageName.Replace('-','')): {
  categoryId: '$($PageName.Replace('-',''))',
  hero: {
    title: '$DisplayTitle',
    subtitle: '$Subtitle',
    color: '$CategoryColor'
  },
  breadcrumbs: [
    { label: 'Dashboard', route: '/dashboard' },
    { label: '$DisplayTitle', route: '/$PageName' }
  ],
  sections: [
    {
      id: 'intro',
      title: 'Überschrift 1',
      content: 'Dein Content hier...',
      icon: '$Icon'
    }
  ],
  relatedLinks: [
    {
      label: 'Link Text',
      route: '/andere-page',
      icon: '🔗',
      description: 'Beschreibung'
    }
  ]
}
"@
Write-Host $contentTemplate -ForegroundColor White

Write-Host "`n✅ Page $PageName erstellt!" -ForegroundColor Green
Write-Host "📝 Nächste Schritte:" -ForegroundColor Cyan
Write-Host "1. Route in app.routes.ts einfügen" -ForegroundColor White
Write-Host "2. Content in models/texts.ts bei PAGE_CONTENTS einfügen" -ForegroundColor White