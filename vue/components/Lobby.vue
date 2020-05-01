<script>
    export default {
        name: 'Lobby',

        data() {
            return {};
        },

        methods: {
            joinRoom() {
                this.$router.push('/plane');
            },
        },
    }
</script>

<template>
    <div class="container">
        <h1>Lobby</h1>
        <ul>
            <li>
                <div class="text">
                    <h1>Knullegutta reunion</h1>
                    <p>Leo, Mathias, Jens, Hermann, and 3 more</p>
                </div>
                <div class="button" @click="joinRoom">
                    <span>Join</span>
                </div>
            </li>
            <li>
                <div class="text">
                    <h1>Knullegutta reunion</h1>
                    <p>Leo, Mathias, Jens, Hermann, and 3 more</p>
                </div>
                <div class="button" @click="joinRoom">
                    <span>Join</span>
                </div>
            </li>
            <li>
                <div class="text">
                    <h1>Knullegutta reunion</h1>
                    <p>Leo, Mathias, Jens, Hermann, and 3 more</p>
                </div>
                <div class="button" @click="joinRoom">
                    <span>Join</span>
                </div>
            </li>
        </ul>
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
    }

</style>