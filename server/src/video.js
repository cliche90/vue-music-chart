const axios = require('axios');
const cheerio = require('cheerio');
const urlencode = require('urlencode');

module.exports = {
    async getVideoId(keyword) {
        try {
            let url = `https://www.youtube.com/results?search_query=${urlencode(keyword)}`;
            let searchResult = await axios.get(url);
            let $ = cheerio.load(searchResult.data)
            let videoId = $('.yt-simple-endpoint').replace(/(.*watch\?v=)/, '');
            return videoId;
        } catch(e) {
            console.error(e);
        }
    },
}