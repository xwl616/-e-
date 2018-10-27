<template>
    <div class="nation above1">
        <div class="nation-wrap">
            <router-link to="">
            <div class="nation-btn">个人总结</div>
            </router-link>
            <router-link to="">
            <div class="nation-btn">民主评议</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.nation-wrap a{
    text-decoration: none;
    .nation-btn{
        position: relative;
        top: 40%;
        width: 50%;
        border-radius: 5px;
        background: #ef473a;
        margin: 0 auto;
        text-align: center;
        padding: 10px;
        margin-bottom: 20px;
        color: #fff;
        min-height: 32px;
        line-height: 32px;
    }  
}

</style>