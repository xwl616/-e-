<template>
    <div class="albopb above">
        <router-link to="" v-for="(item,index) in albopbList" :key="index">
        <div class="albopb-wrap">
            <div class="albopb-img">
                <img :src="item.pic">
            </div>
            <div class="albopb-title">
                <span>{{item.title}}</span>
                <div class="albopb-item">
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
                albopbList: []
            }
        },
        methods: {
            getData(){
                this.$axios.fetch('get','/news/newsList.do?page=1&rows=10&type=3').then(res => {
                    if(res.code == 1){
                        this.albopbList = res.rows
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
.albopb a{
    text-decoration: none;
}
.albopb-wrap{
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
    .albopb-img{
        img{
            width: 80px;
            height: 80px;
            margin: 10px 10px;
        }
    }
    .albopb-title{
        flex: 1;
        margin-top: 10px;
        color: #333;
    }
    .albopb-item{
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