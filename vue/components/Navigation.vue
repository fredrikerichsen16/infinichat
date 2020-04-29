<script>

const cloneDeep = require('lodash.clonedeep');

export default {
    name: 'Navigation',

    data() {
        return {
            links: []
        };
    },

    methods: {
        signout(e) {
            e.preventDefault();

            // sign out logic

            this.$router.push('/');
        },
    },

    watch: {
        '$route': {
            handler: function() {
                if(!this.$route.meta.hasOwnProperty('navigation')) {
                    this.links = [];
                    return;
                }

                let navigation = cloneDeep(this.$route.meta.navigation);

                navigation.map(link => {
                    if(!link.hasOwnProperty('text'))
                    {
                        link.text = link.to;
                    }

                    let toFirstChar = link.to[0];
                    if(toFirstChar === '/')
                    {
                        link.to = { path: link.to };
                        return link;
                    }

                    if(toFirstChar == '@')
                    {
                        link.signout = true;
                        // delete link.to;
                    }
                    else
                    {
                        link.to = { name: link.to }
                    }

                    return link;
                });

                console.log(1, navigation);

                this.links = navigation;
            },
            immediate: true,
        }
    },

    mounted() {
        console.log(this.$router);
        console.log(this.$route);
    }
}

</script>

<template>
    <div>
        <template v-for="link in links" :to="link.to">
            <router-link v-if="!link.signout" :to="link.to">{{ link.text }}</router-link>
            <a v-else @click="signout($event)">{{ link.text }}</a>
        </template>
    </div>
</template>

<style lang="scss" scoped>

div {
    position: absolute;
    width: 800px;
    top: 20px;
    left: calc(50% - 400px);
    text-align: center;
}

a {
    font-family: Roboto;
    font-size: 20px;
    color: white;
    margin-right: 18px;
    text-decoration: none;
    font-weight: lighter;

    &:last-of-type {
        margin-right: 0;
    }
}

</style>