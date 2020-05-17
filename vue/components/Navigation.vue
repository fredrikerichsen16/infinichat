<script>

import cloneDeep from 'lodash.clonedeep';
import { mapMutations } from 'vuex';

export default {
    name: 'Navigation',

    data() {
        return {
            links: []
        };
    },

    methods: {
        ...mapMutations(['SIGN_OUT']),

        signout() {
            this.SIGN_OUT();
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

                this.links = navigation;
            },
            immediate: true,
        }
    }
}

</script>

<template>
    <div>
        <template v-for="link in links" :to="link.to">
            <router-link v-if="!link.signout" :to="link.to">{{ link.text }}</router-link>
            <a v-else @click.prevent="signout">{{ link.text }}</a>
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