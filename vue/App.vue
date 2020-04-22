<script>

import Clock from './components/Clock.vue';
import { mapState } from 'vuex';

export default {
    name: 'App',

    data() {
        return {};
    },

    computed: {
        ...mapState(['user'])
    },

    components: {
        Clock
    }
}

</script>

<template>
    <div>
        <h1>Hello, World!</h1>
        <p>{{ user }}</p>
        <Clock />
    </div>
</template>

<style lang="scss" scoped>

h1 {
    font-size: 24px;
}

</style>
