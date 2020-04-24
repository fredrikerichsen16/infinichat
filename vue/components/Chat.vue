<script>
    export default {
        name: 'Chat',

        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="container">
        <router-link to="/plane">Back</router-link>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Angela_Merkel._Tallinn_Digital_Summit.jpg">
    </div>
</template>

<style lang="scss" scoped>

div.container {
    position: relative;
    height: 800px;
    width: 1400px;
    top: calc(50% - 400px);
    left: calc(50% - 700px);
    background-color: white;
    border-radius: 5px;
}

div.container img {
    display: inline-block;
    width: 600px;
    height: 400px;
    margin-top: 200px;
    margin-right: 50px;
}

</style>