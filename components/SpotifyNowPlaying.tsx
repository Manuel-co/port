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
    // Refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm max-w-md mx-auto"
      >
        <Music className="h-5 w-5 text-gray-400 animate-pulse" />
        <span className="text-sm text-gray-400">Loading...</span>
      </motion.div>
    );
  }

  if (!nowPlaying?.isPlaying) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm max-w-md mx-auto"
      >
        <div className="relative">
          <Music className="h-5 w-5 text-gray-400" />
        </div>
        <span className="text-sm text-gray-400">Not playing anything</span>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={nowPlaying.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href={nowPlaying.songUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group block max-w-md mx-auto"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-4 backdrop-blur-sm hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center gap-4">
              {/* Album Art */}
              {nowPlaying.albumImageUrl && (
                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden ring-2 ring-white/10 group-hover:ring-white/20 transition-all">
                  <Image
                    src={nowPlaying.albumImageUrl}
                    alt={nowPlaying.album || 'Album cover'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              )}

              {/* Song Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75" />
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-150" />
                  </div>
                  <span className="text-xs font-medium text-green-500 uppercase tracking-wider">
                    Now Playing
                  </span>
                </div>
                
                <p className="text-sm font-semibold text-white truncate mb-0.5 group-hover:text-white/90 transition-colors">
                  {nowPlaying.title}
                </p>
                
                <p className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors">
                  {nowPlaying.artist}
                </p>
              </div>

              {/* Spotify Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-green-500 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
