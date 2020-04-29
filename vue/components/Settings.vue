<script>
    export default {
        name: 'Settings',

        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="container">
        <h1>Settings</h1>

        <form>
            <h2>Public Profile</h2>

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
                <select name="avatar" id="selectAvatar">
                    <option disabled selected>Select...</option>
                    <option value="Upload">Upload Custom</option>
                    <option value="Kim Jong Un">Kim Jong Un</option>
                    <option value="Kobe Bryant">Kobe Bryant</option>
                    <option value="Joe Exotic">Joe Exotic</option>
                    <option value="Donald Trump">Donald Trump</option>
                    <option value="Angela Merkel">Angela Merkel</option>
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

            <div class="button">Submit</div>
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