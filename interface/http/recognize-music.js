const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const api_token = process.env.AUDD_TOKEN

const recognizeMusic = async(url) => {
    try {
        const dataRecognize = { 
            'api_token': api_token,
            'url': url,
            'return': 'deezer,spotify'
        }       
        
        const headers = {
            'Content-Type': 'multipart/form-data'
        }
            
        const optionsAxios = {
            method: 'POST',
            url: 'https://api.audd.io/',
            data: dataRecognize,
            headers: headers
        }
    
        const responseData = await axios(optionsAxios)
        const resultData = ((responseData.status === 200) && (responseData.data.result))
       
        return resultData        
        
    } catch (error) {
        console.log('Error durante reconhecimento da música(recognizeMusic) ====>>> ', error);
        return error
    }

}

module.exports = recognizeMusic;