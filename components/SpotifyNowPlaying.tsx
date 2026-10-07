'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

  if (loading || !nowPlaying?.isPlaying) {
    return (
      <div className="flex items-center gap-3 note uppercase tracking-wide text-paper/50">
        <span className="h-2 w-2 rounded-full bg-paper/40" />
        {loading ? 'Tuning in…' : 'Spotify — not playing'}
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
          className="group flex items-center gap-3 max-w-[260px]"
        >
          {nowPlaying.albumImageUrl && (
            <div className="relative w-11 h-11 flex-shrink-0 overflow-hidden rounded-full animate-[spin_8s_linear_infinite]">
              <Image src={nowPlaying.albumImageUrl} alt={nowPlaying.album || 'Album cover'} fill className="object-cover" />
            </div>
          )}
          <div className="min-w-0">
            <p className="note uppercase tracking-wide text-paper/50 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1DB954] animate-pulse" /> Now playing
            </p>
            <p className="text-sm truncate group-hover:underline underline-offset-4">{nowPlaying.title}</p>
            <p className="note truncate text-paper/60">{nowPlaying.artist}</p>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
