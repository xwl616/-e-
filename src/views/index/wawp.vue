<template>
    <div class="wawp above">
        <router-link to="" v-for="(item,index) in wawpList" :key="index">
        <div class="wawp-wrap">
            <div class="wawp-img">
                <img :src="item.pic">
            </div>
            <div class="wawp-title">
                <span>{{item.title}}</span>
                <div class="wawp-item">
                    <span>{{item.currentTime}}</span>
                    <div>
                        <img src="../../assets/12-eye.png">
                        <span>{{item.count}}</span>
                    </div>
                </div>
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                wawpList: []
            }
        },
        methods: {
            getData(){
                this.$axios.fetch('get','/news/newsList.do?page=1&rows=10').then(res => {
                    console.log(res)
                    if(res.code == 1){
                        this.wawpList = res.rows
                    }
                })
            }
        },
        created() {
            this.getData()
        },
    }
</script>

<style scoped lang='scss'>
.wawp a{
    text-decoration: none;
}
.wawp-wrap{
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
    .wawp-img{
        img{
            width: 80px;
            height: 80px;
            margin: 10px 10px;
        }
    }
    .wawp-title{
        flex: 1;
        margin-top: 10px;
        color: #333;
    }
    .wawp-item{
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        margin-right: 10px;
        display: flex;
        justify-content: space-between;
        img{
          width: 10px;
          height: 10px;
          padding-right: 10px;
        }
    }
}    
</style>