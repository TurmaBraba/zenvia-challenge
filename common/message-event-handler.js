const musicControllers = require("../interface/controllers/music_controllers");

const musicController = [];

const messageEventHandler = async(messageEvent) => {
    try {
        const typeContent = (messageEvent.message.contents[0].type);
        const mimeType = (messageEvent.message.contents[0].fileMimeType);
        const messageTo = (messageEvent.message.to);
        const messageFrom = (messageEvent.message.from);
        const fileUrl = (messageEvent.message.contents[0].fileUrl);
        const nomeUsuario = (messageEvent.message.visitor.name)
        
        musicController.push({
            content: typeContent,
            mime: mimeType,
            to: messageTo,
            from: messageFrom,
            url: fileUrl,
            nome: nomeUsuario
        });

        musicControllers(musicController);
        
    } catch (error) {
        console.log('Ocorreu error durante o Web Hook(messageEventHandler) do Reconhecimento da música', error)
        return error
    }
}

module.exports = messageEventHandler

