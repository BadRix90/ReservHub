export interface ContentSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
  type?: 'text' | 'list' | 'cards';
  items?: string[];
}

export interface PageContent {
  categoryId: string;
  hero: {
    title: string;
    subtitle: string;
    color: string;
  };
  breadcrumbs: Breadcrumb[];
  sections: ContentSection[];
  relatedLinks: RelatedLink[];
}

export interface Breadcrumb {
  label: string;
  route: string;
}

export interface RelatedLink {
  label: string;
  route: string;
  icon: string;
  description: string;
}