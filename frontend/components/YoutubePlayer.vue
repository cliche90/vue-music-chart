<template>
    <div id="player"></div>
</template>

<script>
export default {
    data() {
        return {
            player: null,
            width: "100%"
        };
    },
    methods: {
        loadYoutubeScript() {
            let tag = document.createElement("script");
            tag.src = "http://www.youtube.com/iframe_api";

            let firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        },
        onYouTubeIframeAPIReady() {
            this.player = new YT.Player("player", {
                height: this.height,
                width: this.width,
                videoId: "YQHsXMglC9A",
                events: {
                    onReady: this.onPlayerReady,
                    onStateChange: this.onPlayerStateChange
                }
            });
        },
        onPlayerReady(event) {
            event.target.playVideo();
        },
        onPlayerStateChange(event) {
            console.log("player state is changed");
        }
    },
    mounted() {
        this.loadYoutubeScript();
        window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
    }
};
</script>

<style scoped>
</style>