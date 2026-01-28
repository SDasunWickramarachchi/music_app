const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

let accessToken = '';
let expiresIn = 0;

const refreshToken = async () => {
  try {
    const authBuffer = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');

    const response = await axios.post('https://accounts.spotify.com/api/token', 
      new URLSearchParams({
        grant_type: 'client_credentials'
      }), {
        headers: {
          Authorization: `Basic ${authBuffer}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

    accessToken = response.data.access_token;
    expiresIn = response.data.expires_in;

    console.log('🎉 New token fetched:', accessToken);

    // Set to refresh again before expiry
    setTimeout(refreshToken, (expiresIn - 60) * 1000); // refresh 1 min before expiry
  } catch (error) {
    console.error('Token refresh error:', error.response?.data || error.message);
  }
};

app.get('/token', (req, res) => {
  res.json({ access_token: accessToken });
});

// Start server and get first token
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
  refreshToken();
});
