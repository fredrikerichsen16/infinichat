<script>

import { mapState } from 'vuex';

export default {
    name: 'Lobby',

    data() {
        return {};
    },

    computed: {
        ...mapState(['chatrooms'])
    },

    methods: {
        joinRoom() {
            this.$router.push('/plane');
        },

        condenseParticipants(participants) {
            let lenParticipants = participants.length;
            if(lenParticipants === 0)
            {
                return 'There is nobody in here';
            }
            else if(lenParticipants === 1)
            {
                return participants[0];
            }
            else if(lenParticipants === 2) {
                return participants[0] + ' and ' + participants[1];
            }
            else
            {
                return `${participants[0]}, ${participants[1]} and ${lenParticipants - 2} more`;
            }
        }
    },
}

</script>

<template>
    <div class="container">
        <h1>Lobby</h1>
        <ul>
            <li>
                <div class="text">
                    <h1>The boys</h1>
                    <p>Jeff, John, Bob, Kev and 5 more</p>
                </div>
                <div class="button" @click="joinRoom">
                    <span>Join</span>
                </div>
            </li>
            <li>
                <div class="text">
                    <h1>Knullegutta</h1>
                    <p>Leo, Mathias, Jens, and Hermann</p>
                </div>
                <div class="button" @click="joinRoom">
                    <span>Join</span>
                </div>
            </li>
            <li>
                <div class="text">
                    <h1>Football team boys</h1>
                    <p>Peter, Toby, Martijn, Andy and 7 more</p>
                </div>
                <div class="button" @click="joinRoom">
                    <span>Join</span>
                </div>
            </li>
            <li v-for="chatroom in chatrooms">
                <div class="text">
                    <h1>{{ chatroom.name }}</h1>
                    <p>{{ condenseParticipants(chatroom.participants) }}</p>
                </div>
                <div class="button" @click="joinRoom">
                    <span>Join</span>
                </div>
            </li>
        </ul>

        <router-link class="create-chatroom" to="/create-chatroom">Create Chatroom</router-link>
    </div>
</template>

<style lang="scss" scoped>

    div.container {
        position: relative;
        width: 360px;
        min-height: 600px;
        max-height: 1000px;
        padding: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border-radius: 5px;

        h1 {
            font-weight: lighter;
        }

        > ul {
            margin-top: 25px;
        }

        > ul li {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 5px;
            box-shadow: 0 0 2px #999;
            border-left: 14px solid black;
            box-sizing: border-box;
            position: relative;

            h1, p, div {
                font-weight: 300;
            }

            h1 {
                font-size: 20px;
                margin-bottom: 6px;
            }

            p {
                font-size: 15px;
                color: #999;
            }

            div.text {
                width: calc(100% - 80px);
                width: 100%;
            }

            div.button {
                position: absolute;
                height: 40px;
                width: 65px;
                border-radius: 0 5px 0 100%;
                top: 0;
                right: 0;
                background-color: #04cd6c;
                color: white;

                > span {
                    position: absolute;
                    left: 24px;
                    top: 5px;
                    font-size: 16px;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #04af5c;
                }
            }
        }

        > a.create-chatroom {
            position: absolute;
            bottom: 20px;
            left: 60px;
            width: 320px;
            padding: 10px 0;
            background-color: #0575E6;
            color: white;
            font-size: 18px;
            font-weight: 300;
            text-align: center;
        }
    }

</style>