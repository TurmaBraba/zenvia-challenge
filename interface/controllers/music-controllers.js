const analyzingFile = require("../../common/analyzing-file-mime");
const analyzingText = require("../../common/analyzing-text");

const musicControllers = async (musicController) => {
    try {
        for (const dataMusic of musicController) {
            if(dataMusic.content === 'text'){
                await analyzingText(dataMusic.to, dataMusic.from, dataMusic.nome)
            } else {
                await analyzingFile(dataMusic.mime, dataMusic.to, dataMusic.from, dataMusic.url, dataMusic.nome)
            }
        }
    } catch (error) {
        console.log('Ocorreu um erro no controlador(Music COntrollers) ====>>> ', error);
    }
}

module.exports = musicControllers;