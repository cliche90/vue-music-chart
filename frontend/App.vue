<template>
  <div>
      <div>{{ name }}</div>

      <div v-for="song in songs" :key="song.rank">
          <SongCard :song="song" />
      </div>
  </div>
</template>

<script>
import SongCard from './components/SongCard.vue';

export default {
    data() {
        return {
            name: 'vue music chart!',
            songs: [
                { rank: 1, title: 'hello1', singer: 'adele1' },
                { rank: 2, title: 'hello2', singer: 'adele2' },
                { rank: 3, title: 'hello3', singer: 'adele3' },
                { rank: 4, title: 'hello4', singer: 'adele4' },
            ],
        }
    },
    methods: {

    },
    components: {
        SongCard,
    }
}
</script>

<style scoped>

</style>