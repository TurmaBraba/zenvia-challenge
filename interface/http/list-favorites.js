const router = require('express').Router();

module.exports = (app) => {
    router.get('/');
    app.use('/favoritos', router);
}