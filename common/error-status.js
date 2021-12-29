const createError = require('http-errors');

const ErrorStatus = (request, response, next) => {
    const statusError = request.statusCode >= 400 && 
    request.statusCode <= 511 && 
    next(createError(response.statusCode));
    return statusError;
};

module.exports = (app) => app.use(ErrorStatus);