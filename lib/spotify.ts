const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

/**
 * Get a fresh access token using the refresh token
 * Access tokens expire after 1 hour
 */
const getAccessToken = async () => {
  try {
    const res = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=refresh_token&refresh_token=' + refresh_token,
    });

    const data = await res.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};

/**
 * Get the currently playing song
 * Returns null if nothing is playing
 */
export const getNowPlaying = async () => {
  try {
    const accessToken = await getAccessToken();
    
    if (!accessToken) {
      throw new Error('Failed to get access token');
    }

    const res = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // 204 No Content means nothing is currently playing
    if (res.status === 204) {
      return null;
    }

    if (!res.ok) {
      throw new Error(`Spotify API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error getting now playing:', error);
    throw error;
  }
};

export interface SpotifyNowPlayingData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  progress_ms?: number;
  duration_ms?: number;
}
