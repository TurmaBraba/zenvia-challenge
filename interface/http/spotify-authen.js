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
                response.json(userData)
           } catch (error) {
               response.status(error.response.status).json({error: error.message});               
           }
        } else {
            response.status(500).json({ erro: 'Falha no processamento interno'});
        }  
    });

    app.use('/spotify', router);
}