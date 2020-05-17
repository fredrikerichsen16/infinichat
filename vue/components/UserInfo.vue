<script>
    export default {
        name: 'UserInfo',

        props: ['user'],

        methods: {
            close() {
                /**
                 * Settimeout is necessary because otherwise the panel is removed so quickly that the click
                 * is registered on the plane rather than the user info sidebar, so the blob moves to that location.
                 */
                setTimeout(() => {
                    this.$store.commit('SET_USER_UNDER_INSPECTION', null);
                }, 50);
            }
        }
    }
</script>

<template>
    <div class="sidebar" id="inspectUserPanel">
        <div v-if="user">
            <img :src="user.avatar" alt="User's avatar">
            <header>
                <h1 class="name">{{ user.name }}</h1>
                <p class="bio">{{ user.bio }}</p>
            </header>
            <ul>
                <li><span class="property">Age</span><span class="value">{{ user.age }}</span></li>
                <li><span class="property">School</span><span class="value">{{ user.school }}</span></li>
                <li><span class="property">From</span><span class="value">{{ user.from }}</span></li>
                <li><span class="property">Friends With</span><span class="value">{{ user.friendsWith }}</span></li>
            </ul>
        </div>
        <button class="close" @click="close" id="closeInspectUserPanelButton">Close</button>
    </div>
</template>

<style lang="scss" scoped>

div.sidebar {
    position: absolute;
    height: 700px;
    width: 300px;
    top: 0;
    left: 0;

    background-color: black;
    border-radius: 5px 0 0 5px;

    z-index: 3;

    font-weight: 300;
    font-family: Roboto;

    transition: transform .3s;

    &.slidein-enter {
        transform: translateX(-300px);
    }
    &.slidein-enter-to {
        transform: translateX(0);
    }

    &.slidein-leave {
        transform: translateX(0);
    }
    &.slidein-leave-to {
        transform: translateX(-300px);
    }
}

img {
    width: 100%;
    height: 200px;
}

header {
    padding: 14px;

    > h1 {
        color: white;
        font-size: 22px;
        margin-top: 10px;
    }

    > p.bio {
        color: #ccc;
        margin-top: 5px;
    }
}

ul li {
    width: calc(100% - 30px);
    padding: 6px 15px;
    border-bottom: 1px solid #333;
    color: white;
    float: left;

    &:first-of-type {
        border-top: 1px solid #333;
    }

    span.property {
        float: left;
        color: #ccc;
    }

    span.value {
        float: right;
        color: white;
    }
}

button.close {
    position: absolute;
    bottom: 20px;
    left: 80px;
    width: 140px;
    text-align: center;
    padding: 8px 0;
    border-radius: 25px;
    background-color: #0575E6;
    color: white;
    font-size: 16px;
    box-shadow: none;
    border: none;
    cursor: pointer;
}

</style>