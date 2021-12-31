const { Client } = require('@zenvia/sdk');
const dotenv = require('dotenv');
dotenv.config();

console.log('...Conectando WhatsApp')
const client = new Client(process.env.ZENVIA_TOKEN);

const whatsapp = client.getChannel('whatsapp');
console.log('Conexão Whats ', whatsapp)

module.exports = whatsapp;