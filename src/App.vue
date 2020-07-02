<template>
    <div id="app" ref="app">
        <transition>
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App',

    mounted() {
        //hack:安卓键盘改变view高度
        this.$utils.listenKeybord({ $el: this.$refs.app });
    }
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}

.v-enter,
.v-leave-to {
    opacity: 0;
}

/* v-enter-active 【入场动画的时间段】 */
/* v-leave-active 【离场动画的时间段】 */
.v-enter-active,
.v-leave-active {
    transition: all 0.8s ease;
}
</style>
