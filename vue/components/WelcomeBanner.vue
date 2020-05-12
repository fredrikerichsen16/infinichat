<template>
    <div>
        <header>{{title}}</header>
        <div>{{content}}</div>
    </div>
</template>

<script>
    export default {
        name: "WelcomeBanner",
        data() {
            return {
                title: 'Welcome to InfiniChat!',
                content: 'please login or signup below'
            }
        }
    }
</script>

<style scoped>

</style>