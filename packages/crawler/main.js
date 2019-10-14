process.setMaxListeners(15);

const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.CHART_DB_ADDRESS}/music`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

let db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => console.log('Succesfully connected to mongod server'));

let MelonSong = mongoose.model('MelonSong', require('./schema/SongSchema'));

class Song {
    constructor(rank, title, singer) {
        this.rank = rank;
        this.title = title;
        this.singer = singer;
    }
}

const getHtml = async (url) => {
    try {
        return await axios.get(url);
    } catch (e) {
        console.error(e);
    }
};

async function getSongs() {
    let html01 = await getHtml('https://www.melon.com/chart/');
    let html02 = await getHtml('https://www.melon.com/chart/#params%5Bidx%5D=51');
    let $01 = cheerio.load(html01.data);
    let $02 = cheerio.load(html02.data);

    let songsEl01 = $01('#lst50');
    let songsEl02 = $02('#lst100');

    let songs = [];
    songsEl01.each(async (i, elem) => {
        let rank = Number($01('.rank', elem).first().text().trim());
        let title = $01('.rank01 a', elem).first().text().trim();
        let singer = $01('.rank02 a', elem).first().text().trim();

        return songs.push(new Song(rank, title, singer));
    }, songs);
    songsEl02.each(async (i, elem) => {
        let rank = Number($01('.rank', elem).first().text().trim());
        let title = $02('.rank01 a', elem).first().text().trim();
        let singer = $02('.rank02 a', elem).first().text().trim();

        return songs.push(new Song(rank, title, singer));
    }, songs);

    songs.sort((a, b) => {
        if (a.rank > b.rank) {
            return 1;
        }
        if (a.rank < b.rank) {
            return -1;
        }
        return 0;
    })
    return songs;
}

function pushSongs(songs) {
    songs.forEach(song => {
        let melonSong = new MelonSong({
            rank: song.rank,
            title: song.title,
            singer: song.singer,
        });

        MelonSong.findOneAndUpdate({ rank: song.rank }, melonSong, { upsert: true }, (err) => {
            if (err) {
                console.error
            }
        });
    });
}

(async function iterate() {
    let songs = await getSongs();
    pushSongs(songs)
    setTimeout(iterate, 3000);
})();

