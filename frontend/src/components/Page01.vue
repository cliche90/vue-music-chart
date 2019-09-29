<template>
<div>
    <Item zIndex="-1" />
    <Item zIndex="-2" />
    <Item zIndex="-3" />
    <Item zIndex="-4" />
    Here is Page01 <br>
    Counter: {{ this.$store.state.counter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
</div>
</template>

<script>
import Item from './Item.vue';

export default {
    components: {
        Item,
    },
    data: {
        songs:[
            { title: "hello" },
            { title: "aladin" },
        ],
    },
    methods: {
        addCounter() {
            this.$store.state.counter++;
        },
        subCounter() {
            this.$store.state.counter--;
        },
    }
}
</script>
