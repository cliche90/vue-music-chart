const mongoose = require('mongoose');
const MelonSong = mongoose.model('MelonSong', require('../../crawler/schema/SongSchema'));

mongoose.connect(`mongodb://${process.env.CHART_DB_ADDRESS}/music`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

let db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => console.log('Succesfully connected to mongod server'));

module.exports = {
    async getMelonSongs() {
        let query =  MelonSong.find({}, { '_id': false, '__v': false });
        return await query.exec();
    },

    async getMelonSongByRank(rank) {
        let query =  MelonSong.findOne({ 'rank': rank }, { '_id': false, '__v': false });
        return await query.exec();
    },
}