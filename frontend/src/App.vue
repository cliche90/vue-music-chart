<template>
<div>
    <Navigator />
    <router-view></router-view>
</div>
</template>

<script>
import Navigator from './components/Navigator.vue';

export default {
    components: {
        Navigator,
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>