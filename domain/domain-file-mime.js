const zenvia = require('@zenvia/sdk');
const analyzingTheMusic = require("../common/conversation/analyzingTheMusic");
const whatsapp = require("../config/connect-whatsapp");
const menuChoice = require('../interface/http/menu-choice');
const recognizeMusic = require("../interface/http/recognize-music");

let textReturn = ""
const returnMusic = []

const domainFileMime = async (mime, to, from, url, name, typeMessage) => { 
    try {     
        
        console.log('Enviando os Dados da Música'); 
        const firstMessage = analyzingTheMusic(name);
        const finalFirstMessage = (!typeMessage ? firstMessage : typeMessage)
        const contentFirstMessage = new zenvia.TextContent(finalFirstMessage)

        const response = await whatsapp.sendMessage(to, from, contentFirstMessage)
        console.log('Resultado do Envio: ', response)

        const music =  await recognizeMusic(url)

        returnMusic.push({
            artist: ((music === undefined) ? 'Desconhecido' : (music.artist)),
            title: ((music === undefined) ? 'Desconhecido' : (music.title)),
            album: ((music === undefined) ? 'Desconhecido' : (music.album)),
            data:  ((music === undefined) ? 'Desconhecido' : (music.release_date)),
            gravadora: ((music === undefined) ? 'Desconhecido' : (music.label))
        })
     
        console.log('Dados da Música ', returnMusic)

        textReturn = `Artista: ${ returnMusic[0].artist};\n Título: ${ returnMusic[0].title};\n Título: ${ returnMusic[0].album};\n Data: ${ returnMusic[0].data};\n Gravadora: ${ returnMusic[0].gravadora}`

        console.log('Dados Gerado: ', textReturn)
        
        const contentFinalMessage = new zenvia.TextContent(textReturn)

        const finalResponse = await whatsapp.sendMessage(to, from, contentFinalMessage);        
        console.log(`Resultado do Envio: ${finalResponse}`);
        menuChoice(to, from, name)

    } catch (error) {
        console.log('Ocorreu um erro na Regra de Negócio em domainFileMime ====>>> ', error);            
    }


}; 

module.exports = domainFileMime;