<template>
    <div>
        <YoutubePlayer />
        <div v-for="song in songs" :key="song.rank">
            <SongCard :song="song" />
        </div>
    </div>
</template>

<script>
import SongCard from "./components/SongCard.vue";
import YoutubePlayer from "./components/YoutubePlayer.vue";

import axios from 'axios';

export default {
    computed: {
        async songs(chartName){
            let songs = [];
            switch(songs) {
                case 'melon':
                    songs = await axios.get('/songs/melon')
                    break;
                default:
                    songs = await axios.get('/songs/melon')
                    break;
            }
             
            console.log(songs)
            return songs;
        }
    },
    data() {
        return {
        };
    },
    components: {
        SongCard,
        YoutubePlayer
    }
};
</script>

<style>
html, body {
    margin: 0;
}
</style>