import { getNowPlaying } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await getNowPlaying();
    
    console.log('Spotify API response status:', response.status);
    
    if (response.status === 204 || response.status > 400) {
      console.log('No content or error status, returning isPlaying: false');
      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();
    console.log('Spotify API response:', JSON.stringify(song, null, 2));

    if (song.item === null) {
      console.log('No song item, returning isPlaying: false');
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    console.log('Returning song data:', { isPlaying, title, artist });

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      album,
      albumImageUrl,
      songUrl,
    });
  } catch (error) {
    console.error('Error in now-playing API:', error);
    return NextResponse.json({ isPlaying: false, error: 'API Error' });
  }
}

export const revalidate = 0;
