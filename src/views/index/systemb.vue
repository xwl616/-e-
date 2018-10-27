<template>
    <div class="system above">
        <router-link to="" v-for="(item,index) in systemList" :key="index">
        <div class="system-wrap">
            <div class="system-img">
                <img :src="item.pic">
            </div>
            <div class="system-title">
                {{item.title}}
                <div class="system-item">
                    {{item.currentTime}}
                    <div>
                        <img src="../../assets/12-eye.png">
                        {{item.count}}
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
                systemList: []
            }
        },
        methods:{
            getData(){
                this.$axios.fetch('get','/news/newsList.do?page=1&rows=10&type=4').then(res => {
                    if(res.code == 1){
                        this.systemList = res.rows
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
.system a{
    text-decoration: none;
}
.system-wrap{
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
    .system-img{
        img{
            width: 80px;
            height: 80px;
            margin: 10px 10px;
        }
    }
    .system-title{
        flex: 1;
        margin-top: 10px;
        color: #333;
        position: relative;
    }
    .system-item{
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