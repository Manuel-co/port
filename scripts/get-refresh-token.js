// Get refresh token from authorization code
// Usage: node scripts/get-refresh-token.js YOUR_AUTH_CODE

require('dotenv').config({ path: '.env.local' });

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'https://manuchim.site/callback';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in your .env.local file');
  process.exit(1);
}

const code = process.argv[2];

if (!code) {
  console.error('Please provide the authorization code as an argument');
  process.exit(1);
}

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    Authorization: `Basic ${basic}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: REDIRECT_URI,
  }),
})
.then(response => response.json())
.then(data => {
  console.log('Your refresh token:', data.refresh_token);
  console.log('Add this to your .env.local file as SPOTIFY_REFRESH_TOKEN');
})
.catch(error => {
  console.error('Error:', error);
});