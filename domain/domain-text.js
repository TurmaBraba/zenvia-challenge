const whatsapp = require("../config/connect-whatsapp");
const statusCodes = require("../common/statusCodes");
const zenvia = require('@zenvia/sdk');

const domainText = async (to, from, message) => { 
    try {
        console.log('Escrevendo Texto Final'); 

        const content = new zenvia.TextContent(message)
        
        console.log('Texto Final: ', content); 
        
        const response = await whatsapp.sendMessage(to, from, content)
        console.log(`Resultado enviado: ${response}`);
        
    } catch (error) {
        console.log('Ocorreu um erro no Analise de domainText ====>>> ', JSON.stringify(error, null,2)); 
        return statusCodes(500, 'Ocorreu um erro interno.', error);
        
    }
}; 

module.exports = domainText;