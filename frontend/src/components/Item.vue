<template>
<div class="item" v-bind:style="{ zIndex }">
    
</div>
</template>

<script>
export default {
    props: ['zIndex','data']
}
</script>


<style scoped>
.item {
    position: relative;
    z-index: -1;
    margin-top: -2em;
    height: 30%;
    font-size: 40px;
    border-radius: 0 0 0 75px;
    background-color: white;
    border: 1px solid;
    text-align: center;
}
</style>