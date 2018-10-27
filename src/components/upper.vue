<template>
    <mt-header :title='title' fixed >
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
</template>

<script>
    export default {
        computed:{
            title() {
               return this.$route.meta.title;
            }
        }
    }
</script>

<style lang='scss'>
.mint-header{
    height: 50px;
    background: #c50206;
}
</style>