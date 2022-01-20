const useCaseText = require("../application/use-case-text");
const spotify = require("../interface/controllers/spotify_controller");
const wellcome = require("./conversation/wellcome");
const wellcomeAgain = require("./conversation/wellcomeAgain");
const openConnectSpotify = require("./open-connect-spotify");
const statusCodes = require("./statusCodes");

const analyzingText = async (id, text, to, from, name) => {
    try {  
        const typeMessage = ((id === 1) ? wellcome(name): wellcomeAgain(name));
        const choiceUser = (text === '2' || text === '3')
        const connectSpotify = (choiceUser && spotify.getCodeAuthen())
        openConnectSpotify(connectSpotify)
        const message = (!typeMessage ? 'Que bom ter você por aqui novamente.' : typeMessage)
        return useCaseText(to, from, message)
    } catch (error) {
        console.log(`Ocorreu um erro durante Analise de analyzingText) ====>>> , ${error}`);
        return statusCodes(500, 'Ocorreu um erro interno.', error);       
    }
}

module.exports = analyzingText