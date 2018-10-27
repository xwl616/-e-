<template>
    <div class="life above">
        <div class="life-wrap">
            <div class="life-img">
                <img src="../../assets/timg.jpg">
            </div>
        </div>
        <div class="life-row">
            <div class="life-item">
                <router-link to="/politics" class="item1">
                    <div>
                        <img src="../../assets/icon1.png">
                        <div class="title">政治学习</div>
                    </div>
                </router-link>
                <router-link to="/thought" class="item1">
                    <div>
                        <img src="../../assets/icon2.png">
                        <div class="title">思想汇报</div>
                    </div>
                </router-link>
                <router-link to="/heart" class="item1">
                    <div>
                        <img src="../../assets/icon3.png">
                        <div class="title">心得总结</div>
                    </div>
                </router-link>
            </div>     
        </div>
        <div class="life-row2">
             <div class="life-item2">
                <router-link to="/nation" class="item2">
                    <div>
                        <img src="../../assets/icon4.png">
                        <div class="title">民族评议</div>
                    </div>
                </router-link>
                <router-link to="/flow" class="item2">
                    <div>
                        <img src="../../assets/icon5.png">
                        <div class="title">流动党员找组织</div>
                    </div>
                </router-link>
            </div>
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
.life-img{
    img{
        width: 100%;
        height: 158px;
    }
}
.life-row{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 12px;
    width: 100%;
    .life-item{
        display: flex;
        .item1{
            flex: 1;
            text-align: center;
            text-decoration: none;
            color: #666;
            font-size: 14px;
        }
        img{
            width: 85px;
            height: 85px;
        }
    }
}
.life-row2{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 12px;
    width: 66%;
    .life-item2{
        display: flex;
        .item2{
            flex: 1;
            text-align: center;
            text-decoration: none;
            color: #666;
            font-size: 14px;
        }
        img{
            width: 85px;
            height: 85px;
        }
    }
}
</style>