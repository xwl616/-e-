<template>
    <div class="politics above">
        <router-link to="" v-for="(item,index) in politicsList" :key="index">
        <div class="politics-wrap">
            <div class="politics-img">
                <img :src="item.pic">
            </div>
            <div class="politics-title">
                <span>{{item.title}}</span>
                <div class="politics-time">
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
                politicsList:[]
            }
        },
        methods: {
            getData(){
                this.$axios.fetch('get','/news/newsList.do?page=1&rows=10&type=8').then(res => {
                    if(res.code == 1){
                        this.politicsList = res.rows
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
.politics a{
    text-decoration: none;
}
.politics-wrap{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #333;
    .politics-img{
        img{
            width: 80px;
            height: 80px;
            margin: 10px 10px;
        }
    }
    .politics-title{
        flex: 1;
        margin-top: 10px;
        color: #333;
        position: relative;
    }
    .politics-time{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 5px;
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