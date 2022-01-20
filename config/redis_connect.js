const { createClient } = require('redis');
require('dotenv').config();

const redis_client = createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

redis_client.on('connect', () => {
    console.log('redis on');
})

module.exports = redis_client;