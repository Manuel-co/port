# Manual Spotify Authorization (No Localhost Required)

## Step 1: Get Authorization URL
Replace `YOUR_CLIENT_ID` with your actual client ID and visit this URL:

```
https://accounts.spotify.com/authorize?response_type=code&client_id=YOUR_CLIENT_ID&scope=user-read-currently-playing%20user-read-playback-state&redirect_uri=https://example.com
```

## Step 2: Extract Code
After authorizing, you'll be redirected to `https://example.com/?code=LONG_CODE_HERE&state=...`

The page will fail to load (that's expected), but copy the `code` parameter from the URL.

## Step 3: Get Refresh Token
Run this curl command (replace YOUR_CLIENT_ID, YOUR_CLIENT_SECRET, and YOUR_CODE):

```bash
curl -X POST "https://accounts.spotify.com/api/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=YOUR_CODE&redirect_uri=https://example.com&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
```

The response will include your `refresh_token` - add that to your `.env.local` file.