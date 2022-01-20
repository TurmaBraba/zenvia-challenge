const useCaseFileMime = require("../application/use-case-file-mime");
const wellcomeMusic = require("./conversation/wellcomeMusic");
const isNullData = require("./is-null-data");

const arrayAnalyzing = [];
let isNull = false;

const analyzingFile = async (id, mime, to, from, url, name) => {
    try {
        const typeMessage = ((id === 1) && wellcomeMusic(name));
        console.log('Analisando dados de aúdio')
        arrayAnalyzing.push(mime);
        arrayAnalyzing.push(to);
        arrayAnalyzing.push(from);
        arrayAnalyzing.push(url);
        arrayAnalyzing.push(name);
                
        for (const array of arrayAnalyzing) {
            isNull = isNullData(array)                        
        }
        (!isNull && (console.log('Analisado com sucesso') || await useCaseFileMime(mime, to, from, url, name, typeMessage)))
    } catch (error) {
        console.log('Ocorreu um erro no Analise de TextanalyzingText ====>>> ', error);        
    }
}

module.exports = analyzingFile