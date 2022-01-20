const querystring = require('qs');
const axios = require('axios');
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

    createPlayList: async ( clientID, token) => {            
        try {
        
            let body = {
                'name': 'Playlis chatbot music',
                'description': 'músicas identifacadas no chatbot-music',
                'public': true
            };
            let config = {
                method: 'post',
                url: `https://api.spotify.com/v1/users/${clientID}/playlists`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: body
            }
                const result = await axios(config);
                return result.data
            } catch (error) {
                console.log(`Ocorreu o erro: ${error}`)
            }      

    },

    addToplaylist: async ( resultAudd, playlistID, token) => {

        try {
            let { uri } = resultAudd;
            let query = querystring.stringify({uris: uri});
            console.log(`https://api.spotify.com/v1/playlists/${playlistID}/tracks?${query}`);

            let config = {
                method: 'post',
                url: `https://api.spotify.com/v1/playlists/${playlistID}/tracks?${query}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            };
                const result = await axios(config);
                return result
            } catch (error) {
                console.log('Erro em Add item a playList', error.message)
            }
    }


};


module.exports = spotify;