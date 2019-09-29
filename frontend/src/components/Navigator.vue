<template>
<div class="navi">
    <router-link to="/page01">Page01</router-link>
    <router-link to="/page02">Page02</router-link>
</div>
</template>

<style scoped>
@font-face {
    font-family: 'Monstserrat';
    src: url('../public/fonts/Montserrat-Black.ttf');
}

.navi {
    position: sticky;
    top: 0;
    height: 15%;
    font-size: 40px;
    border-radius: 0 0 0 75px;
    background-color: #9557C2;
    text-align: center;
    font-family: 'Monstserrat';
}
</style>