<template>
  <div id="card" :class="isSelected">
      {{ song.rank }}: {{ song.title }} - {{ song.singer }}
  </div>
</template>

<script>
export default {
    props: ['song'],
    data() {
        return {
            isSelected: 'unselected',
        }
    },
    methods: {
        select() {
            this.isSelected = 'selected';
        },
        unselect() {
            this.isSelected = 'unselected';
        }
    },
}
</script>

<style scoped>
#card {
    width: calc(100% - 10px);
    height: 120px;
    text-align: center;
    margin: 5px;
    font-size: 2em;
}

#card.unselected {
    background-color: cadetblue;
}

#card.selected {
    background-color: grey
}
</style>