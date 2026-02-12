export default async function handler(req, res) {
  try {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!client_id || !client_secret || !refresh_token) {
      return res.status(500).json({ error: "Missing environment variables" });
    }

    // Proper Base64 encoding
    const basic = btoa(`${client_id}:${client_secret}`);

    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token,
        }),
      }
    );

    const tokenText = await tokenResponse.text();

    let tokenData;
    try {
      tokenData = JSON.parse(tokenText);
    } catch {
      return res.status(500).json({
        error: "Spotify token response not JSON",
        raw: tokenText,
      });
    }

    if (!tokenData.access_token) {
      return res.status(500).json(tokenData);
    }

    const access_token = tokenData.access_token;

    const spotifyResponse = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const spotifyData = await spotifyResponse.json();

    if (!spotifyData.items || spotifyData.items.length === 0) {
      return res.status(200).json({ title: null });
    }

    const track = spotifyData.items[0].track;

    return res.status(200).json({
      title: track.name,
      artist: track.artists.map(a => a.name).join(", "),
      url: track.external_urls.spotify,
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
