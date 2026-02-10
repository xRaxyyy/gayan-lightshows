export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  category: 'Lasers' | 'Stage Design' | 'LED';
}

export interface VideoItem {
  id: number;
  thumbnailUrl: string;
  title: string;
  platform: 'youtube' | 'tiktok';
  views: string;
  url: string;
}