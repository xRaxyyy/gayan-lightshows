import { PortfolioItem, VideoItem } from './types';

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@GayanLightshows",
  tiktok: "https://www.tiktok.com/@gayan.lightshows"
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/seed/101/1600/900",
    title: "Main Stage Green",
    category: "Lasers"
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/seed/102/1600/900",
    title: "Purple Haze Setup",
    category: "Stage Design"
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/seed/103/1600/900",
    title: "Cross LED Grid",
    category: "LED"
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/seed/104/1600/900",
    title: "Beam Array",
    category: "Lasers"
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/seed/105/1600/900",
    title: "Club Atmosphere",
    category: "Stage Design"
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/seed/106/1600/900",
    title: "Neon Nights",
    category: "Lasers"
  }
];

export const YOUTUBE_VIDEOS: VideoItem[] = [
  {
    id: 1,
    thumbnailUrl: "https://picsum.photos/seed/yt1/1280/720",
    title: "Timecode Show 2025",
    platform: 'youtube',
    views: "12K views",
    url: SOCIAL_LINKS.youtube
  },
  {
    id: 2,
    thumbnailUrl: "https://picsum.photos/seed/yt2/1280/720",
    title: "Festival Mainstage Setup",
    platform: 'youtube',
    views: "8.5K views",
    url: SOCIAL_LINKS.youtube
  }
];

export const TIKTOK_VIDEOS: VideoItem[] = [
  {
    id: 1,
    thumbnailUrl: "https://picsum.photos/seed/tk1/720/1280",
    title: "Laser Sync Drop",
    platform: 'tiktok',
    views: "45K",
    url: SOCIAL_LINKS.tiktok
  },
  {
    id: 2,
    thumbnailUrl: "https://picsum.photos/seed/tk2/720/1280",
    title: "Behind the Booth",
    platform: 'tiktok',
    views: "22K",
    url: SOCIAL_LINKS.tiktok
  },
  {
    id: 3,
    thumbnailUrl: "https://picsum.photos/seed/tk3/720/1280",
    title: "POV: Lighting Operator",
    platform: 'tiktok',
    views: "105K",
    url: SOCIAL_LINKS.tiktok
  }
];