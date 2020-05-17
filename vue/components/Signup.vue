<script>

export default {
    name: 'Signup',

    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            name: '',
            age: '',
            bio: '',
            avatar: '',
            error: '',
        }
    },

    methods: {
        signupAction() {
            this.error = '';

            if(!this.username || !this.password || !this.confirmPassword || !this.name || !this.age || !this.bio || !this.avatar) {
                this.error = 'Fill in the fields!';
                return;
            }

            if(this.password != this.confirmPassword) {
                this.error = "Passwords don't match";
                return;
            }

            let user = {
                username: this.username,
                password: this.password,
                name: this.name,
                age: this.age,
                bio: this.bio,
                avatar: this.avatar
            };

            this.$store.commit('ADD_USER', user);

            this.$router.push('/');
        },
    },
}

</script>

<template>

<div class="container">
    <h1>Sign Up</h1>

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

        <p class="input-block">
            <label for="inputConfirmPassword">Confirm Password</label>
            <input type="password"
                   name="confirmPassword"
                   id="inputConfirmPassword"
                   v-model.trim="confirmPassword">
        </p>

        <p class="input-block">
            <label for="inputName">Name</label>
            <input type="text"
                   name="name"
                   id="inputName"
                   v-model.trim="name">
        </p>

        <p class="input-block">
            <label for="inputAge">Age</label>
            <input type="number"
                   name="age"
                   id="inputAge"
                   v-model="age">
        </p>

        <p class="input-block">
            <label for="inputBio">Bio</label>
            <input type="text"
                   name="bio"
                   id="inputBio"
                   v-model="bio">
        </p>

        <p class="input-block">
            <label for="selectAvatar">Avatar</label>
            <select name="avatar" id="selectAvatar" v-model="avatar">
                <option disabled>Select...</option>
                <option value="https://premium.vgc.no/v2/images/b10cf31a-71ed-41c8-b8f4-593431da0907?fit=crop&h=1280&w=1900&s=bbe3a7d3028c16572f05b77fb3367a449151e171">Kobe Bryant</option>
                <option value="https://static.boredpanda.com/blog/wp-content/uploads/2017/03/funny-cristiano-ronaldo-statue-fail-33-58dcc00c785ef__700.jpg">Cristiano Ronaldo</option>
                <option value="https://www.cheatsheet.com/wp-content/uploads/2019/12/Taylor-Swift-5.jpg">Taylor Swift</option>
                <option value="https://cdn.fansided.com/wp-content/blogs.dir/308/files/2014/11/Margot_Robbie.jpg">Margot Robbie</option>
            </select>
        </p>

        <div class="buttons">
            <span class="btn" @click="signupAction">Sign up</span>
            <router-link to="/" class="btn">Already have an account</router-link>
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

    > select {
        width: 100%;
        display: block;
        margin-top: 8px;
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