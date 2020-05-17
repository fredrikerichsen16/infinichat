<script>

import { mapState } from 'vuex';

export default {
    name: 'Chat',

    data() {
        return {
            showSelf: false,
            muted: false,
        }
    },

    computed: mapState(['chatParticipants', 'user']),
}

</script>

<template>
    <div class="container">
        <img :src="user.avatar" class="self" v-show="showSelf">

        <section :class="{'single': chatParticipants.length === 1, 'double': chatParticipants.length === 2}">
            <img v-for="participant in chatParticipants" :src="participant.avatar">
        </section>

        <div class="toolbar">
            <ul>
                <li @click="muted = !muted">
                    <span class="icon-mic-off" v-show="muted"></span>
                    <p v-show="muted">Unmute</p>

                    <span class="icon-mic" v-show="!muted"></span>
                    <p v-show="!muted">Mute</p>
                </li>
                <li @click="showSelf = !showSelf">
                    <span class="icon-instagram"></span>
                    <p v-show="showSelf">Disable Video</p>
                    <p v-show="!showSelf">Enable Video</p>
                </li>
                <li>
                    <span class="icon-message-circle"></span>
                    <p>Chat</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

div.container {
    position: relative;
    height: 700px;
    width: 1100px;
    top: calc(50% - 350px);
    left: calc(50% - 550px);
    background-color: white;
    border-radius: 5px;
}

section {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    top: calc(50% - 225px);

    img {
        width: 33%;
        height: 450px;
    }

    &.single img {
        width: 60%;
    }

    &.double img {
        width: 45%;
    }
}

img.self {
    height: 140px;
    width: 250px;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
}

div.toolbar {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 50px;
    background: black;
    border-radius: 20px;

    li {
        display: inline-block;
        margin-right: 25px;
        cursor: pointer;

        &:last-of-type {
            margin-right: 0;
        }
    }

    span {
        color: white;
        font-size: 26px;
        left: calc(50% - 13px);
        position: relative;
    }

    p {
        color: white;
        font-size: 12px;
        margin-top: 5px;
    }
}

</style>