<template>
    <div class="partydues above">
        <div class="partydues-wrap">
            <div class="partydues-title"> 
                请选择支付方式
            </div>
            <router-link to="">
                <div class="partydues-info">
                    <div class="partydues-img ">
                        <img src="../../assets/微信icon.png"  >
                        <span>微信</span>
                    </div>
                    <div class="partydues-picture">
                        <img src="../../assets/right.png">
                    </div>
                </div>
            </router-link>
           
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                     
            }
        }
    }
</script>

<style scoped lang='scss'>
.partydues a{
    text-decoration: none;
}
.partydues-wrap {
    .partydues-title{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
    }
}

.partydues-info{
    width: 100%;
    height: 62px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    .partydues-img {
        display: flex;
        justify-content: center;
        img{
            width: 32px;
            height: 34px;
            padding: 12px 12px;
        }
        span{
            padding-top: 20px;
            color: #444;
            font-size: 16px;
        }
    }
    .partydues-picture{
        img{
           width: 7px;
           height: 14px;
           margin-top: 24px;
           margin-right: 10px;
        }
    }
}
</style>