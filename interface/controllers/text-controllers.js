const analyzingText = require("../../common/analyzing-text")
const isNullEmptyUndefinedData = require("../../common/is-null-data")
const statusCodes = require("../../common/statusCodes")

const textControllers = async (id, text, to, from, name) => {
  try {  
    console.log(`Validandos os dados enviado de ${to} para ${from} por ${name}`)  
    const itsToNull = isNullEmptyUndefinedData(to) 
    const itsFromNull = isNullEmptyUndefinedData(from) 
    const itsNameNUll = isNullEmptyUndefinedData(name) 
    const validatingData = ((!itsToNull) || (!itsFromNull) || (!itsNameNUll))
    console.log(`Dados ${validatingData ? 'Validados' : 'Inválidos'} `)
    return (validatingData && analyzingText(id, text, to, from, name))
  } catch (error) {
    console.log(`Ocorreu um erro no Analise de textControllers) ====>>> , ${error}`); 
    return statusCodes(500, 'Ocorreu um erro interno.', error);
  }
}

module.exports = textControllers