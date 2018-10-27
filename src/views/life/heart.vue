<template>
    <div class="heart above">
        <div class="heart-wrap">
            <div class="heart-img">
                <img src="../../assets/nopass.png">
            </div>
            <div class="heart-title">审核失败</div>
            <div class="heart-btn">继续审核</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.heart-img{
    display: flex;
    justify-content: center;
    padding-top: 50px;
    img{
        width: 92px;
        height: 92px;
    }
}
.heart-title{
    text-align: center;
    line-height: 2;
    color: #666;
}
.heart-btn{
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