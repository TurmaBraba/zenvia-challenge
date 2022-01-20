const zenvia = require('@zenvia/sdk');
const whatsapp = require("../../config/connect-whatsapp");
const menu = require("../../common/conversation/menu");
const statusCodes = require("../../common/statusCodes")

const menuChoice = async(to, from, name) => {
    try {
        const textMenu = menu(name);
        const contentMenu = new zenvia.TextContent(textMenu)
        const response = await whatsapp.sendMessage(to, from, contentMenu);        
        console.log(`Resultado do Envio: ${response}`);

    } catch (error) {
        statusCodes(500,'Erro Interno no Menu Choice', error);
    }
}

module.exports = menuChoice