const { TextContent, FileContent } = require('@zenvia/sdk');
const showRelated = require('../interface/http/show-related');

const whatsapp = require('../config/connect-whatsapp');

const domainSuggestSongs = async (to, from, nome, singer, song) => {
  const relatedSongs = await showRelated(singer, song);
  const startMessage = new TextContent(
    `${nome}, como me parece que você gosta de ${singer}, vou verificar se consigo te sugerir outra música`
  );
  whatsapp
    .sendMessage(to, from, startMessage)
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  if (relatedSongs !== []) {
    const index = Math.round(Math.random() * relatedSongs.length);
    const foundSongMessage = new TextContent(
      `Acho que você deve gostar dessa aqui:`
    );
    const songMessage = new FileContent(
      relatedSongs[index].mus.pic_medium,
      'image/jpg',
      `Que tal ${relatedSongs.mus.name} <br> Você pode ouvir no Vagalume  no link: ${relatedSongs.mus.url}`
    );

    whatsapp
      .sendMessage(to, from, [foundSongMessage, songMessage])
      .then((response) => {
        console.log('Response:', response);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  } else {
    const notFoundSongMessage = new TextContent(
      `Não tenho outras sugestões para essa musica`
    );
    whatsapp
      .sendMessage(to, from, notFoundSongMessage)
      .then((response) => {
        console.log('Response:', response);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
};

module.exports = domainSuggestSongs;
