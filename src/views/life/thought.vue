<template>
    <div class="thought above">
        <div class="thought-wrap">
            <div class="thought-img">
                <img src="../../assets/reviewing.png">
            </div>
            <div class="thought-title">正在审核中</div>
            <router-link to="/index">
            <div class="thought-btn">关闭</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            
        }
    }
</script>

<style scoped lang='scss'>
.thought a{
    text-decoration: none;
}
.thought-img{
    display: flex;
    justify-content: center;
    padding-top: 50px;
    img{
        width: 92px;
        height: 92px;
    }
}
.thought-title{
    text-align: center;
    line-height: 2.5;
    color: #666;     
}
.thought-btn{
    width: 60%;
    height: 40px;
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
    line-height: 40px;
    background: #c50206;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
}
</style>