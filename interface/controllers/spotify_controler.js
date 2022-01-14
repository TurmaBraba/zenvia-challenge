const querystring = require('qs');
const axios = require('axios');
require('dotenv').config();

const spotify = {
    
    getCodeAuthen: () => {
        return 'https://accounts.spotify.com/authorize?' + querystring.stringify({
            response_type: 'code',
            client_id: process.env.SPOTIFY_CLIENT_ID,
            scope: process.env.SPOTIFY_CLIENT_SCOPE,
            redirect_uri: 'http://localhost:3000/spotify/callback/',
            show_dialog: true
        })
    },

    getDataUser: async (code) => {
        let data = querystring.stringify({
            code: code,
            redirect_uri: 'http://localhost:3000/spotify/callback/',
            grant_type: 'authorization_code'
        });
        let config = {
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        const resultSpotify = await axios(config);

        return resultSpotify.data;

    },
};


module.exports = spotify;