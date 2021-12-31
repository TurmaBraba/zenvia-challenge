const { TextContent } = require("@zenvia/sdk");
const whatsapp = require("../config/connect-whatsapp");
const recognizeMusic = require("../interface/http/recognize-music");

let textReturn = ""
const returnMusic = []

const domainFileMime = async (mime, to, from, url, nome) => { 
    try {
        
        textReturn = [new TextContent(`Olá ${nome}! nós somos da equipe, Turma Braba, do Desafio Zenvia da D1 | Smarkio. Vamos identificar a sua música.`)];

        whatsapp.sendMessage(to, from, ...textReturn)
        .then((response) => {
            console.log('Resultado do Envio: ', response) 
        });  

        const music =  await recognizeMusic(url)

        returnMusic.push({
            artist: music.artist,
            title: music.title,
            album: music.album,
            data:  music.release_date,
            gravadora:  music.label
        })
     
        console.log('Dados da Música ', returnMusic)

        textReturn = `Artista: ${ returnMusic[0].artist};\n Título: ${ returnMusic[0].title};\n Título: ${ returnMusic[0].album};\n Data: ${ returnMusic[0].data};\n Gravadora: ${ returnMusic[0].gravadora}`

        console.log('Dados Gerado: ', textReturn)

        content = [new TextContent(textReturn)];

        whatsapp.sendMessage(to, from, ...content)
        .then((response) => {
            console.log('Resultado do Envio: ', response) 
        })

    } catch (error) {
        console.log('Ocorreu um erro na Regra de Negócio em domainFileMime) ====>>> ', error);            
    }


}; 

module.exports = domainFileMime;