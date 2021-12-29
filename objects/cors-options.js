const CorsOptions = {
    origin: "*",
    methods: 'DELETE, GET, POST, PUT',
    allowedHeaders: 
        "Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token",
};

module.exports = {
    CorsOptions,
};
