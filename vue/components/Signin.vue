<script>
    export default {
        name: 'Signin',

        data() {
            return {
                username: '',
                password: '',
                confirmPassword: '',
                signin: true,
                error: '',
            }
        },

        methods: {
            changeFormType() {
                this.error = '';
                this.signin = !this.signin;
            },

            signinAction() {
                this.error = '';

                if(this.username == '' || this.password == '') {
                    this.error = 'Fill in the fields!';
                    return;
                }

                if(this.password.length < 4) {
                    this.error = 'Wrong password and/or username';
                    return;
                }

                this.$router.push('plane');
            },

            signupAction() {
                this.error = '';

                if(this.username == '' || this.password == '' || this.confirmPassword == '') {
                    this.error = 'Fill in the fields!';
                    return;
                }

                if(this.password != this.confirmPassword) {
                    this.error = "Passwords don't match";
                    return;
                }

                this.$router.push('plane');
            },
        },
    }
</script>

<template>
    <div class="container">
        <h1 v-if="signin">Sign In</h1>
        <h1 v-else>Sign Up</h1>

        <p class="error" v-show="error !== ''">{{ error }}</p>

        <form>
            <p class="input-block">
                <label for="inputUsername">Username</label>
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

            <p class="input-block">
                <label for="inputConfirmPassword"
                       v-show="!signin">Confirm Password</label>
                <input type="password"
                       name="confirmPassword"
                       id="inputConfirmPassword"
                       v-model.trim="confirmPassword"
                       v-show="!signin">
            </p>

            <div class="buttons" v-if="signin">
                <span class="btn" @click="signinAction">Sign in</span>
                <span class="btn" @click="changeFormType">New user</span>
            </div>
            <div class="buttons" v-else>
                <span class="btn" @click="signupAction">Sign up</span>
                <span class="btn" @click="changeFormType">Already have an account</span>
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

    > span {
        padding: 15px 30px;
        border: 2px solid #0575E6;
        border-radius: 6px;
    }

    > span:first-of-type {
        background-color: #0575E6;
        color: white;
        margin-right: 10px;
    }

    > span:last-of-type {
        background: none;
    }
}

</style>