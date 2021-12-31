const ngrok = require('ngrok');
const dotenv = require('dotenv');
dotenv.config();

const options = {
    proto: 'http',
    authtoken: process.env.NGROK_TOKEN,
    addr: 3001,

}
const connectNgrok = async () => await ngrok.connect(options)

module.exports = connectNgrok

