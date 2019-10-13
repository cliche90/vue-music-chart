const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/melon', async (req, res, next) => {
    console.log('melon chart queried');
    res.send(await db.getMelonSongs());
})

router.get('/melon/:rank', async (req, res, next) => {
    console.log('rank', req.params.rank, 'is query target');
    res.send(await db.getMelonSongByRank(req.params.rank));
})

module.exports = router;