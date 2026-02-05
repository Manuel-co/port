// Run this script to get your Spotify refresh token
// Usage: node scripts/spotify-auth.js

require('dotenv').config({ path: '.env.local' });

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'https://manuchim.site/callback';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in your .env.local file');
  process.exit(1);
}

const scopes = [
  'user-read-currently-playing',
  'user-read-playback-state'
].join(' ');

const params = new URLSearchParams({
  response_type: 'code',
  client_id: CLIENT_ID,
  scope: scopes,
  redirect_uri: REDIRECT_URI,
});

const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;

console.log('1. Visit this URL to authorize your app:');
console.log(authUrl);
console.log('\n2. After authorization, you\'ll be redirected to manuchim.site/callback?code=...');
console.log('3. Copy the "code" parameter from the URL');
console.log('4. Run: node scripts/get-refresh-token.js YOUR_CODE_HERE');