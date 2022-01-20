const typeDataControllers = require("../interface/controllers/type-data-controllers");

const musicController = [];
let count = 0;

const messageEventHandler = async(messageEvent) => {
    try { 
        const contents = (messageEvent.message.contents);
        for (const contentsMessageEvent of contents) {
            count = (count + 1);
            const typeContent = (contentsMessageEvent.type);
            const textContent = (contentsMessageEvent.text);
            const mimeType = (contentsMessageEvent.fileMimeType);
            const messageTo = (messageEvent.message.to);
            const messageFrom = (messageEvent.message.from);
            const fileUrl = (contentsMessageEvent.fileUrl);
            const nomeUsuario = (messageEvent.message.visitor.name);
            
            musicController.push({
                id: count,
                content: typeContent,
                text: textContent,
                mime: mimeType,
                to: messageTo,
                from: messageFrom,
                url: fileUrl,
                nome: nomeUsuario
            });
        }
        

        typeDataControllers(musicController);
        
    } catch (error) {
        console.log(`Ocorreu um erro no Analise de messageEventHandler) ====>>> , ${error}`);
        return statusCodes(500, 'Ocorreu um erro interno.', error);
    }
}

module.exports = messageEventHandler

