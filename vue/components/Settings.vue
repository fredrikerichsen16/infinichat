<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'Settings',

        data() {
            return {
                oldPassword: '',
                newPassword: '',
                successMsg: '',
                errorMsg: '',
            }
        },

        computed: mapState(['user']),

        methods: {
            ...mapMutations(['UPDATE_USER']),

            onSubmit() {
                this.errorMsg = '';
                this.successMsg = '';

                if(this.newPassword != '') {
                    if(this.user.password === this.oldPassword) {
                        this.user.password = this.newPassword;
                    } else {
                        this.errorMsg = 'Old password is incorrect.';
                        return;
                    }
                }

                this.UPDATE_USER(this.user);

                this.successMsg = 'Successfully updated user';
            },
        }
    }
</script>

<template>
    <div class="container">
        <h1>Settings</h1>

        <p class="message error" v-show="errorMsg !== ''">{{ errorMsg }}</p>
        <p class="message success" v-show="successMsg !== ''">{{ successMsg }}</p>

        <form>
            <h2>Public Profile</h2>

            <p class="input-block">
                <label for="inputName">Name</label>
                <input type="text"
                       name="name"
                       id="inputName"
                       v-model.trim="user.name">
            </p>

            <p class="input-block">
                <label for="inputAge">Age</label>
                <input type="number"
                       name="age"
                       id="inputAge"
                       v-model="user.age">
            </p>

            <p class="input-block">
                <label for="inputBio">Bio</label>
                <input type="text"
                       name="bio"
                       id="inputBio"
                       v-model="user.bio">
            </p>

            <p class="input-block">
                <label for="selectAvatar">Avatar</label>
                <select name="avatar" id="selectAvatar" v-model="user.avatar">
                    <option disabled>Select...</option>
                    <option value="https://premium.vgc.no/v2/images/b10cf31a-71ed-41c8-b8f4-593431da0907?fit=crop&h=1280&w=1900&s=bbe3a7d3028c16572f05b77fb3367a449151e171">Kobe Bryant</option>
                    <option value="https://static.boredpanda.com/blog/wp-content/uploads/2017/03/funny-cristiano-ronaldo-statue-fail-33-58dcc00c785ef__700.jpg">Cristiano Ronaldo</option>
                    <option value="https://www.cheatsheet.com/wp-content/uploads/2019/12/Taylor-Swift-5.jpg">Taylor Swift</option>
                    <option value="https://cdn.fansided.com/wp-content/blogs.dir/308/files/2014/11/Margot_Robbie.jpg">Margot Robbie</option>
                </select>
            </p>

            <h2>Change Password</h2>

            <p class="input-block">
                <label for="inputOldPassword">Old Password</label>
                <input type="password"
                       name="oldPassword"
                       id="inputOldPassword"
                       v-model.trim="oldPassword">
            </p>

            <p class="input-block">
                <label for="inputNewPassword">New Password</label>
                <input type="password"
                       name="newPassword"
                       id="inputNewPassword"
                       v-model.trim="newPassword">
            </p>

            <div class="button"
                @click.prevent="onSubmit">Submit</div>
        </form>
    </div>
</template>

<style lang="scss" scoped>

div.container {
    position: relative;
    width: 360px;
    left: calc(50% - 220px);
    top: 50%;
    transform: translateY(-50%);

    padding: 40px;
    background-color: white;
    border-radius: 5px;

    h1, h2 {
        font-weight: lighter;
    }

    h1 {
        text-align: center;
        font-size: 26px;
        margin-bottom: 8px;
    }

    h2 {
        font-size: 22px;
        font-weight: lighter;
        margin: 20px 0 14px 0;
    }

    > p.message {
        font-weight: lighter;
        color: white;

        width: calc(100% - 28px);
        padding: 8px 14px;
        border-radius: 6px;
        margin: 10px 0;

        &.error {
            background: #f05053;
        }

        &.success {
            background: #51f072;
        }
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
        font-weight: lighter;
    }

    > select {
        width: 100%;
    }
}

div.container div.button {
    margin-top: 40px;
    text-align: center;
    cursor: pointer;

    padding: 15px 30px;
    border: 2px solid #0575E6;
    border-radius: 6px;

    background-color: #0575E6;
    color: white;
}

</style>