const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    rank: Number,
    title: String,
    singer: String,
});