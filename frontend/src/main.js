import Vue from 'vue';

import store from './store';
import router from './router';

import App from './App.vue';

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');

// const getVideoIdFrom = async(keyword) => {
//     try {
//         url = `https://www.youtube.com/results?search_query=${urlencode(keyword)}`;
//         let searchResult = await axios.get(url);        
//         let $ = cheerio.load(searchResult.data)
//         let videoURL = $('#contents ytd-video-renderer a').first().attr('href')
//         let videoId = videoURL.replace(/(.*watch\?v=)/, '');

//         return videoId;
//     } catch(e) {
//         console.error(e);
//     }
// };