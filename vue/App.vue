<script>

export default {
    name: 'App',

    data() {
        return {};
    }
}

</script>

<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<style lang="scss" scoped>

main {
    background: #4e54c8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8f94fb, #4e54c8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;

    font-family: Roboto;
}

</style>
