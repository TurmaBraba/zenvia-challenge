const { TextContent } = require("@zenvia/sdk");
const whatsapp = require("../config/connect-whatsapp");

const domainText = (to, from, nome) => { 
    console.log('Escrevendo Texto Final'); 

    const textReturn = [new TextContent(`Olá ${nome}! nós somos da equipe, Turma Braba, do Desafio Zenvia da D1 | Smarkio. Obrigado por nos enviar sua mensagem. Qualquer dúvida procure por: Gilberto Leite, Danilo Mattos ou Renato Carvalho.`)];
    
    console.log('Texto Final: ', textReturn); 
    
    whatsapp.sendMessage(to, from, ...textReturn).then((response) => {
        console.log('Resultado do Envio: ', response) 
    });;
}; 

module.exports = domainText;