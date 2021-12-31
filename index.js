const { WebhookController } = require("@zenvia/sdk");
const messageEventHandler = require("./common/message-event-handler");
//const connectNgrok = require('./config/connect-ngrok');

//const urlNgrok = Promise.resolve(connectNgrok());

//urlNgrok.then((generatedUrl) => {
  //  console.log('Url Gerada: ', generatedUrl)
    const webhook = new WebhookController({
        channel: 'whatsapp',
        //url: generatedUrl,
        port: 3001,
        messageEventHandler: async (messageEvent) => messageEventHandler(messageEvent),
        direction: "IN"
    })
    
    webhook.on('listening', () => console.log('Escutando o Webhook na porta 3001!'))
    
    
    webhook.init()   
//})




