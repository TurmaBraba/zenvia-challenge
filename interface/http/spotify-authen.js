const router = require('express').Router();
const spotifyMethods = require('../controllers/spotify_controller');

module.exports = (app) => {
    router.get('/', (request, response) => {       

        response.redirect(spotifyMethods.getCodeAuthen());
    });

    router.get('/callback', async (request, response) => {
        const result = request.query;

        if (result.code) {
            try {
                const userData = await spotifyMethods.getDataUser(result.code);
   
                await spotifyMethods.setTokenRedis(userData, '22999462291');
                console.log('Login Spotify Bem Sucessido');
   
                await spotifyMethods.createPlayList('22999462291');
   
                response.redirect('https://api.whatsapp.com/send?phone=551148377404&text=Login%20Aprovado');
   
           } catch (error) {
               response.redirect('https://api.whatsapp.com/send?phone=551148377404&text=Login%20Falhou');               
           }
        } else {
           response.redirect('https://api.whatsapp.com/send?phone=551148377404&text=Login%20Falhou');
        };
    });

    app.use('/spotify', router);
}