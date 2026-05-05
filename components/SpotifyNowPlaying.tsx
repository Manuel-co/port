'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-3 px-5 py-3 bg-white border-4 border-black rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-xs">
        <Music className="w-4 h-4 text-black/40 animate-pulse flex-shrink-0" />
        <span className="text-sm font-bold text-black/40">Loading…</span>
      </div>
    );
  }

  if (!nowPlaying?.isPlaying) {
    return (
      <div className="flex items-center gap-3 px-5 py-3 bg-white border-4 border-black rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-xs">
        <Music className="w-4 h-4 text-black/40 flex-shrink-0" />
        <span className="text-sm font-bold text-black/40">Not playing</span>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={nowPlaying.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        <Link
          href={nowPlaying.songUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all max-w-xs"
        >
          {/* Album art */}
          {nowPlaying.albumImageUrl && (
            <div className="relative w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden border-2 border-black">
              <Image
                src={nowPlaying.albumImageUrl}
                alt={nowPlaying.album || 'Album cover'}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
              <span className="text-[10px] font-bold text-[#1DB954] uppercase tracking-widest">Now Playing</span>
            </div>
            <p className="text-sm font-bold text-black truncate leading-tight">{nowPlaying.title}</p>
            <p className="text-xs font-medium text-black/50 truncate">{nowPlaying.artist}</p>
          </div>

          {/* Spotify logo */}
          <svg className="w-5 h-5 flex-shrink-0 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
