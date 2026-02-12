import { NextResponse } from 'next/server';
import { getNowPlaying } from '@/lib/spotify';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const response = await getNowPlaying();

    // Nothing is playing
    if (!response) {
      return NextResponse.json({
        isPlaying: false,
      });
    }

    const { item, is_playing, progress_ms } = response;

    // Check if item exists and is playing
    if (!is_playing || !item) {
      return NextResponse.json({
        isPlaying: false,
      });
    }

    return NextResponse.json({
      isPlaying: true,
      title: item.name,
      artist: item.artists.map((artist: any) => artist.name).join(', '),
      album: item.album.name,
      albumImageUrl: item.album.images[0]?.url,
      songUrl: item.external_urls.spotify,
      progress_ms: progress_ms,
      duration_ms: item.duration_ms,
    });
  } catch (error) {
    console.error('Error in Spotify API route:', error);
    return NextResponse.json(
      {
        isPlaying: false,
        error: 'Failed to fetch now playing data',
      },
      { status: 500 }
    );
  }
}
