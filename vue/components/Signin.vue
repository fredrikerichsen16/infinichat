<script>

export default {
    name: 'Signin',

    data() {
        return {
            username: '',
            password: '',
            error: '',
        }
    },

    methods: {
        signinAction() {
            this.error = '';

            if(!this.username || !this.password) {
                this.error = 'Fill in the fields!';
                return;
            }

            const users = this.$store.state.users;
            let userIdx = users.findIndex(u => u.username === this.username);
            let user = users[userIdx] || undefined;

            if(!user || user.password != this.password) {
                this.error = 'Wrong password or username';
                return;
            }

            this.$store.commit('SET_USER', userIdx);

            this.$router.push('lobby');
        },
    },
}

</script>

<template>

<div class="container">
    <h1>Sign In</h1>

    <p class="error" v-show="error !== ''">{{ error }}</p>

    <form>
        <p class="input-block">
            <label for="inputUsername">Email</label>
            <input type="text"
                   name="username"
                   id="inputUsername"
                   v-model.trim="username">
        </p>

        <p class="input-block">
            <label for="inputPassword">Password</label>
            <input type="password"
                   name="password"
                   id="inputPassword"
                   v-model.trim="password">
        </p>

        <div class="buttons">
            <span class="btn" @click="signinAction">Sign in</span>
            <router-link to="/signup" class="btn">Sign up</router-link>
        </div>
    </form>
</div>

</template>

<style lang="scss" scoped>

div.container {
    position: absolute;
    width: 460px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    padding: 40px;
    background-color: white;
    border-radius: 5px;

    > h1 {
        text-align: center;
        font-size: 26px;
        margin-bottom: 8px;
    }

    > p.error {
        font-weight: lighter;
        color: white;

        width: calc(100% - 28px);
        padding: 8px 14px;
        background: #f05053;
        border-radius: 6px;
        margin: 10px 0;
    }
}

div.container p.input-block {
    display: block;
    margin-bottom: 10px;

    > input {
        font-size: 16px;
        padding: 8px;
        width: calc(100% - 16px);
        outline: none;
        margin-top: 5px;

        &:focus {
            border-color: #eee;
        }
    }

    > label {
        font-size: 18px;
    }
}

div.container div.buttons {
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

</style>