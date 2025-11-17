'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Music } from 'lucide-react';
import {  Spotify } from 'iconsax-reactjs';
import type { SpotifyNowPlayingData } from '@/lib/spotify';

export function SpotifyNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<SpotifyNowPlayingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();
        setNowPlaying(data);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    // Refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-400">
        <Music className="h-4 w-4 animate-pulse" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  if (!nowPlaying?.isPlaying) {
    return (
      <div className="flex items-center gap-2 text-gray-400">
        {/* <Music className="h-4 w-4" /> */}
        <Spotify size="32" />
        <span className="text-sm">Not playing</span>
      </div>
    );
  }

  return (
    <Link
      href={nowPlaying.songUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group max-w-xs"
    >
      {nowPlaying.albumImageUrl && (
        <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden">
          <Image
            src={nowPlaying.albumImageUrl}
            alt={nowPlaying.album || 'Album cover'}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {/* <Music className="h-3 w-3 text-green-500 flex-shrink-0 animate-pulse" /> */}
          <Spotify size="32" />
          <span className="text-xs text-green-500">Now Playing</span>
        </div>
        <p className="text-sm font-medium text-white truncate">
          {nowPlaying.title}
        </p>
        <p className="text-xs text-gray-400 truncate">
          {nowPlaying.artist}
        </p>
      </div>
    </Link>
  );
}
