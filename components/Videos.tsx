import React, { useEffect, useState } from 'react';
import { Youtube, Play, ExternalLink } from 'lucide-react';
import { YOUTUBE_VIDEOS, TIKTOK_VIDEOS, SOCIAL_LINKS } from '../constants';
import { VideoItem } from '../types';

const Videos: React.FC = () => {
  const [youtubeVideos, setYoutubeVideos] = useState<VideoItem[]>(YOUTUBE_VIDEOS);

  useEffect(() => {
    const fetchLatestVideos = async () => {
      try {
        let channelId: string | null = null;
        const handle = '@GayanLightshows';

        // Strategy 1: Try yt.lemnoslife.com (Public YouTube API proxy)
        try {
            const idResponse = await fetch(`https://yt.lemnoslife.com/channels?handle=${handle}`);
            if (idResponse.ok) {
                const idData = await idResponse.json();
                channelId = idData.items?.[0]?.id;
            }
        } catch (e) {
            // Strategy 1 failed, proceed to strategy 2
        }

        // Strategy 2: Scrape channel page via AllOrigins proxy if Strategy 1 failed
        if (!channelId) {
            try {
                // Fetch the channel page HTML via a CORS proxy
                const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.youtube.com/' + handle)}`;
                const response = await fetch(proxyUrl);
                
                if (response.ok) {
                    const data = await response.json();
                    const html = data.contents;
                    // Regex to find channelId in YouTube source code (looking for "channelId":"UC...")
                    const match = html.match(/"channelId":"(UC[\w-]+)"/);
                    if (match && match[1]) {
                        channelId = match[1];
                    }
                }
            } catch (e) {
                 // Strategy 2 failed
            }
        }

        // If we found a channel ID, fetch the RSS feed
        if (channelId) {
          const rssResponse = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
          );
          
          if (rssResponse.ok) {
              const rssData = await rssResponse.json();
              if (rssData.status === 'ok' && rssData.items.length > 0) {
                const mappedVideos: VideoItem[] = rssData.items.slice(0, 2).map((item: any, index: number) => {
                  // Extract video ID from guid (format is usually yt:video:VIDEO_ID)
                  const videoId = item.guid.split(':').pop();
                  
                  // Helper to format date
                  const date = new Date(item.pubDate);
                  const formattedDate = date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' });

                  return {
                    id: 1000 + index, // Ensure unique ID
                    // Try maxresdefault for best quality
                    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
                    title: item.title,
                    platform: 'youtube',
                    views: formattedDate, // Show upload date instead of views
                    url: item.link,
                  };
                });
                setYoutubeVideos(mappedVideos);
              }
          }
        }
      } catch (error) {
        // Silent fail: keep showing default static videos if all fetches fail
        // We do not console.error here to avoid cluttering the console with expected network errors
      }
    };

    fetchLatestVideos();
  }, []);

  return (
    <section className="bg-deep-black py-20 px-4 md:px-8 border-t border-gray-900 relative overflow-hidden">
       {/* Ambient Background */}
       <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-pink opacity-10 blur-[150px] -translate-y-1/2 pointer-events-none"></div>
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-orange opacity-10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-4">
            Watch Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-orange">Live</span>
          </h2>
          <p className="text-gray-400 text-lg uppercase tracking-widest">
            Latest Shows & Highlights
          </p>
        </div>

        {/* YouTube Section */}
        <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Youtube className="text-neon-red w-8 h-8" />
                    <h3 className="text-3xl font-display uppercase">YouTube</h3>
                </div>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                    View Channel <ExternalLink size={14} />
                </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {youtubeVideos.map((video) => (
                    <a href={video.url} target="_blank" rel="noopener noreferrer" key={video.id} className="group relative block aspect-video bg-gray-900 rounded-sm overflow-hidden border border-gray-800 hover:border-neon-red transition-colors duration-300">
                        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-neon-red/20 backdrop-blur-sm flex items-center justify-center border border-neon-red/50 group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                            <h4 className="text-xl font-display uppercase text-white mb-1 line-clamp-1">{video.title}</h4>
                            <span className="text-xs font-mono text-gray-400">{video.views}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>

        {/* TikTok Section */}
        <div>
            <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                    {/* Custom TikTok Icon Shape */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-neon-pink">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <h3 className="text-3xl font-display uppercase">TikTok</h3>
                </div>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                    View Profile <ExternalLink size={14} />
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {TIKTOK_VIDEOS.map((video) => (
                    <a href={video.url} target="_blank" rel="noopener noreferrer" key={video.id} className="group relative block aspect-[9/16] bg-gray-900 rounded-sm overflow-hidden border border-gray-800 hover:border-neon-pink transition-colors duration-300">
                        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                        
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <Play className="w-10 h-10 text-white drop-shadow-lg" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-4">
                            <h4 className="text-lg font-display uppercase text-white leading-none mb-1 line-clamp-2">{video.title}</h4>
                            <span className="text-xs font-mono text-neon-pink">{video.views}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Videos;