<script>
    export default {
        name: 'Lobby',

        data() {
            return {
                chatroomName: '',
                friends: {
                    'Adam': false,
                    'Bryan': false,
                    'Daniel': false,
                    'Frank': false,
                    'Hanna': false,
                    'Marie': false
                }
            };
        },

        methods: {
            joinRoom() {
                this.$router.push('/plane');
            },

            onSubmit() {
                let name = this.chatroomName === '' ? 'Unnamed Room' : this.chatroomName;
                let participants = Object.entries(this.friends).filter(x => x[1]).map(x => x[0]);

                this.$store.commit('ADD_CHATROOM', {name, participants});

                this.$router.push('/lobby');
            },

            inviteFriend(friend) {
                try {
                    this.friends[friend] = !this.friends[friend];
                } catch(e) {
                    console.log(e);
                }
            }
        },
    }
</script>

<template>
    <div class="container">
        <h1>Create Chatroom</h1>

        <input type="text" placeholder="Name" v-model="chatroomName">

        <div class="invite-friends">
            <p>Invite Friends</p>
            <ul>
                <li v-for="(invited, friend) in friends">
                    <span class="person" @click="inviteFriend(friend)">{{ friend }}</span> <span class="invited" v-show="invited">Invited</span>
                </li>
            </ul>
        </div>

        <div class="buttons">
            <router-link to="/lobby" class="btn">Cancel</router-link>
            <span class="btn" @click="onSubmit">Create</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

div.container {
    position: relative;
    width: 360px;
    padding: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 5px;

    h1, p, div {
        font-weight: 300;
    }

    h1 {
        margin-bottom: 25px;
    }

    input[type="text"] {
        font-size: 20px;
        font-weight: 300;
        padding: 0 5px 8px 5px;
        outline: none;
        border: none;
        border-bottom: 1px solid #5e5e5e;
        width: calc( 100% - 10px );
        margin-bottom: 14px;
    }

    div.invite-friends {
        padding: 10px 20px;
        width: calc(100% - 40px);
        background-color: white;
        box-shadow: 0 0 2px #aaa;
        border-radius: 10px;

        > p {
            font-size: 18px;
            font-weight: normal;
            margin-bottom: 8px;
        }

        ul li {
            margin-bottom: 4px;
            cursor: pointer;

            > span.invited {
                text-align: right;
                color: #04cd6c;
            }
        }
    }

    div.buttons {
        margin-top: 40px;
        text-align: center;
        cursor: pointer;

        span, a {
            padding: 15px 30px;
            border: 2px solid #0575E6;
            border-radius: 6px;
            color: black;
        }

        span {
            background-color: #0575E6;
            color: white;
            margin-right: 10px;
        }

        a {
            background: none;
        }
    }
}

</style>