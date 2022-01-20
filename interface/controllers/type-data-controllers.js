const analyzingFile = require("../../common/analyzing-file-mime");
const textControllers = require("./text-controllers");

const typeDataControllers = async (musicController) => {
    try {
        for (const dataMusic of musicController) {
            if(dataMusic.content === 'text'){
                await textControllers(dataMusic.id, dataMusic.to, dataMusic.from, dataMusic.nome)
            } else {
                await analyzingFile(dataMusic.id, dataMusic.mime, dataMusic.to, dataMusic.from, dataMusic.url, dataMusic.nome)
            }
        }
    } catch (error) {
        console.log('Ocorreu um erro no controlador(Music COntrollers) ====>>> ', error);
    }
}

module.exports = typeDataControllers;