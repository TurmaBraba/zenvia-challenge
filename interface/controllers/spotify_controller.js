const querystring = require('qs');
const axios = require('axios');
const redis_client = require('../../common/db/redis_connect');
require('dotenv').config();

const spotify = {
    
    getCodeAuthen: () => {
        // Gerar url para autentificação
        return `https://accounts.spotify.com/authorize?${ querystring.stringify({
            response_type: 'code',
            client_id: process.env.SPOTIFY_CLIENT_ID,
            scope: process.env.SPOTIFY_CLIENT_SCOPE,
            redirect_uri: 'http://localhost:3000/spotify/callback/',
            show_dialog: true
        })}`;
    },

    getDataUser: async (code) => {
       
        // recuperar tokens do usuário
        let data = querystring.stringify({
            code: code,
            redirect_uri: 'http://localhost:3000/spotify/callback/',
            grant_type: 'authorization_code'
        });
        let config = {
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': `Basic ${Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
         
        const resultokens = await axios(config);

        // recuperar client_id
        const resultId = await axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me',
            headers: {
                'Authorization': `Bearer ${resultokens.data.access_token}`
            }
        });

        const dataUser = {
            ...resultokens.data,
            client_id: resultId.data.id
        };
              
        return  dataUser;

    },

    setTokenRedis: async (dataUser, key) => {

        let { access_token, refresh_token, client_id } = dataUser;
        await redis_client.hmset(key, { access_token, refresh_token, client_id });
    },

    createPlayList: async (key) => {       

        redis_client.hgetall(key, async (error, data) => {
            console.log(data);
            let body = {
                'name': 'Playlis chatbot music',
                'description': 'músicas identifacadas no chatbot-music',
                'public': true
            };
            let config = {
                method: 'post',
                url: `https://api.spotify.com/v1/users/${data.client_id}/playlists`,
                headers: {
                    'Authorization': `Bearer ${data.access_token}`,
                    'Content-Type': 'application/json'
                },
                data: body
            }
            
            try {
                const result = await axios(config);
                const { id } = result.data

                await redis_client.hmset(key, { playlist_id : id });
            } catch (error) {
                console.log(data)
            }
        })        

    }


};


module.exports = spotify;