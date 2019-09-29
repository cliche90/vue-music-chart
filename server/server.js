const axios = require('axios');
const cheerio = require('cheerio');
const urlencode = require('urlencode');

const getVideoIdFrom = async(keyword) => {
    try {
        let url = `https://www.youtube.com/results?search_query=${urlencode(keyword)}`;
        let searchResult = await axios.get(url);        
        let $ = cheerio.load(searchResult.data)
        let videoURL = $('.yt-simple-endpoint')
        console.log(searchResult.data)
        let videoId = videoURL.replace(/(.*watch\?v=)/, '');
        
        return videoId;
    } catch(e) {
        console.error(e);
    }
};

getVideoIdFrom('허각+hello')