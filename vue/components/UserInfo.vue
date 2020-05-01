<script>
    export default {
        name: 'UserInfo',

        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="sidebar"></div>
</template>

<style lang="scss" scoped>

    div.sidebar {
        position: absolute;
        height: 800px;
        width: 300px;
        top: 0;
        left: 0;

        background-color: black;
        border-radius: 5px;

        z-index: 3;
    }

</style>