const useCaseText = require("../application/use-case-text");
const isNullData = require("./is-null-data");

const arrayAnalyzing = [];
let isNull = false;

const analyzingText = async (to, from, nome) => {
    try {
        console.log('Analisando dados de texto')
        arrayAnalyzing.push(to);
        arrayAnalyzing.push(from);
        arrayAnalyzing.push(nome);
        
        for (const array of arrayAnalyzing) {
            isNull = isNullData(array)                        
        }
        (!isNull && (console.log('Analisado com sucesso') || useCaseText(to,from, nome)))
    } catch (error) {
        console.log('Ocorreu um erro no Analise de TextanalyzingText) ====>>> ', error);        
    }
}

module.exports = analyzingText