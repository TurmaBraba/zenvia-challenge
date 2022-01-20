const statusCodes = (code, data, erro) => ({
    statusCode: code, 
    message: data,
    error: erro
});

module.exports = statusCodes