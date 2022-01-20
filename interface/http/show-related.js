const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const api_key = process.env.VAGALUME_KEY;
const showRelated = async (singer, song) => {
  try {
    const optionsAxios = {
      method: 'GET',
      url: `https://api.vagalume.com.br/search.php?art=${singer}&mus=${song}&extra=relmus&nolyrics=1&apikey=${api_key}`,
    };

    const responseData = await axios(optionsAxios);
    const resultData =
      responseData.status === 200 && responseData.data.mus.related;

    return resultData;
  } catch (error) {
    console.log('Error mostrando musicas relacionadas ', error);
    return error;
  }
};
module.exports = showRelated;
