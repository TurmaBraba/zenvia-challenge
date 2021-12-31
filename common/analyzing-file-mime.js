const useCaseFileMime = require("../application/use-case-file-mime");
const isNullData = require("./is-null-data");

const arrayAnalyzing = [];
let isNull = false;

const analyzingFile = async (mime, to, from, url, nome) => {
    try {
        console.log('Analisando dados de aúdio')
        arrayAnalyzing.push(mime);
        arrayAnalyzing.push(to);
        arrayAnalyzing.push(from);
        arrayAnalyzing.push(url);
        arrayAnalyzing.push(nome);
                
        for (const array of arrayAnalyzing) {
            isNull = isNullData(array)                        
        }
        (!isNull && (console.log('Analisado com sucesso') || await useCaseFileMime(mime, to, from, url, nome)))
    } catch (error) {
        console.log('Ocorreu um erro no Analise de TextanalyzingText) ====>>> ', error);        
    }
}

module.exports = analyzingFile