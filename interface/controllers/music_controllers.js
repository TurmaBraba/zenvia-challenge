const analyzingFile = require("../../common/analyzing-file-mime");
const analyzingText = require("../../common/analyzing-text");
const textFile = require("../../objects/text-file");

const musicControllers = async (musicController) => {
    try {
        const isText = textFile[musicController[0].content]
        console.log('Texto? ', isText);
        if(isText) {
            await analyzingText(musicController[0].to, musicController[0].from, musicController[0].nome)
        } else {
            await analyzingFile(musicController[0].mime, musicController[0].to, musicController[0].from, musicController[0].url, musicController[0].nome)
        }
    } catch (error) {
        console.log('Ocorreu um erro no controlador(Music COntrollers) ====>>> ', error);
    }
}

module.exports = musicControllers;