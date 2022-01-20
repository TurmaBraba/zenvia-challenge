const useCaseText = require("../application/use-case-text");
const wellcome = require("./conversation/wellcome");
const wellcomeAgain = require("./conversation/wellcomeAgain");
const statusCodes = require("./statusCodes");

const analyzingText = async (id, to, from, name) => {
    try {  
        const typeMessage = ((id === 1) ? wellcome(name): wellcomeAgain(name));
        const message = (!typeMessage ? 'Que bom ter você por aqui novamente.' : typeMessage)
        return useCaseText(to, from, message)
    } catch (error) {
        console.log(`Ocorreu um erro durante Analise de analyzingText) ====>>> , ${error}`);
        return statusCodes(500, 'Ocorreu um erro interno.', error);       
    }
}

module.exports = analyzingText